import React from "react";
import { Link } from "react-router-dom";
import "./SingleSpot.css";
import Flip from "react-reveal/Flip";
const SingleSpot = ({ spot }) => {
  const { _id, img, title, price } = spot;
  // console.log(spot);
  return (
    <Flip top cascade>
      <Link to={`/spotdetails/${_id}`}>
        <div className="single-spot-container">
          <div className="content-overlay"></div>
          <div className="single-spot-content">
            <img src={img} alt="" />
            <p className="single-content-title text-white font-extrabold text-center text-4xl">
              Price: {price}
            </p>
          </div>
          <div className="h-20 flex justify-center items-center">
            <p className="text-center text-2xl md:text-4xl font-extrabold text-white ">
              {title}
            </p>
          </div>
        </div>
      </Link>
    </Flip>
  );
};

export default SingleSpot;
