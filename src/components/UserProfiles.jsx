import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserProfile } from "../features/hospitality/hospitalitySlice";

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
      <h1>Your user profile</h1>
      <p>Please fill in the information below:</p>

      <form onInput={onInput} onSubmit={sendUserInfo} action="" method="post">
        <ul>
          <li>
            <label for="firstname">First name: </label>
            <input type="text" id="firstname" name="firstname" />
          </li>
          <li>
            <label for="lastname">Last name: </label>
            <input type="text" id="lastname" name="lastname" />
          </li>
          <li>
            <label for="email">Email: </label>
            <input type="email" id="email" name="email" />
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
