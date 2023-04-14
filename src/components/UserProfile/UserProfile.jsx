import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFreelancers,
  selectCurrentUserId,
  editedFreelancerData,
} from "../../features/hospitality/hospitalitySlice";
import "./UserProfile.css";
import { validate } from "../../validation/joi";
import WebcamForUserPofile from "./WebcamForUserPofile";
import Name from "./Name";
import Email from "./Email";
import PhoneNumber from "./PhoneNumber";
import PostCode from "./PostCode";
import Contract from "./Contract";
import Position from "./Position";
import Experience from "./Experience";
import Skills from "./Skills";
import AboutYou from "./AboutYou";

const UserProfile = () => {
  const dispatch = useDispatch();
  const freelancers = useSelector(selectFreelancers);
  const currentUserId = useSelector(selectCurrentUserId);
  const freelancer = freelancers.find((item) => {
    return item.id === currentUserId;
  });
  const [userData, setUserData] = useState(freelancer);
  const [errors, setErrors] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [isRetake, setIsRetake] = useState(false);

  const onInput = (e) => {
    let newInputData = [];
    if (e.target.name === "position" || e.target.name === "contract") {
      var options = e.target.options;
      var values = [];
      for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
          values.push(options[i].value);
        }
      }
      newInputData = { ...userData, [e.target.id]: values };
    } else {
      newInputData = { ...userData, [e.target.id]: e.target.value };
    }
    setUserData(newInputData);
    validateData(newInputData);
  };

  const validateData = async (newInputData) => {
    const result = await validate("userProfile", newInputData);
    setErrors(result);
  };

  const submitData = async (e) => {
    e.preventDefault();
    if (errors === true) {
      dispatch(editedFreelancerData(userData));
      setIsEdit(false);
    }
  };

  const cancelClick = () => {
    setUserData(freelancer);
    setIsEdit(false);
  };

  const cancelRetakeClick = () => {
    setIsRetake(false);
  };

  const handleSetIsRetake = (value) => {
    setIsRetake(value);
  };

  return (
    <div className="html">
      <h1 className="userProfileTitle">Your profile</h1>
      {isRetake ? (
        <>
          <WebcamForUserPofile handleSetIsRetake={handleSetIsRetake} />
          <button
            type="button"
            className="btn btn-secondary cancelRetakeButton "
            onClick={cancelRetakeClick}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <div>
            <img
              className="userPhoto border border-secondary rounded-circle"
              src={userData.image}
              alt="freelancer"
            />
          </div>
          <div
            className="btn btn-secondary retake"
            onClick={() => setIsRetake(true)}
          >
            Retake photo
          </div>
        </>
      )}

      <form className="userProfile" onInput={onInput} onSubmit={submitData}>
        <Name isEdit={isEdit} userData={userData} errors={errors} />
        <Email />
        <PhoneNumber isEdit={isEdit} userData={userData} errors={errors} />
        <PostCode isEdit={isEdit} userData={userData} errors={errors} />
        <Contract isEdit={isEdit} userData={userData} errors={errors} />
        <Position isEdit={isEdit} userData={userData} errors={errors} />
        <Experience isEdit={isEdit} userData={userData} errors={errors} />
        <Skills isEdit={isEdit} userData={userData} errors={errors} />
        <AboutYou isEdit={isEdit} userData={userData} errors={errors} />

        <div className="editButtons form-group">
          {isEdit ? (
            <>
              <button
                type="submit"
                className="btn btn-success userProfileSubmit"
              >
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary userProfileCancel"
                onClick={cancelClick}
              >
                Cancel
              </button>
            </>
          ) : (
            <div
              className="btn btn-secondary userProfileEdit"
              onClick={() => setIsEdit(true)}
            >
              Edit Profile
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
