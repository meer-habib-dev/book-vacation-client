import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../Hooks/useAuth";
import "./Header.css";
import Fade from "react-reveal/Fade";
const Header = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { users, logOut } = useAuth();
  return (
    <div className="position z-10 w-screen">
      <Fade top>
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-5 bg-black text mb-3">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link
                to="/home"
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                href="#pablo"
              >
                Book_Spot
              </Link>
              <button
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center justify-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row  list-none lg:ml-auto">
                <li className="nav-item">
                  <Link
                    to="/home"
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  >
                    <span className="ml-2">Home</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/spot"
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  >
                    <span className="ml-2">Spots</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/addspot"
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  >
                    <span className="ml-2">Add Spot</span>
                  </Link>
                </li>
                {users.email && (
                  <li className="nav-item">
                    <Link
                      to="/manage"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    >
                      <span className="ml-2">ManageBooking</span>
                    </Link>
                  </li>
                )}
                <li className="nav-item">
                  <Link
                    to="/booking"
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  >
                    <span className="ml-2">Book Spot</span>
                  </Link>
                </li>

                {users.email && (
                  <li className="nav-item">
                    <Link
                      to="/mybookings"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    >
                      <span className="ml-2">My Bookings</span>
                    </Link>
                  </li>
                )}
                <li className="nav-item">
                  <HashLink
                    smooth
                    to="/home#contact"
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  >
                    <span className="ml-2">Contact Us</span>
                  </HashLink>
                </li>
                <li className="nav-item">
                  {users.email ? (
                    <button
                      onClick={logOut}
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    >
                      <span className="ml-2">Log Out</span>
                    </button>
                  ) : (
                    <Link
                      to="/login"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    >
                      <span className="ml-2">Login</span>
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Fade>
    </div>
  );
};

export default Header;
