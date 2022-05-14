import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/login/loginPage";
import UserPage from "./pages/user/userPage";
import AdminPage from "./pages/adminPage/adminPage";
import RegisterUser from "./pages/regiterUser/registerUser";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate replace to="/login" /> } />
      <Route path="/login" element={ <LoginPage /> } />
      <Route exact path="/user" element={ <UserPage /> } />
      <Route exact path="/admin" element={ <AdminPage /> } />
      <Route exact path="/register" element={ <RegisterUser /> } />
    </Routes>
  );
}

export default AppRouter;
