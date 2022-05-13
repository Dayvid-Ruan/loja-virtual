import React, { useState } from "react";
import "./admin.css";

import NavBarAdmin from "../../components/navBarAdmin/navBarAdmin";
import fetchProducteCreate from "../../services/createProducts";
import fetchUpdateUser from "../../services/updateUser";

function Admin () {
  const minNAme = 4;
  const minPrice = 1;
  const minId = 1;
  const minSaldo = 1;
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [id, setId ] = useState("");
  const [saldo, setSaldo] = useState("");
  const [error, setError] = useState("");
  const [errorUpdate, setErrorUpdate] = useState("");

  async function handerClikRegister (event) {
    event.preventDefault(event);
    const responseCreate = await fetchProducteCreate(name, price);
    if (responseCreate.message) {
      setError(responseCreate.message);
    } else {
      return alert("Produto criado com sucesso");
    }
  }

  async function handerClikUpdate (event) {
    event.preventDefault(event);
    const responseCreate = await fetchUpdateUser(id, saldo);
    if (responseCreate.message) {
      setErrorUpdate(responseCreate.message);
    } else {
      return alert("Saldo atualizado com sucesso");
    }
  }
  return (
    <div>
      <NavBarAdmin />
      <div>
        <form className="formProduct">
          <h3 className="productCreateTitle">Cadastrar Produto</h3>
          <div className="productCreate">
            <label>
         Nome:
              <input
                className="input"
                id="name"
                name="name"
                placeholder="Nome do produto"
                value={ name }
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
            Preço:
              <input
                className="input"
                type="defalt"
                id="price"
                name="price"
                placeholder="Preço do produto"
                value={ price }
                onChange={(e) => setPrice(e.target.value)}

              />
            </label>
            <button
              className="buttonAdmin"
              type="submite"
              onClick={ handerClikRegister }
              disabled={
                !(name.length >= minNAme && price.length >= minPrice)
              }
            >
          Cria produto
            </button>
          </div>
        </form>         
        <div className="errorProduct">
          {
            error && (
              <p>{ error }</p>
            )
          }
        </div>
        <form className="formUpdateUser">
          <h3 className="titleUpdateUser">Atualizar Saldo</h3>
          <div className="updateUSer">
            <label>  
              Id:
              <input
                className="input"
                id="id"
                name="id"
                placeholder="Id do usuário"
                value={ id }
                onChange={(e) => setId(e.target.value)}
              />
            </label>
            <label>
              Saldo:
              <input
                className="input"
                type="defalt"
                id="saldo"
                name="saldo"
                placeholder="Saldo do usuário"
                value={ saldo }
                onChange={(e) => setSaldo(e.target.value)}
              />
            </label>
            <button
              className="buttonAdmin"
              type="submite"
              onClick={ handerClikUpdate }
              disabled={
                !(id.length >= minId && saldo.length >= minSaldo)
              }
            >
              Atualizar
            </button>
          </div>
        </form>
        <div className="errorProduct">
          {
            errorUpdate && (
              <p>
                { errorUpdate }
              </p>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Admin;