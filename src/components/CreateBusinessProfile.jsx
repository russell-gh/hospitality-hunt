import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setBusinessProfile } from "../features/hospitality/hospitalitySlice";

const BusinessProfile = (props) => {
  const dispatch = useDispatch();
  const [businessData, setBusinessData] = useState({});
  const onInput = (e) => {
    setBusinessData({ ...businessData, [e.target.id]: e.target.value });
  };

  const sendBusinessInfo = (e) => {
    e.businessDefault();
    dispatch(setBusinessProfile(businessData));
  };

  console.log(businessData);
  return (
    <>
      <h1>Your Business</h1>
      <p>Please fill in the information below:</p>
      <form
        onInput={onInput}
        onSubmit={sendBusinessInfo}
        action=""
        method="post">
        <ul>
          <li>
            <label for="business-name"></label>
            <input
              type="text"
              id="b_name"
              name="b_name"
              placeholder="Business Name"></input>
          </li>
          <li>
            <label for="location"></label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Location"></input>
          </li>
          <li>
            <label for="type-of-business"></label>
            <input
              type="text"
              id="typeOfBusiness"
              name="typeOfBusiness"
              placeholder="Type of Business"></input>
          </li>
          <li>
            <label for="email"></label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"></input>
          </li>
          <li>
            <label for="confirm-email"></label>
            <input
              type="text"
              id="confirm-email"
              name="confirm-email"
              placeholder="Confirm-Email"></input>
          </li>
          <li>
            <label for="phone-number"></label>
            <input
              for="text"
              id="number"
              name="number"
              placeholder="Phone Number"></input>
          </li>
          <li>
            <input for="buisness-logo"></input>
            {/* to be done */}
          </li>
          <li>
            <label for="about"></label>
            <textarea
              type="text"
              id="about"
              name="about"
              placeholder="Tell us About your Business"></textarea>
          </li>

          <button type="submit">Submit</button>
        </ul>
      </form>
    </>
  );
};

export default BusinessProfile;
