import React from "react";
import {
  setScreenMode,
  selectScreenMode,
} from "../features/hospitality/hospitalitySlice";
import { useSelector, useDispatch } from "react-redux";
import TestingNav from "./TestingNav";

const Navigation = () => {
  const screenMode = useSelector(selectScreenMode);
  const dispatch = useDispatch();

  return (
    <>

      <nav className="navbar navbar-expand-sm navbar-light bg-light ">
        <a className="navbar-brand mx-3 pt-3" href="#">
          Hospitality Hunt
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mx-5 ">
            <li className="nav-item active">
              <a
                className="nav-link"
                onClick={() => {
                  dispatch(setScreenMode(11));
                }}
              >
                Home
              </a>
            </li>
            {(screenMode === 11 || screenMode === 1 || screenMode === 2) && (
              //Home Login Signup
              <>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      dispatch(setScreenMode(2));
                    }}
                  >
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      dispatch(setScreenMode(1));
                    }}
                  >
                    Signup
                  </a>
                </li>
              </>
            )}
            {(screenMode === 8 || screenMode === 12 || screenMode === 9) && (
              //SearchForJob Userprofile
              <>
                <li className="nav-item active">
                  <a
                    className="nav-link"
                    onClick={() => {
                      dispatch(setScreenMode(8));
                    }}
                  >
                    SearchForJob
                  </a>
                </li>
                <li className="nav-item active">
                  <a
                    className="nav-link"
                    onClick={() => {
                      dispatch(setScreenMode(12));
                    }}
                  >
                    Your profile
                  </a>
                </li>
              </>
            )}
            {(screenMode === 6 ||
              screenMode === 7 ||
              screenMode === 10 ||
              screenMode === 13) && (
                //AddJob SearchForFreelancer FreelancerDetails EmployerJobListing
                //TO DO: Edit employer profile
                <>
                  <li className="nav-item active">
                    <a
                      className="nav-link"
                      onClick={() => {
                        dispatch(setScreenMode(6));
                      }}
                    >
                      Add a job
                    </a>
                  </li>
                  <li className="nav-item active">
                    <a
                      className="nav-link"
                      onClick={() => {
                        dispatch(setScreenMode(7));
                      }}
                    >
                      Search for a freelancer
                    </a>
                  </li>
                  <li className="nav-item active">
                    <a
                      className="nav-link"
                      onClick={() => {
                        dispatch(setScreenMode(13));
                      }}
                    >
                      View your job listings
                    </a>
                  </li>
                  <li className="nav-item active">
                    <a
                      className="nav-link"
                      onClick={() => {
                        dispatch(setScreenMode(13));
                      }}
                    >
                      TODO - EDIT EMPLOYER PROFILE
                    </a>
                  </li>
                </>
              )}
          </ul>
        </div>
      </nav>
      <>
        <TestingNav />
      </>
    </>
  );
};

export default Navigation;
