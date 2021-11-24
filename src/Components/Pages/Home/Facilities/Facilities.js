import React from "react";
import "./Facilities.css";
import Flip from "react-reveal/Flip";
const Facilities = () => {
  return (
    <section className="bg-gray-200 py-24">
      <div className="md:w-10/12 mx-auto ">
        <div>
          <p className="text-5xl font-extrabold text-gray-600 text-center mb-10">
            Superb Facilities
          </p>
          <p className="text-center md:w-2/3 mb-20 text-gray-500 mx-auto text-1xl">
            This are the facilites that we are going to give you once you place
            booking to a tour and stay at our residential hotel.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
          {/* img section */}
          <Flip bottom>
            <div className="content md:mb-4">
              <div className="content-overlay"></div>
              <div className="w-full fs-img">
                <img
                  className=""
                  src="https://preview.colorlib.com/theme/platina/img/xf1.jpg.pagespeed.ic.10-q5epvx9.webp"
                  alt=""
                />
              </div>
              <div className="content-details fadeIn-bottom">
                <p className="content-title text-white font-extrabold text-center text-3xl">
                  Resort Holiday package
                </p>
              </div>
            </div>
          </Flip>
          <Flip bottom>
            <div className="content md:mb-4">
              <div className="content-overlay"></div>
              <div className="w-full fs-img">
                <img
                  src="https://preview.colorlib.com/theme/platina/img/xf2.jpg.pagespeed.ic.NwBnjhXwrt.webp"
                  alt=""
                />
              </div>
              <div className="content-details fadeIn-bottom">
                <p className="content-title text-white font-extrabold text-center text-3xl">
                  Resort Holiday Massage
                </p>
              </div>
            </div>
          </Flip>
          <Flip bottom>
            <div className="content mb-4">
              <div className="content-overlay"></div>
              <div className="w-full fs-img">
                <img
                  src="https://preview.colorlib.com/theme/platina/img/xf3.jpg.pagespeed.ic.sP7sLTtRyj.webp"
                  alt=""
                />
              </div>
              <div className="content-details fadeIn-bottom">
                <p className="content-title text-white font-extrabold text-center text-3xl">
                  Resort Holiday View
                </p>
              </div>
            </div>
          </Flip>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
