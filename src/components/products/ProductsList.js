import React from "react";
import { Link } from "react-router-dom";

function ProductsList(props) {

    if (!props.products || !props.products.length) {
        return <h2>Loading item data...</h2>;
      }

  return (
    <div className="items-list-wrapper">

      {props.products.map((product) => (
        <div className="item-card" key={product.id}>
       
          <Link to={`/products/${product.id}`}>
            <img
              className="item-list-image"
              src={product.image}
              alt={product.title}
            />
            <p>{product.title}</p>
          </Link>
          <p>${product.price}</p>

        </div>
      ))}
      
    </div>
  );
}

export default ProductsList;
