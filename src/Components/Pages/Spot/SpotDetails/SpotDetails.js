import React from "react";
import { useParams } from "react-router";
import useSpot from "../../../Hooks/useSpot";
import ShowDetails from "./ShowDetails/ShowDetails";
import "./SpotDetails";
const SpotDetails = () => {
  const [spots] = useSpot();
  const { spotId } = useParams();
  const matchSpot = spots.filter((spot) => spot._id === spotId);
  // console.log(matchSpot);
  return (
    <div className="details-section pt-10 md:pt-20">
      {matchSpot.map((spot) => (
        <ShowDetails key={spot._id} spot={spot}></ShowDetails>
      ))}
    </div>
  );
};

export default SpotDetails;
