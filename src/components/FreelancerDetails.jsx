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
  // const [userData] = useState(freelancer);

  useLayoutEffect(() => {
    console.log("Use layout effect,");
    gsap.to(".hh-logo", { duration: 2, rotation: 360 });
  }, []);

  return (
    <>
      <h1 className="title">Freelancer profile:</h1>
      <div className="freelancerDetails">
        {/* <img
          className="userPhoto"
          src={userData.image}
          alt="freelancer image"
        /> */}
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
                <button
                  className="back-btn"
                  onClick={() => {
                    console.log("button-clicked");
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
