
import React from "react";
import "./App.css";
// import Nav from "./Components/Nav/Nav";
import Hero from "./Components/Hero/Hero";
import Product from "./Components/Hero/FeaturedProducts";
import Category from "./Components/Hero/Category";
import Shop from "./Components/Hero/Shop";
// import Footer from "./Components/footeer.jsx/Footer";

const App = () => {
  return (
    <div>
      {/* <Nav /> */}
      <Hero />
      <Shop/>
      <Product />
      <Category />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
