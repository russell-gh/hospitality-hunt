import React from "react";
import { setScreenMode } from "../features/hospitality/hospitalitySlice";
import "./Home.css";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h1>Welcome to hospitality hunt.</h1>
      <div className="homepage-menu">
        <button
          className="login_btn"
          onClick={() => {
            dispatch(setScreenMode(2));
          }}
        >
          LOGIN
        </button>
        <h2>Sign up here:</h2>
        <button
          className="signUp_btn"
          onClick={() => {
            dispatch(setScreenMode(1));
          }}
        >
          SIGN UP
        </button>
      </div>
    </>
  );
};

export default Home;
