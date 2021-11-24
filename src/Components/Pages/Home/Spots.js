import React from "react";
import { Link } from "react-router-dom";
import "./Spots.css";
import Fade from "react-reveal/Fade";

const Spots = ({ spot }) => {
  const { _id, img, title } = spot;
  //   console.log(_id);
  return (
    <Fade big>
      <Link to={`/spotdetails/${_id}`}>
        <div className="spots-container">
          <div className="overlay"></div>
          <div className="img-container ">
            <div className="bg-img">
              {" "}
              <img src={img} alt="" />
            </div>
          </div>
          <div className="title-container hover:yellow">
            <p className="text-3xl text-center font-extrabold hover:yellow ">
              {title}
            </p>
          </div>
        </div>
      </Link>
    </Fade>
  );
};

export default Spots;
