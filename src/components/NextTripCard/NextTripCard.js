import React from "react";
import "./NextTripCard.css";
import { Link } from "react-router-dom";

function NextTripCard({ data }) {
  const { title, img } = data;
  return (
    <div className="next_trip_card">
      <img src={img} alt="" className="next_trip_card_img" />
      <div className="next_trip_card_content">
        <p className="next_trip_card_title">{title}</p>
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
