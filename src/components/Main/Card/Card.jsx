import React from "react";

const Card = ({ card }) => {
  return (
    <>
      {card.map((item, index) => (
        <div className="card" key={index}>
          <div className="img-wrapper">
            <img src={item.src.large} alt="img" />
          </div>
          <div className="photographer">
            <p>{item.photographer}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
