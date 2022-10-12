import React from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import TShirt from "../TSshirt/TShirt";

const Home = () => {
  let tshirtsData = useLoaderData();
  return (
    <div className="home-container">
      <div className="tshirts-container">
        {tshirtsData.map((tshirt) => (
          <TShirt key={tshirt._id} tshirt={tshirt} />
        ))}
      </div>
      <div className="tshirt-cart-container">
        <Cart />
      </div>
    </div>
  );
};

export default Home;
