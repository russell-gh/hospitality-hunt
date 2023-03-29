import React from "react";
import {
  selectJobListings,
  setBackToJobListing,
} from "../features/hospitality/hospitalitySlice";
import { useSelector, useDispatch } from "react-redux";
import "./JobDetails.css";
import { selectLastClickedJobId } from "../features/hospitality/hospitalitySlice";

const JobDetails = () => {
  const jobListings = useSelector(selectJobListings);
  const lastClickedJobId = useSelector(selectLastClickedJobId);
  const dispatch = useDispatch;
  if (!jobListings) {
    return <p>Loading...</p>;
  }
  const result = jobListings.filter((item) => {
    return item.id === lastClickedJobId;
  });
  console.log(result[0]);

  const bArray = Object.entries(result[0]);

  return (
    <>
      <h1>Job Details</h1>
      <div className="job-details">
        {bArray.map((item) => {
          return (
            <p>
              {item[0]}: {item[1]}
            </p>
          );
        })}
        ;
        <button
          className="back-btn"
          onClick={() => {
            dispatch(setBackToJobListing());
          }}
        >
          Back to listing
        </button>
      </div>
    </>
  );
};

export default JobDetails;
