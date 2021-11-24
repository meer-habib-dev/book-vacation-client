import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle, setUsers } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  const handleGoogleSignIn = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
      setUsers(result.user);
    });
  };
  return (
    <div className="w-screen h-screen pt-40 pb-20  bg-gray-200 ">
      <div className="w-10/12 md:w-6/12 mx-auto flex flex-col justify-center align-middle bg-white h-96">
        <p className="text-center text-2xl font-bold mb-8">Login or Register</p>
        <button
          onClick={handleGoogleSignIn}
          className="mx-auto rounded-full hover:bg-black  transition-opacity py-2 px-2 md:w-6/12 flex justify-between items-center border-2 font-bold hover:text-gray-200"
        >
          <i class="fab fa-google text-2xl mr-4 "></i>
          <span>Continue With Google</span>
          <span></span>
        </button>
        <p className="text-center pt-8 px-8">
          Wanna Return to Home page?{" "}
          <HashLink to="/home#home">
            <span className="underline text-blue-500">Click Here</span>
          </HashLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
