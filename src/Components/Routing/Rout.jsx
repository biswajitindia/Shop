// RouterPage.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../Nav/Nav";
import App from "../../App";
import LoginPage from "../Login/Loginpage";
import Register from "../Login/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const RouterPage = () => {
  return (
    <Router>
    

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<App />} />

        {/* Login Page */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Register" element={< Register/>} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
};

export default RouterPage;
