import React, { useLayoutEffect } from "react";
import {
  selectLastClickedFreelancerId,
  selectFreelancers,
  setBackToFreelancerListing,
} from "../features/hospitality/hospitalitySlice";
import { useSelector, useDispatch } from "react-redux";
import "./FreelancerDetails.css";
import hh1 from "../assets/hh1.png";
import gsap from "gsap";

const FreelancerDetails = () => {
  const localId = useSelector(selectLastClickedFreelancerId);
  const freelancers = useSelector(selectFreelancers);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    console.log("Use layout effect,");
    gsap.to(".hh-logo", { duration: 2, rotation: 360 });
  }, []);

  return (
    <>
      <h1 className="title">Freelancer profile</h1>
      <div className="freelancerDetails">
        {freelancers.map((id) => {
          if (id.id === localId)
            return (
              <React.Fragment key={id}>
                <p>First name: {id.firstName}</p>
                <p>Last name: {id.secondName}</p>
                <p>Position: {id.position}</p>
                <p>Experience: {id.experience}</p>
                <p>Skills: {id.skills}</p>
                <p>Contract: {id.contract}</p>
                <p>Postcode: {id.postCode}</p>
                <p>Email: {id.email}</p>
                <p>Phone number: {id.phoneNumber}</p>
                <p>About: {id.aboutYou}</p>
                <button
                  className="back-btn"
                  onClick={() => {
                    dispatch(setBackToFreelancerListing());
                  }}
                >
                  Back to listing
                </button>
                <img
                  className="hh-logo"
                  src={hh1}
                  alt="logo"
                  height="100px"
                  width="100px"
                ></img>
              </React.Fragment>
            );
          else return null;
        })}
      </div>
      <div></div>
    </>
  );
};

export default FreelancerDetails;
