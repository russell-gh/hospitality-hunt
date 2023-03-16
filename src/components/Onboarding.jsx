import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  ONBOARDING,
  setScreenMode,
} from "../features/hospitality/hospitalitySlice";
import "./Onboarding.css";

const Onboarding = () => {
  const [isFreelancer, setIsFreelancer] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    dispatch(ONBOARDING(isFreelancer));
    isFreelancer ? dispatch(setScreenMode(4)) : dispatch(setScreenMode(5));
    e.preventDefault();
  };

  return (
    <>
      <h1>Are you...</h1>
      <form className="onboarding" onSubmit={handleSubmit}>
        <div className="form-group">
          <button
            class="btn btn-primary"
            type="submit"
            onClick={() => {
              setIsFreelancer(true);
            }}
          >
            Looking for a job?
          </button>
        </div>
        <div> or wanting too..</div>
        <div className="form-group">
          <button
            class="btn btn-primary"
            type="submit"
            onClick={() => {
              setIsFreelancer(false);
            }}
          >
            List an oppotunity?
          </button>
        </div>
      </form>
    </>
  );
};

export default Onboarding;
