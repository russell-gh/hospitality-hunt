import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SIGNUP } from "../features/hospitality/hospitalitySlice";

/**
 * Email and password stored in local store.
 * On button submit, email and password send and stored in store.
 *
 * TODO - Stuart
 *  - Validation on inputs on submit
 *  - Styling with bootstrap
 */
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();

  const dispatch = useDispatch();

  const submitSignupDate = (e) => {
    e.preventDefault();
    dispatch(SIGNUP({ email: email, password: password }));
  };

  const handleChange = (e) => {
    if (e.target.type === "email") {
      setEmail(e.target.value);
    } else if (e.target.type === "password") {
      e.target.id === "signupPassword"
        ? setPassword(e.target.value)
        : setPasswordConfirm(e.target.value);
    }
  };

  return (
    <>
      <h1>Signup!</h1>
      <form onSubmit={submitSignupDate}>
        <div className="form-group">
          <label for="singupFormEmail">Email</label>
          <input
            type="email"
            class="form-control"
            id="signupFormEmail"
            placeholder="Enter your email.."
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label for="signupFormPassword">Password</label>
          <input
            type="password"
            class="form-control"
            id="signupFormPassword"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label for="signupFormPasswordConfirmation">
            Confirm your Password
          </label>
          <input
            type="password"
            class="form-control"
            id="signupFormPasswordConfirmation"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>

        <button type="submit" class="btn btn-success">
          Submit
        </button>
      </form>
    </>
  );
};

export default Signup;
