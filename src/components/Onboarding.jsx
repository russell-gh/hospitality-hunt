import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { onboarding } from "../features/hospitality/hospitalitySlice";
import "./Onboarding.css";

const Onboarding = () => {
  const [isFreelancer, setIsFreelancer] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(onboarding(isFreelancer));
  };

  return (
    <>
      <h1>Are you...</h1>
      <form className="onboarding" onSubmit={handleSubmit}>
        <div className="form-group">
          <button
            className="btn btn-success"
            type="submit"
            onClick={() => {
              setIsFreelancer(true);
            }}
          >
            Looking for a job?
          </button>
        </div>
        <div> or wanting to..</div>
        <div className="form-group">
          <button
            className="btn btn-success"
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
