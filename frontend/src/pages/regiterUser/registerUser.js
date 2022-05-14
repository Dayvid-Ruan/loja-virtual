import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchRegisterUSer from "../../services/registerUSer";

function regiterUser() {
  const navigate = useNavigate();
  const minPassword = 6;
  const regex = /^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  async function handleClickRegister (event) {
    event.preventDefault();
    const response = await fetchRegisterUSer(name, email, password);
    if (response.message) {
      return setError(response.message);
    }
    if (response.role === "usuario") {
      localStorage.setItem("user", JSON.stringify(response));
      navigate("/user");
    } 
  }


  return (
    <div className="loginPageDiv">
      <div className="loginPage">
        <form className="formLogin">
          <h1 className="titleLogin">Fazer registro</h1> 
          <div><p className="infoLogin">Nome:</p></div>
          <label>
            <input
              className=""
              type="name" 
              id="nome"
              name="nome"
              placeholder="Digite seu email"
              value={ name }
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <div><p className="infoLogin">Email:</p></div>
          <label>
            <input
              className="inputLogin"
              type="email" 
              id="email"
              name="email"
              placeholder="Digite seu email"
              value={ email }
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <div><p className="infoLogin">Password:</p></div>
          <label>
            <input
              className="inputLogin"
              type="password"
              id="password"
              name="password"
              placeholder="Digite sua senha"
              value={ password }
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            className="buttonLogin"
            type="submite"
            onClick={ handleClickRegister }
            disabled={
              !(regex.test(email) && password.length >= minPassword)
            }>
          Registrar
          </button>
        </form>
        <div>
          {
            error && (
              <p>
            Usuário ou Senha inválidos
              </p>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default regiterUser;