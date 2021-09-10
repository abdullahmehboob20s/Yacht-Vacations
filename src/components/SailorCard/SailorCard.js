import React from "react";
import "./SailorCard.css";
import { FaStar } from "react-icons/fa";

function SailorCard(props) {
  const { data } = props;
  const { name, img, disc } = data;
  return (
    <div className="sailor_card">
      <img src={img} alt="" className="sailor_img" />
      <div className="sailor_stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <div className="sailor_card_titles">
        <div className="sailor_card_titles_left">
          <p className="sailor_card_title">{name}</p>
          <p className="sailor_card_subtitle">Zakynthos</p>
        </div>
        <div className="sailor_card_titles_right">
          <p className="sailor_card_date_title">July 10th 2021</p>
        </div>
      </div>

      <p className="sailor_card_discription">{disc}</p>
    </div>
  );
}

export default SailorCard;
