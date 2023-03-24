import React from "react";
import { selectJobListings } from "../features/hospitality/hospitalitySlice";
import { useSelector } from "react-redux";
import "./JobDetails.css";
import { selectLastClickedJobId } from "../features/hospitality/hospitalitySlice";

const JobDetails = () => {
  const jobListings = useSelector(selectJobListings);
  const lastClickedJobId = useSelector(selectLastClickedJobId);
  console.log(jobListings);
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
        <button type="button" className="btn btn-primary btn-lg">
          APPLY
        </button>
      </div>
    </>
  );
};

export default JobDetails;
