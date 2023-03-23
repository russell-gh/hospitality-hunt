import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { freelancers } from "../sampleData";
import "./FreelancerDetails.css";

const FreelancerDetails = () => {
  const localId = 1;
  return (
    <>
      <h1>Freelancer details</h1>
      <div className="freelancerDetails">
        {freelancers.map((id) => {
          if (id.id === localId)
            return (
              <>
                <p>{id.firstName}</p>
                <p>{id.secondName}</p>
                <p>{id.position}</p>
                <p>{id.experience}</p>
                <p>{id.skills}</p>
                <p>{id.contract}</p>
                <p>{id.postCode}</p>
                <p>{id.email}</p>
                <p>{id.phoneNumber}</p>
                <p>{id.aboutYou}</p>
              </>
            );
        })}
      </div>
    </>
  );
};

export default FreelancerDetails;
