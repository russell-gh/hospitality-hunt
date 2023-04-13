import React from "react";
import {
  setScreenMode,
  selectLoggedIn,
  selectIsFreelancer,
  logout,
  selectisProfileComplete,
} from "../../features/hospitality/hospitalitySlice";

import { useSelector, useDispatch } from "react-redux";
import "../Navigation/Navigation.scss";
import ButtonSet1 from "./ButtonSet1";
import ButtonSet2 from "./ButtonSet2";
import ButtonSet3 from "./ButtonSet3";
import api from "../../api";

const Navigation = () => {
  const loggedIn = useSelector(selectLoggedIn);
  const isFreelancer = useSelector(selectIsFreelancer);
  const isProfileComplete = useSelector(selectisProfileComplete);
  const dispatch = useDispatch();

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light ">
        <a
          className="navbar-brand mx-3 pt-3"
          href=" "
          onClick={(e) => {
            e.preventDefault();
            dispatch(setScreenMode(11));
          }}
        >
          Hospitality Hunt
        </a>
        <button
          className="navbar-toggler me-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-3 mx-3">
            {loggedIn && isFreelancer && isProfileComplete && (
              //Logged in and user is a freelancer
              <ButtonSet1 />
            )}
            {loggedIn && isFreelancer === false && isProfileComplete && (
              //Logged in and user is a business
              <ButtonSet2 />
            )}
            {loggedIn &&
              (typeof isFreelancer === "undefined" ||
                isProfileComplete === false) && (
                //Logged in but user did not finish onboarding
                <li className="nav-item justify-content-end">
                  <button
                    className="nav-link"
                    onClick={() => {
                      dispatch(setScreenMode(3));
                    }}
                  >
                    Onboarding
                  </button>
                </li>
              )}
            {!loggedIn && (
              //User is not logged in
              <ButtonSet3 />
            )}
            {loggedIn && (
              //Logged in, therefore show logout button
              <li className="nav-item justify-content-end">
                <button
                  className="nav-link"
                  onClick={() => {
                    dispatch(logout());
                    api("LOGOUT");
                  }}
                >
                  Log out
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
