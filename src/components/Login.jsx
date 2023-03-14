import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./loginpage.css";
import { login } from "../features/hospitality/hospitalitySlice";

const Loginpage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.prevantDefault();

    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        logIn: true,
      })
    );
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
        <h1>Login Here</h1>
        <input
          type="name"
          placeholder="Name"
          value={name}
          onInput={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="enter email"
          value={email}
          onInput={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onInput={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submit__btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Loginpage;
