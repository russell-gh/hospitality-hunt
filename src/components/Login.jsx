import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./login.css";
import { login, selectUser } from "../features/hospitality/hospitalitySlice";
import { validate } from "../validation/joi";
import { useSelector } from "react-redux";
import sha256 from "sha256";
import axios from 'axios';
import { storeData } from "../storage";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const [badCred, setBadCred] = useState(false);

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  // console.log(user)

  const handleSubmit = async (e) => {
    e.preventDefault();

    //START USES SERVER
    //ask the server
    const { data } = await axios.post(`http://localhost:6001/login`, {
      email, password
    });

    if (data.status === 1) {
      storeData("token", { token: data.token });
    }
    //END USES SERVER

    const result = await validate("logIn", {
      email: email,
      password: password,
    });
    setError(result);

    //check the creds *** just for dev purposes ***
    if (
      user.email !== email ||
      user.password !== sha256(password + "cohort-ft3")
    ) {
      setBadCred(true);
      return;
    }

    dispatch(login());
  };

  return (
    <div className="loginContainer">
      <h1 className="logInHeader">Log in</h1>
      <form className="login" onSubmit={(e) => handleSubmit(e)}>
        <div className="iconAndloginBtn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="40"
            height="40"
          >
            <path d="M2.743 4.757a3.757 3.757 0 1 1 5.851 3.119 5.991 5.991 0 0 1 2.15 1.383c.17.17.257.405.258.646.003.598.001 1.197 0 1.795L11 12.778v.721a.5.5 0 0 1-.5.5H1.221a.749.749 0 0 1-.714-.784 6.004 6.004 0 0 1 3.899-5.339 3.754 3.754 0 0 1-1.663-3.119Z"></path>
            <path d="M15.75 6.875c0 .874-.448 1.643-1.127 2.09a.265.265 0 0 0-.123.22v.59c0 .067-.026.13-.073.177l-.356.356a.125.125 0 0 0 0 .177l.356.356c.047.047.073.11.073.176v.231c0 .067-.026.13-.073.177l-.356.356a.125.125 0 0 0 0 .177l.356.356c.047.047.073.11.073.177v.287a.247.247 0 0 1-.065.168l-.8.88a.52.52 0 0 1-.77 0l-.8-.88a.247.247 0 0 1-.065-.168V9.185a.264.264 0 0 0-.123-.22 2.5 2.5 0 1 1 3.873-2.09ZM14 6.5a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
          </svg>
        </div>

        {badCred && (
          <div className="alert alert-danger">
            your credentials are not correct
          </div>
        )}

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            className="form-control"
            type="email"
            placeholder="Enter your email..."
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          />
          {error.email && (
            <div className="alert alert-danger">your email is not correct</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            className="form-control"
            type="password"
            placeholder="......"
            value={password}
            onInput={(e) => setPassword(e.target.value)}
          />
          {error.password && (
            <div className="alert alert-danger">
              your password is not correct
            </div>
          )}
        </div>

        <div className="iconAndloginBtn">
          <button type="submit" className="btn btn-success loginBtn">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Loginpage;
