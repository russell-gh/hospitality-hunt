import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserProfile } from "../features/hospitality/hospitalitySlice";

const Joi = require("joi");

const schema = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().optional(),
});

const { error } = schema.validate({});

const validateForm = (e) => {
  if (error) {
    return "Non valid input";
  }
};

const UserProfiles = (props) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});
  const onInput = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  const sendUserInfo = (e) => {
    e.preventDefault();
    dispatch(setUserProfile(userData));
  };

  console.log(userData);
  return (
    <>
      <h1>Your profile</h1>
      <p>Please fill in the information below:</p>

      <form onInput={onInput} onSubmit={sendUserInfo} action="" method="post">
        <ul>
          <li>
            <label for="firstname">First name: </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="First name"
            />
          </li>
          <li>
            <label for="lastname">Last name: </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Last name"
            />
          </li>
          <li>
            <label for="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
            />
          </li>
          <li>
            <label for="email">Confirm email: </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
            />
          </li>
          <li>
            <label for="password">Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            ></input>
          </li>
          <li>
            <label for="password">Confirm password: </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            ></input>
          </li>
          <li>
            <label for="phone">Phone number: </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="00447111111111"
            ></input>
          </li>
          {/* To be added: */}
          <li>Take a photo:</li>
          <li>
            <label for="experience">
              Please provide some details about your experience in hospitality:
            </label>
            <textarea
              id="experience"
              name="experience"
              placeholder="Your experience in hospitality"
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
