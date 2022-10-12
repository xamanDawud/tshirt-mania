import React from "react";
import "./TShirt.css";

const TShirt = ({ tshirt, handlerAddToCart }) => {
  let { picture, _id, name, price } = tshirt;
  return (
    <div className="single-tshirt">
      <img src={picture} alt="" />
      <h1>{name}</h1>
      <p>price: ${price}</p>
      <button
        onClick={() => {
          handlerAddToCart(tshirt);
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default TShirt;
