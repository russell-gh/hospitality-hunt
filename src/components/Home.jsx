import React, { useLayoutEffect } from "react";
import { setScreenMode } from "../features/hospitality/hospitalitySlice";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedIn } from "../features/hospitality/hospitalitySlice";
import homePageLogo from "../assets/homePageLogo.png";
import gsap from "gsap";

const Home = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(selectLoggedIn);

  useLayoutEffect(() => {
    gsap.fromTo(".logo", { y: -700 }, { duration: 3, ease: "expo.out", y: 0 });
  }, []);

  useLayoutEffect(() => {
    gsap.fromTo(
      ".loginButton",
      { y: -1000 },
      { duration: 3.2, ease: "expo.out", y: 0 }
    );
  }, []);

  useLayoutEffect(() => {
    gsap.fromTo(
      ".signupButton",
      { y: -1000 },
      { duration: 3.2, ease: "expo.out", y: 0 }
    );
  }, []);

  useLayoutEffect(() => {
    gsap.fromTo(
      ".loggedIn",
      { y: -1000 },
      { duration: 3.2, ease: "expo.out", y: 0 }
    );
  }, []);

  return (
    <>
      <div className="logoAndButtons">
        {loggedIn ? (
          <div className="homepage-menu">
            <img className="logo" src={homePageLogo} alt="logo" />{" "}
            <p className="loggedIn">You are logged in.</p>
          </div>
        ) : (
          <div className="homepage-menu">
            <img className="logo" src={homePageLogo} alt="logo" />
            <div>
              <button
                className="btn btn-success loginButton"
                onClick={() => {
                  dispatch(setScreenMode(2));
                }}
              >
                Log in
              </button>
              <button
                className="btn btn-success signupButton"
                onClick={() => {
                  dispatch(setScreenMode(1));
                }}
              >
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
