import React from "react";
import { selectJobListing } from "../features/hospitality/hospitalitySlice";
import { useSelector } from "react-redux";
import "./JobDetails.css";
import { listingText } from "../language/english";

const JobDetails = () => {
  const businesses = useSelector(selectJobListing);
  console.log(businesses);
  if (!businesses) {
    return <p>Loading...</p>;
  }

  return businesses.map((business) => {
    const { business_name, location, business_type, position, email, about } =
      business;

    const bArray = Object.entries(business);

    return bArray.map((item) => {
      return (
        <div className="job-details">
          <p>
            {item[0]}: {item[1]}
          </p>
        </div>
      );
    });
  });
};

export default JobDetails;
