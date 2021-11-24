import React from "react";
import useSpot from "../../Hooks/useSpot";
import SingleSpot from "./SingleSpot/SingleSpot";
import "./Spot.css";
const Spot = () => {
  const [spots] = useSpot();
  // console.log(spots);
  return (
    <div className="px-4 md:px-0 md:w-10/12  md:mx-auto md:mt-20 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {spots.map((spot) => (
          <SingleSpot key={spot._id} spot={spot}></SingleSpot>
        ))}
      </div>
    </div>
  );
};

export default Spot;
