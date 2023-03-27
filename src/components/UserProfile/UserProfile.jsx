import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFreelancers,
  selectCurrentUserId,
  editedFreelancerData,
  selectUser,
} from "../../features/hospitality/hospitalitySlice";
import "./UserProfile.css";
import { validate } from "../../validation/joi";
import WebcamForUserPofile from "./WebcamForUserPofile";

const UserProfile = () => {
  const dispatch = useDispatch();
  const freelancers = useSelector(selectFreelancers);
  const currentUserId = useSelector(selectCurrentUserId);
  const user = useSelector(selectUser);
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
      console.log(errors);
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
              alt="freelancer image"
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
        <div>
          <label htmlFor="firstName">First name: </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            placeholder="e.g. Sam"
            value={userData.firstName}
            disabled={!isEdit}
          />
          {errors.firstName && (
            <div className="alert alert-danger" role="alert">
              {errors.firstName}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="secondName">Last name: </label>
          <input
            type="text"
            className="form-control"
            id="secondName"
            name="secondName"
            placeholder="e.g. Smith"
            value={userData.secondName}
            disabled={!isEdit}
          />
          {errors.secondName && (
            <div className="alert alert-danger" role="alert">
              {errors.secondName}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            disabled
            value={user.email}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone number: </label>
          <input
            type="number"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="0722334456"
            disabled={!isEdit}
            value={userData.phoneNumber}
          ></input>
          {errors.phoneNumber && (
            <div className="alert alert-danger" role="alert">
              {errors.phoneNumber}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="postCode">Postcode: </label>
          <input
            type="text"
            className="form-control"
            id="postCode"
            name="postCode"
            placeholder="SW1 2AA"
            disabled={!isEdit}
            value={userData.postCode}
          />
          {errors.postCode && (
            <div className="alert alert-danger" role="alert">
              {errors.postCode}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="contract">Type of contract: </label>
          {isEdit ? (
            <select
              id="contract"
              className="form-control"
              name="contract"
              size="2"
              multiple
            >
              <option value="fullTime">Full-time</option>
              <option value="partTime">Part-time</option>
            </select>
          ) : (
            <input
              type="text"
              className="form-control"
              id="contract"
              name="contract"
              placeholder="00447111111111"
              disabled={!isEdit}
              value={userData.contract}
            ></input>
          )}
          {errors.contract && (
            <div className="alert alert-danger" role="alert">
              {errors.contract}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="position">Type of position: </label>
          {isEdit ? (
            <select
              id="position"
              className="form-control"
              name="position"
              size="6"
              multiple
            >
              <option value="waiter/waitress">Waiter/waitress</option>
              <option value="bartender">Bartender</option>
              <option value="porter">Porter</option>
              <option value="housekeeper">Housekeeper</option>
              <option value="generalManager">General Manager</option>
              <option value="chef">Chef</option>
            </select>
          ) : (
            <input
              type="text"
              className="form-control"
              id="position"
              name="position"
              placeholder="00447111111111"
              disabled={!isEdit}
              value={userData.position}
            ></input>
          )}
          {errors.position && (
            <div className="alert alert-danger" role="alert">
              {errors.position}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="experience">Your experience in hospitality:</label>
          <textarea
            id="experience"
            className="form-control"
            name="experience"
            placeholder="e.g. two years kitchen management"
            disabled={!isEdit}
            value={userData.experience}
          ></textarea>
          {errors.experience && (
            <div className="alert alert-danger" role="alert">
              {errors.experience}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="skills">Your skills:</label>
          <textarea
            id="skills"
            className="form-control"
            name="skills"
            placeholder="e.g. strong knife skill"
            disabled={!isEdit}
            value={userData.skills}
          ></textarea>
          {errors.skills && (
            <div className="alert alert-danger" role="alert">
              {errors.skills}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="aboutYou">About you:</label>
          <textarea
            id="aboutYou"
            className="form-control"
            name="aboutYou"
            placeholder="Introduce yourself"
            disabled={!isEdit}
            value={userData.aboutYou}
          ></textarea>
          {errors.aboutYou && (
            <div className="alert alert-danger" role="alert">
              {errors.aboutYou}
            </div>
          )}
        </div>

        <div className="editButtons form-group">
          {isEdit ? (
            <>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={cancelClick}
              >
                Cancel
              </button>
            </>
          ) : (
            <div className="btn btn-secondary" onClick={() => setIsEdit(true)}>
              Edit Profile
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
