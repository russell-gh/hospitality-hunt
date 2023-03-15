import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserProfile } from "../../features/hospitality/hospitalitySlice";
import "./CreateUserProfile.css";
import { validate } from "../../validation/joi";

const UserProfiles = (props) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});
  const onInput = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  const sendUserInfo = async (e) => {
    e.preventDefault();
    const result = await validate("createUserProfile", userData);
    console.log(result);
    if (result === true) {
      dispatch(setUserProfile(userData));
    } else {
      console.log("Didn't work");
      // return "Please complete missing information";
    }
  };

  console.log(userData);
  return (
    <>
      <h1>Your profile</h1>
      <p>Please fill in the information below:</p>

      <form onInput={onInput} onSubmit={sendUserInfo} action="" method="post">
        <ul>
          <li>
            <label htmlFor="firstname">First name: </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="First name"
            />
          </li>
          <li>
            <label htmlFor="lastname">Last name: </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Last name"
            />
          </li>
          {/* <li>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
            />
          </li> */}
          {/* <li>
            <label htmlFor="email">Confirm email: </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
            />
          </li> */}
          {/* <li>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            ></input>
          </li> */}
          {/* <li>
            <label htmlFor="password">Confirm password: </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            ></input>
          </li> */}
          <li>
            <label htmlFor="phone">Phone number: </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="00447111111111"
            ></input>
          </li>
          <li>
            <label htmlFor="postcode">Postcode: </label>
            <input
              type="text"
              id="postcode"
              name="postcode"
              placeholder="SW1A 2AA"
            />
          </li>
          {/* To be added: */}
          <li>Take a photo:</li>
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
          </li>
          <li>
            <label htmlFor="aboutyou">
              Please provide some more details about you:
            </label>
            <textarea
              id="aboutyou"
              name="aboutyou"
              placeholder="About you"
            ></textarea>
          </li>
          <li className="button">
            <button type="submit">Submit</button>
          </li>
        </ul>
      </form>
    </>
  );
};

export default UserProfiles;
