import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setUserProfile,
  setScreenMode,
} from "../../features/hospitality/hospitalitySlice";
import "./CreateUserProfile.css";
import { validate } from "../../validation/joi";
import WebcamContainer from "../react-webcam/WebcamContainer";

const UserProfiles = (props) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});
  const [errors, setErrors] = useState({});
  const onInput = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  const sendUserInfo = async (e) => {
    e.preventDefault();
    const result = await validate("createUserProfile", userData);
    console.log(result);
    if (result === true) {
      dispatch(setUserProfile(userData));
      dispatch(setScreenMode(10));
    } else {
      setErrors(result);
      // console.log("Didn't work");
      // return "Please complete missing information";
    }
  };

  console.log(userData);
  return (
    <div className="html">
      <h1>Your profile</h1>
      <p>Please fill in the information below:</p>

      <form onInput={onInput} onSubmit={sendUserInfo} action="" method="post">
        <ul>
          <li>
            <label htmlFor="firstName">First name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First name"
            />
            <p>{errors.firstName}</p>
          </li>
          <li>
            <label htmlFor="lastName">Last name: </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last name"
            />
            <p>{errors.lastName}</p>
          </li>

          <li>
            <label htmlFor="phoneNumber">Phone number: </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="00447111111111"
            ></input>
            <p>{errors.phoneNumber}</p>
          </li>
          <li>
            <label htmlFor="postcode">Postcode: </label>
            <input
              type="text"
              id="postcode"
              name="postcode"
              placeholder="SW1A 2AA"
            />
            <p>{errors.postcode}</p>
          </li>
          {/* To be added: */}
          <li>Take a photo:</li>
          <WebcamContainer />
          <li>
            <label htmlFor="contract">Type of contract: </label>
            <select id="contract" name="contract" size="2" multiple>
              <option value="fulltime">Full-time</option>
              <option value="parttime">Part-time</option>
            </select>
          </li>
          <li>
            <label htmlFor="position">Type of position: </label>
            <select id="position" name="position" size="6" multiple>
              <option value="fulltime">Waiter/waitress</option>
              <option value="parttime">Bartender</option>
              <option value="fulltime">Porter</option>
              <option value="parttime">Housekeeper</option>
              <option value="fulltime">General Manager</option>
              <option value="parttime">Chef</option>
            </select>
            <p>{errors.position}</p>
          </li>
          <li>
            <label htmlFor="experience">
              Please provide some details about your experience in hospitality:
            </label>
            <textarea
              id="experience"
              name="experience"
              placeholder="Your experience in hospitality"
            ></textarea>
            <p>{errors.experience}</p>
          </li>
          <li>
            <label htmlFor="skills">
              Please provide some details about your skills:
            </label>
            <textarea
              id="skills"
              name="skills"
              placeholder="Your skills"
            ></textarea>
            <p>{errors.skills}</p>
          </li>
          <li>
            <label htmlFor="aboutYou">
              Please provide some more details about you:
            </label>
            <textarea
              id="aboutYou"
              name="aboutYou"
              placeholder="About you"
            ></textarea>
            <p>{errors.aboutYou}</p>
          </li>
          <li className="button">
            <button type="submit">Submit</button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default UserProfiles;
