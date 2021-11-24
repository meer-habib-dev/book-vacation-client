import React, { useRef } from "react";
import useAuth from "../../Hooks/useAuth";
import ClosingAlert from "@material-tailwind/react/ClosingAlert";

import "./PlaceBooking";
const PlaceBooking = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const departureDate = useRef("");
  const arrivalDate = useRef("");
  const roomTypeRef = useRef("");
  const roomNubRef = useRef("");
  const desRef = useRef("");
  const { users } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const arrival = arrivalDate.current.value;
    const departure = departureDate.current.value;
    const roomType = roomTypeRef.current.value;
    const roomNumber = roomNubRef.current.value;
    const des = desRef.current.value;
    const status = "Pending";

    const bookingInfo = {
      name,
      email,
      arrival,
      departure,
      roomType,
      roomNumber,
      des,
      status,
    };
    // console.log(bookingInfo);

    fetch("https://dreadful-asylum-91938.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Booking Successfull");
        }
      });

    e.target.reset();
  };
  return (
    <div>
      <div className="booking-container md:w-10/12 md:mx-auto mt-10 md:mt-40 md:my-24 ">
        <form onSubmit={handleSubmit}>
          <div className="grid shadow-lg w-full h-full px-10 md:p-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  {/* Form Field Started */}
                  <input
                    value={users.displayName}
                    ref={nameRef}
                    type="text"
                    className="border-2 w-full md:w-52 px-2 py-2 rounded-md mb-4"
                    placeholder="Enter Name"
                    required
                  />
                  <input
                    ref={arrivalDate}
                    type="text"
                    required
                    className="border-2 w-full md:w-52 px-2 py-2 rounded-md mb-4"
                    placeholder="Arrival Date"
                    // onChange={(e) => console.log(e.target.value)}
                    onFocus={() => (arrivalDate.current.type = "date")}
                    onBlur={() => (arrivalDate.current.type = "date")}
                  />

                  <select
                    ref={roomTypeRef}
                    required
                    className="border-2 w-full md:w-52 px-2 py-2 rounded-md mb-4"
                    id="cars"
                    name="carlist"
                  >
                    <option value="">Room Type</option>
                    <option value="Luxury">Luxury</option>
                    <option value="VIP">VIP</option>
                    <option value="Standard">Standard</option>
                  </select>
                </div>
                <div>
                  <input
                    value={users.email}
                    required
                    type="email"
                    ref={emailRef}
                    className="border-2 w-full md:w-52 px-2 py-2 rounded-md mb-4"
                    placeholder="Enter Email"
                  />
                  <input
                    ref={departureDate}
                    required
                    type="text"
                    className="border-2 w-full md:w-52 px-2 py-2 rounded-md mb-4"
                    placeholder="Departure Date"
                    // onChange={(e) => console.log(e.target.value)}
                    onFocus={() => (departureDate.current.type = "date")}
                    onBlur={() => (departureDate.current.type = "date")}
                  />
                  <select
                    ref={roomNubRef}
                    required
                    className="border-2 w-full md:w-52 px-2 py-2 rounded-md mb-4"
                    id="cars"
                    name="carlist"
                  >
                    <option value="">Number Of Rooms</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols">
                <textarea
                  ref={desRef}
                  required
                  placeholder="Message"
                  className="border-2 h-42 px-2 py-2 rounded-md mb-4"
                  name=""
                  id=""
                  cols="30"
                ></textarea>
              </div>
            </div>
            <div className="mx-auto">
              <button
                className="btn-hover mt-8 border-hover hover:text-black hover:bg-transparent bg-yellow rounded-full py-3 px-8 mb-8 md:mb-0 md:text-3xl font-extrabold text-white "
                type="submit"
                value="Place Booking"
              >
                Place Booking
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlaceBooking;
