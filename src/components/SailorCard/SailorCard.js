import React from "react";
import "./SailorCard.css";
import sailor_img_1 from "assets/images/sailor-img-1.png";
import { FaStar } from "react-icons/fa";

function SailorCard() {
  return (
    <div className="sailor_card">
      <img src={sailor_img_1} alt="" className="sailor_img" />
      <div className="sailor_stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <div className="sailor_card_titles">
        <div className="sailor_card_titles_left">
          <p className="sailor_card_title">Jenifer Lorans</p>
          <p className="sailor_card_subtitle">Zakynthos</p>
        </div>
        <div className="sailor_card_titles_right">
          <p className="sailor_card_date_title">July 10th 2021</p>
        </div>
      </div>

      <p className="sailor_card_discription">
        The Experience is amazing! I could get to my booking on time without any
        mistakes. Gonna book again over and over. EXCELLENT JOB
      </p>
    </div>
  );
}

export default SailorCard;
