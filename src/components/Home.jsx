import React from "react";
import { setScreenMode } from "../features/hospitality/hospitalitySlice";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedIn } from "../features/hospitality/hospitalitySlice";
import hh1 from "../assets/hh1.png";

const Home = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(selectLoggedIn);
  // console.log(loggedIn);
  return (
    <>
      {loggedIn ? (
        <p>You are logged in.</p>
      ) : (
        <div className="homepage-menu">
          <button
            className="login_btn"
            onClick={() => {
              dispatch(setScreenMode(2));
            }}
          >
            LOGIN
          </button>
          <div class="bg image hover-zoom">
            <img className="w-100 hover-shadow" src={hh1} alt="logo"></img>
          </div>
          <button
            className="signUp_btn"
            onClick={() => {
              dispatch(setScreenMode(1));
            }}
          >
            SIGN UP
          </button>
        </div>
      )}
    </>
  );
};

export default Home;
