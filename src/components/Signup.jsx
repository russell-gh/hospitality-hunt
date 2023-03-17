import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  SIGNUP,
  setScreenMode,
} from "../features/hospitality/hospitalitySlice";
import { validate } from "../validation/joi";
import "./Signup.scss";

const Signup = () => {
  const [userData, setUserData] = useState({});
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const submitSignupDate = (e) => {
    e.preventDefault();
    validateEmailPassword();
  };

  const validateEmailPassword = async () => {
    const result = await validate("signUp", {
      email: userData.signupFormEmail,
      password: userData.signupFormPassword,
      repeat_password: userData.signupFormPasswordConfirmation,
    });

    if (result === true) {
      dispatch(SIGNUP(userData));
      dispatch(setScreenMode(3));
    } else {
      setErrors(result);
    }
  };

  const onChange = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  return (
    <>
      <h1>Signup!</h1>
      <form className="signUp" onChange={onChange} onSubmit={submitSignupDate}>
        <div className="form-group">
          <label for="singupFormEmail">Email</label>
          <input
            type="email"
            class="form-control"
            id="signupFormEmail"
            placeholder="Enter your email.."
          />
          {errors.email && (
            <div class="alert alert-danger" role="alert">
              {errors.email}
            </div>
          )}
        </div>

        <div className="form-group">
          <label for="signupFormPassword">Password</label>
          <input
            type="password"
            class="form-control"
            id="signupFormPassword"
            placeholder="..."
          />
          {errors.password && (
            <div class="alert alert-danger" role="alert">
              {errors.password}
            </div>
          )}
        </div>

        <div className="form-group">
          <label for="signupFormPasswordConfirmation">
            Confirm your Password
          </label>
          <input
            type="password"
            class="form-control"
            id="signupFormPasswordConfirmation"
            placeholder="..."
          />

          {errors.repeat_password && (
            <div class="alert alert-danger" role="alert">
              {errors.repeat_password}
            </div>
          )}
        </div>

        <div className="form-group">
          <input type="submit" class="btn btn-success" />
        </div>
      </form>
    </>
  );
};

export default Signup;
