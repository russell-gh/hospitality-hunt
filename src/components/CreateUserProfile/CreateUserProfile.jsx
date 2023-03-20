import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setUserProfile,
  setScreenMode,
} from "../../features/hospitality/hospitalitySlice";
import "./CreateUserProfile.css";
import { validate } from "../../validation/joi";
import { customMessages } from "../../language/english";

const UserProfiles = (props) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});
  const [errors, setErrors] = useState({});

  const onInput = (e) => {
    const newInputData = { ...userData, [e.target.id]: e.target.value };
    setUserData(newInputData);
    validateData(newInputData);
  };

  const validateData = async (newInputData) => {
    const result = await validate("createUserProfile", newInputData);
    setErrors(result);
  };

  const submitData = async (e) => {
    e.preventDefault();

    if (errors === true) {
      dispatch(setUserProfile(userData));
      dispatch(setScreenMode(10));
    }
  };

  //stuart testing
  const setCustomErrors = (inErrors) => {
    const test = Object.entries(inErrors);

    test.map((item) => {
      console.log(item);
      return item;
    });

    console.log(test);
  };

  return (
    <div className="html">
      <h1>Your profile</h1>
      <p>Please fill in the information below:</p>

      <form
        className="createUserProfile"
        onInput={onInput}
        onSubmit={submitData}
      >
        <div className="form-group">
          <label htmlFor="firstName">First name: </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            placeholder="First name"
          />
          {errors.firstName && (
            <div className="alert alert-danger" role="alert">
              {errors.firstName}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last name: </label>
          <input
            type="text"
            class="form-control"
            id="lastName"
            name="lastName"
            placeholder="Last name"
          />
          {errors.lastName && (
            <div className="alert alert-danger" role="alert">
              {errors.lastName}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone number: </label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="00447111111111"
          ></input>
          {errors.phoneNumber && (
            <div className="alert alert-danger" role="alert">
              {errors.phoneNumber}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="postcode">Postcode: </label>
          <input
            type="text"
            className="form-control"
            id="postcode"
            name="postcode"
            placeholder="SW1A 2AA"
          />
          {errors.postcode && (
            <div className="alert alert-danger" role="alert">
              {errors.postcode}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="contract">Type of contract: </label>
          <select
            id="contract"
            className="form-control"
            name="contract"
            size="2"
            multiple
          >
            <option value="fulltime">Full-time</option>
            <option value="parttime">Part-time</option>
          </select>
          {errors.contract && (
            <div className="alert alert-danger" role="alert">
              {errors.contract}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="position">Type of position: </label>
          <select
            id="position"
            className="form-control"
            name="position"
            size="6"
            multiple
          >
            <option value="fulltime">Waiter/waitress</option>
            <option value="parttime">Bartender</option>
            <option value="fulltime">Porter</option>
            <option value="parttime">Housekeeper</option>
            <option value="fulltime">General Manager</option>
            <option value="parttime">Chef</option>
          </select>
          {errors.position && (
            <div className="alert alert-danger" role="alert">
              {errors.position}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="experience">
            Please provide some details about your experience in hospitality:
          </label>
          <textarea
            id="experience"
            className="form-control"
            name="experience"
            placeholder="Your experience in hospitality"
          ></textarea>
          {errors.experience && (
            <div className="alert alert-danger" role="alert">
              {errors.experience}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="skills">
            Please provide some details about your skills:
          </label>
          <textarea
            id="skills"
            className="form-control"
            name="skills"
            placeholder="Your skills"
          ></textarea>
          {errors.skills && (
            <div className="alert alert-danger" role="alert">
              {errors.skills}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="aboutYou">
            Please provide some more details about you:
          </label>
          <textarea
            id="aboutYou"
            className="form-control"
            name="aboutYou"
            placeholder="About you"
          ></textarea>
          {errors.aboutYou && (
            <div className="alert alert-danger" role="alert">
              {errors.aboutYou}
            </div>
          )}
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-success" />
        </div>
      </form>
    </div>
  );
};

export default UserProfiles;
