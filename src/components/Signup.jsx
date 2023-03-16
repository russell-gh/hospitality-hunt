import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  SIGNUP,
  setScreenMode,
} from "../features/hospitality/hospitalitySlice";
import { validate } from "../validation/joi";
import "./Signup.scss";

/**
 * Email and password stored in local store.
 * On button submit, email and password send and stored in store.
 *
 * TODO - Stuart
 *  - Validation on inputs on submit
 */
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [validationMessage, setValidationMessage] = useState();

  const dispatch = useDispatch();

  const submitSignupDate = (e) => {
    e.preventDefault();

    validateEmailPassword();
  };

  const validateEmailPassword = async () => {
    // if true then pass, can be saved
    // if false, display error message, dont save

    const result = await validate("signUp", {
      email: email,
      password: password,
      repeat_password: passwordConfirm,
    });

    if (result === true) {
      dispatch(SIGNUP({ email: email, password: password }));
      dispatch(setScreenMode(3));
    } else {
      setValidationMessage(result + " ");
    }
  };

  const handleChange = (e) => {
    if (e.target.type === "email") {
      setEmail(e.target.value);
    } else if (e.target.type === "password") {
      e.target.id === "signupFormPassword"
        ? setPassword(e.target.value)
        : setPasswordConfirm(e.target.value);
    }
  };

  return (
    <>
      <h1>Signup!</h1>
      <form className="signUp" onSubmit={submitSignupDate}>
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

        <div className="form-group">
          <input type="submit" class="btn btn-success" />
        </div>

        {validationMessage && (
          <div class="alert alert-danger" role="alert">
            {validationMessage}
          </div>
        )}
      </form>
    </>
  );
};

export default Signup;
