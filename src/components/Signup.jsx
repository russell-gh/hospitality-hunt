import React from "react";

import { useDispatch } from "react-redux";
import { SIGNUP } from "../features/hospitality/hospitalitySlice";

import Button from "react-bootstrap/Button";

// Notes: GET info from form instead of individual data, pull data from payload instead

/**
 * On button click
 *  - validate email
 *      - is valid email
 *      - does not already exist in logins
 *  - validate password
 *      - check both passwords are the same
 * Collect email
 * Collect password
 * Store in state
 * Confirm it is stored
 *
 * @returns
 */

const Signup = () => {
  const dispatch = useDispatch();

  const submitSignupDate = (e) => {
    e.preventDefault();

    const email = document.getElementById("signupFormEmail").value;
    const passwordFirst = document.getElementById("signupFormPassword").value;
    const passwordSecond = document.getElementById(
      "signupFormPasswordSecond"
    ).value;

    dispatch(SIGNUP({ email, passwordFirst, passwordSecond }));
  };

  return (
    <>
      <div className="signupContainer">
        <h1>Signup!</h1>

        <form
          // onSubmit={submitSignupDate}
          className="signupForm"
        >
          <input
            type="email"
            name="email"
            id="signupFormEmail"
            value="Enter your email.."
          />

          <input
            type="password"
            name="password"
            id="signupFormPassword"
            value="11"
          />
          <input
            type="password"
            name="password"
            id="signupFormPasswordSecond"
            value="22"
          />

          <Button variant="primary" onClick={submitSignupDate}>
            Test
          </Button>
        </form>
      </div>
    </>
  );
};

export default Signup;
