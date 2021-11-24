import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-200">
      <p className="text-4xl font-extrabold text-center"> Questions?</p>
      <div className=" w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 my-20 gap-8 justify-between">
        <div className="flex items-center">
          <div className=" border-2 bg-yellow  rounded-full h-10 w-10 flex items-center justify-center mr-10">
            <i className="fa fa-map"></i>
          </div>
          <div>
            <p className="text-2xl font-bold">Out Office</p>
            <p className="text-1xl text-gray-400">Chittagong,Bangladesh</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className=" border-2 bg-yellow rounded-full h-10 w-10 flex items-center justify-center mr-10">
            <i className="fa fa-phone"></i>
          </div>
          <div>
            <p className="text-2xl font-bold">Contact Number:</p>
            <p className="text-1xl text-gray-400">+1234321321</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className=" border-2 bg-yellow rounded-full h-10 w-10 flex items-center justify-center mr-10">
            <i className="fa fa-envelope"></i>
          </div>
          <div>
            <p className="text-2xl font-bold">Email Us:</p>
            <p className="text-1xl text-gray-400">websitename@mail.com</p>
          </div>
        </div>
      </div>
      {/* Contact fields */}
      <div>
        <div className=" w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 justify-between">
          <input
            className="py-3 px-4"
            placeholder="Enter name"
            type="text"
            name=""
            id=""
          />
          <input
            className="py-3 px-4"
            placeholder="Enter name"
            placeholder="Enter Email"
            type="email"
            name=""
            id=""
          />
          <input
            className="py-3 px-4"
            placeholder="Enter name"
            placeholder="Enter Subject"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="mx-auto w-10/12 grid grid-cols mt-10">
          <textarea
            name=""
            id=""
            className="py-3 px-4 "
            placeholder="Message"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="w-10/12 mx-auto text-center mt-20">
          <button className="btn-hover hover:text-black border-hover hover:bg-transparent bg-yellow rounded-full py-3 px-8 text-2xl font-extrabold text-white ">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
