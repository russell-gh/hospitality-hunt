import React from "react";
import {
  setScreenMode,
  selectLoggedIn,
  selectIsFreelancer,
  logout,
} from "../features/hospitality/hospitalitySlice";
import { useSelector, useDispatch } from "react-redux";
import "./Navigation.scss";

const Navigation = () => {
  const loggedIn = useSelector(selectLoggedIn);
  const isFreelancer = useSelector(selectIsFreelancer);
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
            {loggedIn && isFreelancer && (
              //Logged in and user is a freelancer
              <>
                <li className="nav-item justify-content-end">
                  <button
                    className="nav-link"
                    onClick={() => {
                      dispatch(setScreenMode(8));
                    }}
                  >
                    Job Search
                  </button>
                </li>
                <li className="nav-item justify-content-end">
                  <button
                    className="nav-link"
                    onClick={() => {
                      dispatch(setScreenMode(12));
                    }}
                  >
                    Your profile
                  </button>
                </li>
              </>
            )}
            {loggedIn && isFreelancer === false && (
              //Logged in and user is a business
              <>
                <li className="nav-item justify-content-end">
                  <button
                    className="nav-link"
                    onClick={() => {
                      dispatch(setScreenMode(7));
                    }}
                  >
                    Search for a freelancer
                  </button>
                </li>
                <li className="nav-item justify-content-end">
                  <button
                    className="nav-link"
                    onClick={() => {
                      dispatch(setScreenMode(6));
                    }}
                  >
                    Add a job
                  </button>
                </li>
                <li className="nav-item justify-content-end">
                  <button
                    className="nav-link"
                    onClick={() => {
                      dispatch(setScreenMode(13));
                    }}
                  >
                    View your job listings
                  </button>
                </li>
                <li className="nav-item justify-content-end">
                  <button
                    className="nav-link"
                    onClick={() => {
                      dispatch(setScreenMode(14));
                    }}
                  >
                    Your profile
                  </button>
                </li>
              </>
            )}
            {loggedIn && typeof isFreelancer === "undefined" && (
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
              <>
                <li className="nav-item justify-content-end">
                  <button
                    className="nav-link"
                    onClick={() => {
                      dispatch(setScreenMode(2));
                    }}
                  >
                    Login
                  </button>
                </li>
                <li className="nav-item justify-content-end">
                  <button
                    className="nav-link"
                    onClick={() => {
                      dispatch(setScreenMode(1));
                    }}
                  >
                    Signup
                  </button>
                </li>
              </>
            )}
            {loggedIn && (
              //Logged in, therefore show logout button
              <li className="nav-item justify-content-end">
                <button
                  className="nav-link"
                  onClick={() => {
                    dispatch(logout());
                  }}
                >
                  Logout
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
