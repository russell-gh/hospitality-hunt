import React from "react";
import { setScreenMode } from "../features/hospitality/hospitalitySlice";
import { useDispatch } from "react-redux";

const TestingNav = () => {
  const dispatch = useDispatch();

  return (
    <div className="testing">
      <div className="mainComponents">
        <button
          onClick={() => {
            dispatch(setScreenMode(1));
          }}
        >
          1 Signup
        </button>
        <button
          onClick={() => {
            dispatch(setScreenMode(2));
          }}
        >
          2 Login
        </button>
        <button
          onClick={() => {
            dispatch(setScreenMode(3));
          }}
        >
          3 Onboarding
        </button>
      </div>
      <div className="freelancerComponents">
        <button
          onClick={() => {
            dispatch(setScreenMode(4));
          }}
        >
          4 CreateUserProfile
        </button>
        <button
          onClick={() => {
            dispatch(setScreenMode(8));
          }}
        >
          8 SearchForJob
        </button>
        <button
          onClick={() => {
            dispatch(setScreenMode(9));
          }}
        >
          9 JobDetails
        </button>
        <button
          onClick={() => {
            dispatch(setScreenMode(12));
          }}
        >
          12 UserProfile
        </button>
      </div>
      <div className="businessComponents">
        <button
          onClick={() => {
            dispatch(setScreenMode(5));
          }}
        >
          5 CreateBusinessProfile
        </button>
        <button
          onClick={() => {
            dispatch(setScreenMode(6));
          }}
        >
          6 AddJob
        </button>
        <button
          onClick={() => {
            dispatch(setScreenMode(7));
          }}
        >
          7 SearchForFreelancer
        </button>
        <button
          onClick={() => {
            dispatch(setScreenMode(10));
          }}
        >
          10 FreelancerDetails
        </button>
        <button
          onClick={() => {
            dispatch(setScreenMode(13));
          }}
        >
          13 EmployerJobListing
        </button>
      </div>
    </div>
  );
};

export default TestingNav;
