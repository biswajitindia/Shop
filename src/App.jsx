// import React from 'react'
// import "./App.css"
// import Nav from './Components/Nav/Nav'
// import Hero from './Components/Hero/Hero'
// import Product from './Components/Hero/Product'
// import Category from './Components/Hero/Category'
// import Footer from './Components/footeer.jsx/Footer'
// const App = () => {

//   return (
//     <div>
//       {/* <h1>hello world</h1> */}
//      <Nav/>
//      <Hero/>
//     <Product />
//     <Category/>
//     <Footer/>
//     </div>
//   )
// }

// export default App


// App.jsx
import React from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Hero from "./Components/Hero/Hero";
import Product from "./Components/Hero/Product";
import Category from "./Components/Hero/Category";
import Footer from "./Components/footeer.jsx/Footer";

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Product />
      <Category />
      <Footer />
    </div>
  );
};

export default App;
