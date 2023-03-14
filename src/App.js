import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  selectCount,
  increment,
  decrement,
} from "./features/hospitality/hospitalitySlice";
import UserProfiles from "./components/UserProfiles";

import FreelancersSearch from "./components/FreelancersSearch";
import "./App.css";

export default function App() {
  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
      </div>
      <UserProfiles />
      <FreelancersSearch />
    </div>
  );
}
