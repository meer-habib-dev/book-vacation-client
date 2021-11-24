import React, { useEffect, useState } from "react";
import Table from "./Table";

const ManageBooking = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("https://dreadful-asylum-91938.herokuapp.com/booking")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  const handleDelete = (id) => {
    const procced = window.confirm("Are you sure to delete?");
    if (procced) {
      fetch(`https://dreadful-asylum-91938.herokuapp.com/booking/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingBookings = bookings.filter(
              (user) => user._id !== id
            );
            setBookings(remainingBookings);
          }
        });
    }
  };
  const handleApproval = (bk) => {
    let newData = [];
    const booking = bookings.map((book) => book);
    const find = booking.find((matched) => matched._id === bk._id);
    const rest = bookings.filter((pd) => pd._id !== bk._id);
    find.status = "Approved";
    newData = [...rest, find];
    console.log(find);
    setBookings(newData);

    fetch(`https://dreadful-asylum-91938.herokuapp.com/booking/${bk._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(find),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Hitting Put");
        }
      });
  };
  return (
    <div class="flex flex-col mt-8 md:mt-40 md:h-96 md:pb-20">
      <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          <table class="min-w-full">
            <thead>
              <tr>
                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Name
                </th>
                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Email
                </th>
                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Arrival Date
                </th>
                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Status
                </th>
                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Edit
                </th>
                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Delete
                </th>
              </tr>
            </thead>

            <tbody class="bg-white">
              {bookings.map((booking) => (
                <Table
                  booking={booking}
                  handleDelete={handleDelete}
                  handleApproval={handleApproval}
                ></Table>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageBooking;
