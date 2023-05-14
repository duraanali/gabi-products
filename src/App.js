import React, { useState, useEffect } from "react";
import "./styles.css";
import { Route, Link, Routes } from "react-router-dom";
import axios from "axios";
//Import Components
import Home from "./components/Home";
import ProductsList from "./components/products/ProductsList";
import ProductCard from "./components/products/ProductCard";


export default function App() {
  const [products, setProducts] = useState({});

  useEffect(() => {
    // https://fakestoreapi.com/products

    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
      setProducts(res.data);
    });

  }, []);


  return (
    <div className="App">
      <nav>
        <h1 className="store-header"><Link to="/" className="title">Gabi Products</Link></h1>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Shop</Link>
        </div>
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsList products={products} />} />
        <Route path="/products/:itemID" element={<ProductCard products={products} />} />
      </Routes>
    </div>
  );

}
