// RouterPage.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../Nav/Nav";
import App from "../../App";
import LoginPage from "../Login/Loginpage";
import Register from "../Login/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Brands from "../brand/Brands";
import Footer from "../footeer.jsx/Footer";
import AllBrands from "../brand/AllBrands";
import Contact from "../contact/Contact";
import Cart from "../cart/Cart";
import ProductPage from "../Product/ProductPag";


const RouterPage = () => {
  return (
    <Router>
          <Nav />
    

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<App />} />

        {/* Login Page */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Register" element={< Register/>} />
         <Route path="/brands" element={<Brands />} />
          <Route path="/all-brands" element={<AllBrands />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Cart />} />
          <Route path="/ProductPag" element={ <ProductPage/>} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer/>
    </Router>
  );
};

export default RouterPage;
