import { useEffect, useState } from "react";
const useBooking = () => {
  const [bookings, setBooking] = useState([]);
  useEffect(() => {
    fetch("https://dreadful-asylum-91938.herokuapp.com/bookings")
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);
  // returning the services
  return [bookings, setBooking];
};
export default useBooking;
