import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import Contact from "./Contact/Contact";
import Facilities from "./Facilities/Facilities";
import "./Home.css";
import Bounce from "react-reveal/Bounce";
import ParalexSection from "./ParalexSection";
import Spots from "./Spots";
import WelcomeSection from "./WelcomeSection/WelcomeSection";
import Spinner from "../../PrivateRoute/Spinner";
const Home = () => {
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    fetch("https://dreadful-asylum-91938.herokuapp.com/spots")
      .then((res) => res.json())
      .then((data) => setSpots(data));
  }, []);
  return (
    <>
      {/* Home Section */}
      <div id="home" className="home-section "></div>
      <div className="home-content">
        <Bounce>
          <p className="text-2xl md:text-6xl font-extrabold text-center text-white">
            Enjoy Vacation With <span className="yellow">Book_Spot</span>
          </p>
        </Bounce>
        <p className="text-white text-center py-5">
          Travel to the any corner of the world, without going around in
          circles.
        </p>
        <div className="flex justify-center">
          <HashLink smooth to="/home#spot">
            <button className="btn-hover border-hover hover:bg-transparent bg-yellow rounded-full py-3 px-8 md:text-3xl font-extrabold text-white ">
              Vacation Spot
            </button>
          </HashLink>
        </div>
      </div>
      {/* Facilities Section */}
      <Facilities></Facilities>
      {/* welcome Section */}
      <WelcomeSection></WelcomeSection>

      {/* Spot section */}

      <section id="spot" className="pt-24 md:py-24">
        <div>
          <p className="yellow text-5xl font-extrabold pb-24 text-center">
            Book A Tour
          </p>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-3">
          {spots.map((spot) => (
            <Spots key={spot._id} spot={spot}></Spots>
          ))}
        </div>
      </section>
      {/* Parallex Section */}
      <section>
        <ParalexSection></ParalexSection>
      </section>
      {/* contact section */}
      <Contact></Contact>
    </>
  );
};

export default Home;
