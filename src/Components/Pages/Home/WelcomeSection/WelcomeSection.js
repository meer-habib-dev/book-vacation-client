import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./WelcomeSection.css";
const WelcomeSection = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="welcome-img ">
          <img
            src="https://preview.colorlib.com/theme/platina/img/xabout-img.jpg.pagespeed.ic.k45vIUCnXh.webp"
            alt=""
          />
        </div>
        <div className="welcome-info">
          <div className="mt-4 mb-6 md:mt-0 md:mb-0 flex flex-col justify-center align-middle w-10/12 mx-auto text-center md:text-left p-4 md:p-24">
            <p className="text-4xl font-extrabold yellow mb-4">
              A very Lovely <br /> Welcome <br /> to our Hotel
            </p>
            <p className="text-gray-500 ">
              inappropriate behavior is often laughed off as “boys will be
              boys,” women face higher conduct standards especially in the
              workplace. That’s why it’s crucial that, as women, our behavior on
              the job is beyond reproach. inappropriate behavior is often
              laughed.
            </p>
            <div>
              <Link to="/spot">
                <button className="check-btn transition rounded-full px-5 py-2 mt-4 text-white hover:text-black font-bold border-2  bg-transparent ">
                  {" "}
                  Check Vacation Spots
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
