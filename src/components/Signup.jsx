import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SIGNUP } from "../features/hospitality/hospitalitySlice";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./Signup.scss";

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
      <div className="signupContainer">
        <Form onSubmit={submitSignupDate}>
          <Form.Group controlId="signupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email.."
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="signupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="signupPasswordConfirm">
            <Form.Label>Confirm your Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Signup;
