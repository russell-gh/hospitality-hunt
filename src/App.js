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
  const dispatch = useDispatch();
  return (
    <div>
      <UserProfiles />
      <FreelancersSearch />
    </div>
  );
}
