import React, { useLayoutEffect } from "react";
import {
  selectLastClickedFreelancerId,
  selectFreelancers,
  setBackToFreelancerListing,
} from "../features/hospitality/hospitalitySlice";
import { useSelector, useDispatch } from "react-redux";
import "./FreelancerDetails.css";
import gsap from "gsap";

const FreelancerDetails = () => {
  const localId = useSelector(selectLastClickedFreelancerId);
  console.log(localId);
  const freelancers = useSelector(selectFreelancers);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    console.log("Use layout effect,");
    gsap.to(".hh-logo", { duration: 1.7, rotation: 360 });
  }, []);

  return (
    <>
      <h1 className="freelancerProfileTitle">Freelancer details</h1>
      <form className="freelancerDetails">
        {freelancers.map((id) => {
          if (id.user_id === localId)
            return (
              <React.Fragment key={id}>
                <div className="freelancerProfilePhoto">
                  {id.image && (
                    <img
                      className="hh-logo"
                      src={id.image}
                      alt="logo"
                      height="150px"
                      width="150px"
                    ></img>
                  )}
                </div>
                <p>First name: {id.firstName}</p>
                <p>Last name: {id.secondName}</p>
                <p>Position: {id.position}</p>
                <p>Experience: {id.experience}</p>
                <p>Skills: {id.skills}</p>
                <p>Contract: {id.contract}</p>
                <p>Postcode: {id.postCode}</p>
                {/* <p>Email: {id.email}</p> */}
                <p>Phone number: {id.phoneNumber}</p>
                <p>About: {id.aboutYou}</p>
                <div className="text-center">
                  <button
                    className="btn btn-outline-success freelancerDetailsBack"
                    onClick={() => {
                      dispatch(setBackToFreelancerListing());
                    }}
                  >
                    Back to listing
                  </button>
                </div>
              </React.Fragment>
            );
          else return null;
        })}
      </form>
      <div></div>
    </>
  );
};

export default FreelancerDetails;
