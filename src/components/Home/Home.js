import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import TShirt from "../TSshirt/TShirt";
import "./Home.css";

const Home = () => {
  let tshirtsData = useLoaderData();
  let [cart, setCart] = useState([]);

  let handlerAddToCart = (tshirt) => {
    let exists = cart.find((ts) => ts._id === tshirt._id);
    if (exists) {
      alert("Product already added");
    } else {
      let newCart = [...cart, tshirt];
      setCart(newCart);
    }
  };

  const handlerRemoveTshirt = (tshirt) => {
    const exist = cart.filter((ts) => ts._id !== tshirt._id);
    setCart(exist);
  };
  return (
    <div className="home-container">
      <div className="tshirts-container">
        {tshirtsData.map((tshirt) => (
          <TShirt
            key={tshirt._id}
            tshirt={tshirt}
            handlerAddToCart={handlerAddToCart}
          />
        ))}
      </div>
      <div className="tshirt-cart-container">
        <Cart cart={cart} handlerRemoveTshirt={handlerRemoveTshirt} />
      </div>
    </div>
  );
};

export default Home;
