import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import MybookingData from "./MybookingData";

const MyBookings = () => {
  const { users } = useAuth();
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("https://dreadful-asylum-91938.herokuapp.com/booking")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  const bookingMatched = bookings.filter(
    (matched) => matched.email === users.email
  );

  return (
    <div class="flex flex-col mt-8 md:mt-40 md:h-96 md:pb-20">
      <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          <table class="min-w-full">
            <thead>
              <tr>
                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  id
                </th>
                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Name
                </th>
                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Email
                </th>
                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Departure Date
                </th>
                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Arrival Date
                </th>
                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Status
                </th>
                {/* <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Delete
                </th> */}
              </tr>
            </thead>

            <tbody class="bg-white">
              {bookingMatched.map((myBookings) => (
                <MybookingData
                  key={myBookings._id}
                  myBookings={myBookings}
                ></MybookingData>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    // <div>
    //   <div className="grid grid-cols-2">
    //     {bookingMatched.map((item) => console.log(item))}
    //   </div>
    // </div>
  );
};

export default MyBookings;
