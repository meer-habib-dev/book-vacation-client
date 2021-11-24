import React, { useRef } from "react";
import useAuth from "../../Hooks/useAuth";
// import useAuth from "../../Hooks/useAuth";
// import "./PlaceBooking";

const AddVacationSpot = () => {
  const nameRef = useRef("");
  const imgRef = useRef("");
  const pricingRef = useRef("");
  // const arrivalDate = useRef("");
  // const roomTypeRef = useRef("");
  // const roomNubRef = useRef("");
  const desRef = useRef("");
  const { users } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = nameRef.current.value;
    const img = imgRef.current.value;
    const price = pricingRef.current.value;
    const description = desRef.current.value;

    const spotInfo = {
      title,
      price,
      img,
      description,
    };
    console.log(spotInfo);

    fetch("https://dreadful-asylum-91938.herokuapp.com/spots", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(spotInfo),
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
    <div className="py-10 md:py-0 md:h-screen w-screen mx-auto ">
      <div>
        <div className="booking-container mx-4 md:w-10/12 md:mx-auto my-8  md:mt-40 ">
          <form onSubmit={handleSubmit}>
            <div className="grid shadow-lg w-full h-full md:p-20">
              <div className="grid md:grid-cols-2">
                <div className="grid grid-cols md:w-10/12">
                  <input
                    ref={nameRef}
                    type="text"
                    className="border-2 w-full px-2 py-2 rounded-md mb-4"
                    placeholder="Enter Title"
                    required
                  />
                  <input
                    ref={imgRef}
                    type="text"
                    required
                    className="border-2 w-full px-2 py-2 rounded-md mb-4"
                    placeholder="Put Img Url"
                    // onChange={(e) => console.log(e.target.value)}
                  />
                  <input
                    ref={pricingRef}
                    type="number"
                    required
                    className="border-2 w-full px-2 py-2 rounded-md mb-4"
                    placeholder="Add Booking Price"
                  />
                </div>

                <div className="grid grid-cols">
                  <textarea
                    ref={desRef}
                    required
                    placeholder="Enter Description"
                    className="border-2 h-42 px-2 py-2 rounded-md mb-4"
                    name=""
                    id=""
                    cols="30"
                  ></textarea>
                </div>
              </div>
              <div className="mx-auto">
                <button
                  className="btn-hover md:mt-8 mb-4 md:mb-0 border-hover bg-yellow rounded-full py-3 px-8 md:text-3xl font-extrabold  "
                  type="submit"
                  value="Place Booking"
                >
                  Add Vacation Spot
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVacationSpot;
