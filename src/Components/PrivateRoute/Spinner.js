import React from "react";

const Spinner = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div
          className="
      animate-spin
      rounded-full
      h-32
      w-32
      border-t-2 border-b-2 border-purple-500
    "
        ></div>
      </div>
    </div>
  );
};

export default Spinner;
