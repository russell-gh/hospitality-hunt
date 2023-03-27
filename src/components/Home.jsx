import React, { useLayoutEffect, useState } from "react";
import { setScreenMode } from "../features/hospitality/hospitalitySlice";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedIn } from "../features/hospitality/hospitalitySlice";
import hh1 from "../assets/hh1.png";
import gsap from "gsap";

const Home = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(selectLoggedIn);
  const [go, setGo] = useState(false);

  // console.log(loggedIn);

  useLayoutEffect(() => {
    console.log("Use layout effect.");
    gsap.fromTo(".logo", { rotation: 0 }, { duration: 2, rotation: 25 });
  }, [go]);

  console.log(go);

  return (
    <>
      <button
        onClick={() => {
          setGo(!go);
        }}
      >
        Go!
      </button>
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
          <div className="bg image hover-zoom">
            <img className="logo" src={hh1} alt="logo" />
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
