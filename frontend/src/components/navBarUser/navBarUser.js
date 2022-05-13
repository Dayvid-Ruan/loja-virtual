import React from "react";
import "./NavBarUser.css";

function NavBarUser () {
  const userInfo = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="navbar">
      <nav className="navUser">
        <div className="divUser">
          <p>
            <a className="linkUser" href="/" onClick={ () => localStorage.removeItem("user") }>
            Sair
            </a>
          </p>
        </div>
        <div className="userName">
          <p>{ userInfo.name }</p>
        </div>
        <div className="userSaldo">
          <p>Saldo: R${ userInfo.saldo }</p>
        </div>
      
      </nav>
    </div>
  );
}

export default NavBarUser;