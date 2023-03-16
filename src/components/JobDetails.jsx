import React from "react";

import { selectJobListings } from "../features/hospitality/hospitalitySlice";
import { useSelector } from "react-redux";
import "./JobDetails.css";
import { listingText } from "../language/english";
import { selectLastAddedJobId } from "../features/hospitality/hospitalitySlice";

const JobDetails = () => {
  const jobListings = useSelector(selectJobListings);
  const lastAddedJobId = useSelector(selectLastAddedJobId);
  console.log(jobListings);
  if (!jobListings) {
    return <p>Loading...</p>;
  }
  const result = jobListings.filter((item) => {
    return item.ID === lastAddedJobId;
  });
  const bArray = Object.entries(result[0]);

  return bArray.map((item) => {
    return (
      <div className="job-details" key={item[0]}>
        <p>
          {item[0]}: {item[1]}
        </p>
      </div>
    );
  });
};

export default JobDetails;
