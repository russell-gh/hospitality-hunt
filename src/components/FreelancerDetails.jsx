import React from "react";
import {
  selectLastClickedFreelancerId,
  selectFreelancers,
  setBackToFreelancerListing,
} from "../features/hospitality/hospitalitySlice";
import { useSelector, useDispatch } from "react-redux";
import "./FreelancerDetails.css";
import { setUserImage } from "../features/hospitality/hospitalitySlice";

const FreelancerDetails = () => {
  const localId = useSelector(selectLastClickedFreelancerId);
  const freelancers = useSelector(selectFreelancers);
  const dispatch = useDispatch();
  // const [userData] = useState(freelancer);
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
                  onClick={() => {
                    console.log("button-clicked");
                    dispatch(setBackToFreelancerListing());
                  }}
                >
                  Back to listing
                </button>
              </React.Fragment>
            );
        })}
      </div>
    </>
  );
};

export default FreelancerDetails;
