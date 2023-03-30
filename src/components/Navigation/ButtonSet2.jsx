import React from "react";
import { setScreenMode } from "../../features/hospitality/hospitalitySlice";
import { useDispatch } from "react-redux";

const ButtonSet2 = () => {
  const dispatch = useDispatch();

  return (
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
  );
};

export default ButtonSet2;
