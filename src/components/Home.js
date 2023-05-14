import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  
  const navigate = useNavigate();

  const routeToShop = (event) => {
    navigate("/products");
  };

  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://source.unsplash.com/F6-U5fGAOik"
        alt=""
      />
      <button className="md-button shop-button" onClick={routeToShop}>
        Shop now!
      </button>
    </div>
  );
}

export default Home;
