import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ONBOARDING } from "../features/hospitality/hospitalitySlice";

const Onboarding = () => {
  const [isFreelancer, setIsFreelancer] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    dispatch(ONBOARDING(isFreelancer));
    e.preventDefault();
  };

  return (
    <>
      <h1>Are you...</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <button
            class="btn btn-default"
            type="submit"
            onClick={() => {
              setIsFreelancer(true);
            }}
          >
            Looking for a job?
          </button>
        </div>
        <p> or wanting too..</p>
        <div className="form-group">
          <button
            class="btn btn-default"
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
