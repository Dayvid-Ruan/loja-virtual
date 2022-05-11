import React from "react";
import "./NavBarAdmin.css";

function NavBarAdmin () {
  const userInfo = JSON.parse(localStorage.getItem("admin"));
  return (
    <div>
      <nav className="navAdmin">
        <div className="adminName">
          <p>{ userInfo.name }</p>
        </div>  
        <div className="divAdmin">
          <p>
            <a className="linkAdmin" href="/" onClick={ () => localStorage.removeItem("user") }>
            Logout
            </a>
          </p>
        </div>
      </nav>
    </div>
  );
}

export default NavBarAdmin;