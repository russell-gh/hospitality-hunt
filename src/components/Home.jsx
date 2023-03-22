import React from "react";
import { setScreenMode } from "../features/hospitality/hospitalitySlice";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedIn } from "../features/hospitality/hospitalitySlice";

const Home = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(selectLoggedIn);
  console.log(loggedIn);
  return (
    <>
      <h1>Welcome to hospitality hunt.</h1>
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
      )}
    </>
  );
};

export default Home;
