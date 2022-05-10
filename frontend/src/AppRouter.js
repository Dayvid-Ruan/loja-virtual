import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/loginPage";
import UserPage from "./pages/userPage";
import AdminPage from "./pages/adminPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate replace to="/login" /> } />
      <Route path="/login" element={ <LoginPage /> } />
      <Route exact path="/user" element={ <UserPage /> } />
      <Route exact path="/admin" element={ <AdminPage /> } />
    </Routes>
  );
}

export default AppRouter;
