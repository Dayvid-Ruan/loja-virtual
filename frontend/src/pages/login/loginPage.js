import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import fetchLogin from "../../services/login";
import "./login.css";

function login () {
  const regex = /^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
  const minPassword = 6;
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleClickLogin (event) {
    event.preventDefault();
    const response = await fetchLogin(email, password);
    if (response.message) {
      return setError(response.message);
    }
    if (response.role === "usuario") {
      localStorage.setItem("user", JSON.stringify(response));
      navigate("/user");
    } else {
      localStorage.setItem("admin", JSON.stringify(response));
      navigate("/admin");
    }
  }

  return(
    <div className="loginPageDiv">
      <div className="loginPage">
        <form className="formLogin">
          <h1 className="titleLogin">Login</h1> 
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
            onClick={ handleClickLogin }
            disabled={
              !(regex.test(email) && password.length >= minPassword)
            }
          >
          Login
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

export default login;