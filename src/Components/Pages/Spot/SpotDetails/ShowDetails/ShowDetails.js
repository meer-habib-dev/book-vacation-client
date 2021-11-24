import React from "react";
import { Link } from "react-router-dom";
import "./ShowDetails.css";

const ShowDetails = ({ spot }) => {
  const { title, img, description } = spot;
  // console.log(title);
  return (
    <div>
      <div className="login-section">
        <div className=" w-10/12 h-full py-20 mx-auto ">
          <div className="show-service-box ">
            <div className="">
              <img className="mx-auto" src={img} alt="" />
            </div>
            <div>
              <p className="text-3xl text-center font-bold my-8 text-pink-500">
                {title}
              </p>
              <div className=" w-10/12 md:w-8/12 mx-auto">
                <p className="text-gray-500 font-semibold text-justify">
                  {description}
                </p>
              </div>
            </div>
            <div className="w-full md:w-8/12 grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto text-center mt-10">
              <Link to="/booking">
                {" "}
                <button className="btn-hover hover:text-black border-hover hover:bg-transparent bg-yellow rounded-full py-3 px-8 md:text-3xl font-extrabold mb-4  text-white w-full ">
                  Procced Booking
                </button>
              </Link>
              <Link to="/spot">
                <button className="backBtn hover:bg-yellow  border-hover text-black rounded-full py-3 px-8 md:text-3xl font-extrabold hover:text-white w-full">
                  Back To Spots
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
