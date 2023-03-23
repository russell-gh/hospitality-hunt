import React from "react";
import {
  selectLastClickedFreelancerId,
  selectFreelancers,
} from "../features/hospitality/hospitalitySlice";
import { useSelector } from "react-redux";
import "./FreelancerDetails.css";

const FreelancerDetails = () => {
  const localId = useSelector(selectLastClickedFreelancerId);
  const freelancers = useSelector(selectFreelancers);
  return (
    <>
      <h1>Freelancer details</h1>
      <div className="freelancerDetails">
        {freelancers.map((id) => {
          if (id.id === localId)
            return (
              <React.Fragment key={id}>
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
              </React.Fragment>
            );
        })}
      </div>
    </>
  );
};

export default FreelancerDetails;
