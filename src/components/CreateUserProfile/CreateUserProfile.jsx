import React, { useLayoutEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFreelancerDetails } from "../../features/hospitality/hospitalitySlice";
import "./CreateUserProfile.css";
import { validate } from "../../validation/joi";
import WebcamContainer from "../react-webcam/WebcamContainer";
import { randomId } from "../../utils";
import gsap from "gsap";
import { getLongLat } from "../../location";

const UserProfiles = (props) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});
  const [errors, setErrors] = useState({});
  const [image, setImage] = useState();
  const [hoverButton, setHoverButton] = useState(false);

  useLayoutEffect(() => {
    if (hoverButton) {
      gsap.fromTo(".btn", { scale: 1 }, { scale: 1.2 });
    } else {
      gsap.fromTo(".btn", { scale: 1.2 }, { scale: 1 });
    }
  }, [hoverButton]);

  const onInput = (e) => {
    let newInputData = [];
    if (e.target.name === "position" || e.target.name === "contract") {
      var options = e.target.options;
      var values = [];
      for (var i = 0; i < options.length; i++) {
        if (options[i].selected) {
          values.push(options[i].value);
        }
      }
      // console.log(values);
      newInputData = { ...userData, [e.target.id]: values };
    } else {
      // console.log("hello");
      newInputData = { ...userData, [e.target.id]: e.target.value };
    }
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
      userData.id = randomId();
      userData.location = await getLongLat(userData.postCode);
      dispatch(setFreelancerDetails(userData));
    }
  };

  return (
    <div className="html ">
      <h1 className="createUserProfileTitle">Create your job seeker profile</h1>
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
            className="form-control userProfileEachInput "
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
          <label htmlFor="secondName">Last name: </label>
          <input
            type="text"
            className="form-control userProfileEachInput "
            id="secondName"
            name="secondName"
            placeholder="Last name"
          />
          {errors.secondName && (
            <div className="alert alert-danger" role="alert">
              {errors.secondName}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone number: </label>
          <input
            type="number"
            className="form-control userProfileEachInput "
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
          <label htmlFor="postCode">Postcode: </label>
          <input
            type="text"
            className="form-control userProfileEachInput "
            id="postCode"
            name="postCode"
            placeholder="SW1A 2AA"
          />
          {errors.postCode && (
            <div className="alert alert-danger" role="alert">
              {errors.postCode}
            </div>
          )}
        </div>
        <WebcamContainer setImage={setImage} image={image} />
        <div className="form-group">
          <label htmlFor="contract">Type of contract: </label>
          <select
            id="contract"
            className="form-select userProfileEachInput "
            name="contract"
            size="2"
            multiple
          >
            <option value="fullTime">Full-time</option>
            <option value="partTime">Part-time</option>
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
            className="form-select userProfileEachInput "
            name="position"
            size="6"
            multiple
          >
            <option value="waiterWaitress">Waiter/waitress</option>
            <option value="bartender">Bartender</option>
            <option value="porter">Porter</option>
            <option value="houseKeeper">Housekeeper</option>
            <option value="generalManager">General Manager</option>
            <option value="chef">Chef</option>
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
            className="form-control userProfileEachInput "
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
            className="form-control userProfileEachInput "
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
            className="form-control userProfileEachInput "
            name="aboutYou"
            placeholder="About you"
          ></textarea>
          {errors.aboutYou && (
            <div className="alert alert-danger" role="alert">
              {errors.aboutYou}
            </div>
          )}
        </div>
        <div className="form-group text-center my-2">
          <input
            type="submit"
            className="btn btn-success createUserProfileSubmit"
            disabled={image && errors === true ? false : true}
            onMouseEnter={() => {
              setHoverButton(true);
            }}
            onMouseLeave={() => {
              setHoverButton(false);
            }}
          />
          {!image && (
            <p className="alert alert-danger my-2" role="alert">
              Please take a photo before submitting
            </p>
          )}
          {errors !== true && (
            <p className="alert alert-danger" role="alert">
              Please fill out all required form elements before submitting
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default UserProfiles;
