import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  signUp,
  setScreenMode,
} from "../features/hospitality/hospitalitySlice";
import { validate } from "../validation/joi";
import "./Signup.scss";
import sha256 from "sha256";
import gsap from "gsap";

const Signup = () => {
  const [userData, setUserData] = useState({});
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const wiggleTimeLine = gsap.timeline();

  const submitSignupDate = (e) => {
    e.preventDefault();
    if (errors === true) {
      delete userData.repeat_password;

      //swap the password for a sha 256 version
      userData.password = sha256(userData.password + "cohort-ft3");

      dispatch(signUp(userData));
      dispatch(setScreenMode(3));
    }
  };

  const validateEmailPassword = async (newInputData) => {
    const result = await validate("signUp", newInputData);
    setErrors(result);
  };

  const onInput = (e) => {
    const newInputData = { ...userData, [e.target.id]: e.target.value };
    setUserData(newInputData);
    validateEmailPassword(newInputData);
  };

  const mouseEnterSubmit = () => {
    wiggleTimeLine
      .to(".btn.btn-success", { rotate: -10, duration: 1 })
      .to(".btn.btn-success", { rotate: 10, duration: 2 })
      .to(".btn.btn-success", { rotate: 1, duration: 1 })
      .repeat(-1);

    wiggleTimeLine.resume();
  };

  const mouseLeaveSubmit = () => {
    wiggleTimeLine.pause();
  };

  return (
    <>
      <h1>Signup!</h1>
      <form className="signUp" onInput={onInput} onSubmit={submitSignupDate}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email.."
          />
          {errors.email && (
            <div className="alert alert-danger" role="alert">
              {errors.email}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="..."
          />
          {errors.password && (
            <div className="alert alert-danger" role="alert">
              {errors.password}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="repeat_password">Confirm your Password</label>
          <input
            type="password"
            className="form-control"
            id="repeat_password"
            placeholder="..."
          />

          {errors.repeat_password && (
            <div className="alert alert-danger" role="alert">
              {errors.repeat_password}
            </div>
          )}
        </div>

        <div className="form-group">
          <input
            type="submit"
            className="btn btn-success"
            onMouseEnter={mouseEnterSubmit}
            onMouseLeave={mouseLeaveSubmit}
          />
        </div>
      </form>
    </>
  );
};

export default Signup;
