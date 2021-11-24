import { useEffect, useState } from "react";

const useSpot = () => {
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    fetch("https://dreadful-asylum-91938.herokuapp.com/spots")
      .then((res) => res.json())
      .then((data) => setSpots(data));
  }, []);
  // returning the services
  return [spots, setSpots];
};

export default useSpot;
