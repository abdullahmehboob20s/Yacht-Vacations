import React from "react";
import "./NextTripCard.css";
import next_trip_card_img_1 from "assets/images/next_trip_card_img_1.png";
import { Link } from "react-router-dom";

function NextTripCard() {
  return (
    <div className="next_trip_card">
      <img src={next_trip_card_img_1} alt="" className="next_trip_card_img" />
      <div className="next_trip_card_content">
        <p className="next_trip_card_title">
          How to pick your best choice with ideal price for your needs
        </p>
        <p className="next_trip_card_subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In odio vitae
          gravida iaculis metus. Pharetra nibh mattis eget massa vel.{" "}
          <Link>Read more</Link>
        </p>
      </div>
    </div>
  );
}

export default NextTripCard;
