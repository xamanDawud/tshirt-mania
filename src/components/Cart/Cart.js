import React from "react";
import "./Cart.css";

const Cart = ({ cart, handlerRemoveTshirt }) => {
  let message;
  if (cart.length === 0) {
    message = "Please Buy at least one Product";
  } else if (cart.length === 1) {
    message = (
      <div>
        <p>Sudu tomar jonno niba...?</p>
        <p>Amar jonno o ekta nao..!!</p>
      </div>
    );
  } else {
    message = "Thanks for purchasing";
  }
  return (
    <div>
      <h1>Total Prudouct: {cart.length}</h1>
      {cart.map((tshirt) => (
        <p>
          {tshirt.name}{" "}
          <button
            onClick={() => {
              handlerRemoveTshirt(tshirt);
            }}
          >
            X
          </button>
        </p>
      ))}
      {<h4>{message}</h4>}
      {cart.length === 3 ? (
        <p>Mama 3ta niso..!!!</p>
      ) : (
        <p>Mammma! kinte thako</p>
      )}
    </div>
  );
};

export default Cart;
