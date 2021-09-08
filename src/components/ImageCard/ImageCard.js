import React from "react";
import "./ImageCard.css";

function ImageCard(props) {
  return (
    <div className="image_card">
      <p className="image_card_title">{props.title}</p>
      <img src={props.image} alt="" />
    </div>
  );
}

export default ImageCard;
