import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  onboarding,
  selectUserEmail,
} from "../features/hospitality/hospitalitySlice";
import "./Onboarding.css";
import axios from "axios";
import { apiURL } from "../config";

const Onboarding = () => {
  const [isFreelancer, setIsFreelancer] = useState();
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(onboarding(isFreelancer));

    //Default is 0/business, only send if freelancer.
    if (isFreelancer) {
      axios.post(`${apiURL}/onboarding`, {
        email: userEmail,
        type: 1,
      });
    }
  };

  return (
    <div className="onboardingContainer">
      <h1 className="onboardingHeader">Are you ...</h1>
      <form className="onboarding" onSubmit={handleSubmit}>
        <div className="form-group">
          <button
            className="btn btn-success lookingJob"
            type="submit"
            onClick={() => {
              setIsFreelancer(true);
            }}
          >
            Looking for a job?
          </button>
        </div>
        <div className="or"> or wanting to ...</div>
        <div className="form-group">
          <button
            className="btn btn-success listJob"
            type="submit"
            onClick={() => {
              setIsFreelancer(false);
            }}
          >
            List a job oppotunity?
          </button>
        </div>
      </form>
    </div>
  );
};

export default Onboarding;
