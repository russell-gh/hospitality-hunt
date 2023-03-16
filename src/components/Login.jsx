import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./login.css";
import { login } from "../features/hospitality/hospitalitySlice";
import Button from "react-bootstrap/Button";
import { validate } from "../validation/joi";
import { logIn } from "../validation/schemas";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (email && password) {
    //   dispatch(logIn({ email: email, password: password }));
    // } else {
    //   console.log("loged in");
    // }

    const result = await validate("logIn", {
      email: email,
      password: password,
    });
    console.log(result);

    if (result === true) {
      dispatch(
        login({
          email: email,
          password: password,
          logIn: true,
        })
      );
    } else {
      console.log("your credentials are bad");
    }
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
        <h1>Login</h1>

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
        <Button type="submit" variant="primary" size="lg">
          Log in
        </Button>
      </form>
    </div>
  );
};
// dsavadvads

export default Loginpage;
