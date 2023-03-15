import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserProfile } from "../../features/hospitality/hospitalitySlice";
import "./CreateUserProfile.css";

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
          {/* To be added: */}
          <li>Take a photo:</li>
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
          <li className="button">
            <button type="submit">Submit</button>
          </li>
        </ul>
      </form>
    </>
  );
};

export default UserProfiles;
