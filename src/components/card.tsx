import React from "react";
import "../styles/card.style.css";

const card = ({ item }: any) => {
  return (
    <div className="card">
      <img src={item?.img} />
      <div className="legend">
        <p className="description">{item?.description}</p>
      </div>
    </div>
  );
};

export default card;
