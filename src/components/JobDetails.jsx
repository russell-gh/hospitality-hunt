import React from "react";
import {
  selectJobListings,
  setBackToJobListing,
} from "../features/hospitality/hospitalitySlice";
import { useSelector, useDispatch } from "react-redux";
import "./JobDetails.css";
import { selectLastClickedJobId } from "../features/hospitality/hospitalitySlice";
import { jobDetailsText } from "../language/english";

const JobDetails = () => {
  const jobListings = useSelector(selectJobListings);
  const lastClickedJobId = useSelector(selectLastClickedJobId);
  const dispatch = useDispatch();
  if (!jobListings) {
    return <p>Loading...</p>;
  }
  const result = jobListings.filter((item) => {
    return item.id === lastClickedJobId;
  });
  const bArray = Object.entries(result[0]);

  return (
    <div className="eachJobDetails">
      <h1 className="eachJobDetailsTitle">Job details</h1>
      <form className="eachJobDetailsResult">
        {bArray.map((item) => {
          if (
            item[0] === "id" ||
            item[0] === "currentUserId" ||
            item[0] === "user_id"
          )
            return null;

          return (
            <p key={item[0]}>
              {jobDetailsText[item[0]]}: {item[1]}
            </p>
          );
        })}
        <div className="text-center">
          <button
            className="btn btn-outline-success eachJobDeatilsBack"
            onClick={() => {
              dispatch(setBackToJobListing());
            }}
          >
            Back to listing
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobDetails;
