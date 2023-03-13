import React, { useState } from "react";
import "./loginpage.css";

const Loginpage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <form className="login__form">
        <h1>Login Here</h1>
        <input
          type="name"
          placeholder="Name"
          value={name}
          onchange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Y.yusuf@outlook.com"
          value={email}
          onchange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onchange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submit__btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Loginpage;
