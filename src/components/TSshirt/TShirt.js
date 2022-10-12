import React from "react";

const TShirt = ({ tshirt }) => {
  let { picture, _id, name, price } = tshirt;
  return (
    <div>
      <img src={picture} alt="" />
      <h1>{name}</h1>
    </div>
  );
};

export default TShirt;
