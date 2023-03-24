// import React from "react";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   selectFreelancers,
//   editedData,
// } from "../../features/hospitality/hospitalitySlice";
// import "./UserProfile.css";
// import { validate } from "../../validation/joi";
// import WebcamForUserPofile from "./WebcamForUserPofile";
// import { selectCurrentUserId } from "../../features/hospitality/hospitalitySlice";

const BusinessProfile = () => {
  //   const dispatch = useDispatch();
  //   const freelancers = useSelector(selectFreelancers);
  //   const currentUserId = useSelector(selectCurrentUserId);
  //   const freelancer = freelancers.find((item) => {
  //     return item.id === currentUserId;
  //   });
  //   const [userData, setUserData] = useState(freelancer);
  //   const [errors, setErrors] = useState({});
  //   const [isEdit, setIsEdit] = useState(false);
  //   const [isRetake, setIsRetake] = useState(false);

  //   const onInput = (e) => {
  //     let newInputData = [];
  //     if (e.target.name === "position" || e.target.name === "contract") {
  //       var options = e.target.options;
  //       var values = [];
  //       for (let i = 0; i < options.length; i++) {
  //         if (options[i].selected) {
  //           values.push(options[i].value);
  //         }
  //       }
  //       newInputData = { ...userData, [e.target.id]: values };
  //     } else {
  //       newInputData = { ...userData, [e.target.id]: e.target.value };
  //     }
  //     setUserData(newInputData);
  //     validateData(newInputData);
  //   };

  //   const validateData = async (newInputData) => {
  //     const result = await validate("userProfile", newInputData);
  //     setErrors(result);
  //   };

  //   const submitData = async (e) => {
  //     e.preventDefault();
  //     if (errors === true) {
  //       console.log(errors);
  //       dispatch(editedData(userData));
  //       setIsEdit(false);
  //     }
  //   };

  //   const cancelClick = () => {
  //     setUserData(freelancer);
  //     setIsEdit(false);
  //   };

  //   const cancelRetakeClick = () => {
  //     setIsRetake(false);
  //   };

  //   const handleSetIsEdit = (value) => {
  //     setIsEdit(value);
  //   };

  return (
    <></>
    // <div className="html">
    //   <h1>Your profile</h1>

    //   <form className="userProfile" onInput={onInput} onSubmit={submitData}>
    //     <div className="form-group">
    //       <label htmlFor="name">Name: </label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         id="name"
    //         name="name"
    //         value={businesses.name}
    //         disabled={!isEdit}
    //       />
    //       {errors.name && (
    //         <div className="alert alert-danger" role="alert">
    //           {errors.name}
    //         </div>
    //       )}
    //     </div>

    //     <div className="form-group">
    //       <label htmlFor="phoneNumber">Phone number: </label>
    //       <input
    //         type="number"
    //         className="form-control"
    //         id="phoneNumber"
    //         name="phoneNumber"
    //         disabled={!isEdit}
    //         value={bussiness.phoneNumber}
    //       ></input>
    //       {errors.phoneNumber && (
    //         <div className="alert alert-danger" role="alert">
    //           {errors.phoneNumber}
    //         </div>
    //       )}
    //     </div>

    //     <div className="form-group">
    //       <label htmlFor="details">Details about your business:</label>
    //       <textarea
    //         id="details"
    //         className="form-control"
    //         name="details"
    //         placeholder="Information about your business"
    //         disabled={!isEdit}
    //         value={bussiness.details}
    //       ></textarea>
    //       {errors.details && (
    //         <div className="alert alert-danger" role="alert">
    //           {errors.details}
    //         </div>
    //       )}
    //     </div>

    //     <div className="buttons form-group">
    //       {isEdit ? (
    //         <>
    //           <button type="submit" className="btn btn-success">
    //             Submit
    //           </button>
    //           <button
    //             type="button"
    //             className="btn btn-secondary"
    //             onClick={cancelClick}
    //           >
    //             Cancel
    //           </button>
    //         </>
    //       ) : (
    //         <div className="btn btn-secondary" onClick={() => setIsEdit(true)}>
    //           Edit Profile
    //         </div>
    //       )}
    //     </div>
    //   </form>
    // </div>
  );
};

export default BusinessProfile;
