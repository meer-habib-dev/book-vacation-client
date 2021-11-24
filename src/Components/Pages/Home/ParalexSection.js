import React from "react";
import { Link } from "react-router-dom";
import "./ParalexSection.css";

const ParalexSection = () => {
  return (
    <div>
      {/* Parallex */}
      <div className="parallax"></div>
      {/* Parallex Content */}
      <div className="paralex-content bg-yellow  ">
        <p className="text-3xl md:text-6xl font-extrabold text-center text-white">
          Enjoy Vacation With <span className="text-black">Book_Spot</span>
        </p>
        <p className="text-gray-500 font-semibold text-center py-5">
          Travel to the any corner of the world, without going around in
          circles.
        </p>
        <div className="flex justify-center">
          <Link to="/mybookings">
            <button className=" hover:bg-black text-black rounded-full py-3 px-8 text-2xl md:text-3xl font-extrabold hover:text-white transition bg-white ">
              Vacation Spot
            </button>
          </Link>
        </div>
      </div>

      <div className="parallax"></div>
    </div>
  );
};

export default ParalexSection;
