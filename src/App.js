import React from "react";

import Loginpage from "./components/Loginpage";


 

import { useSelector, useDispatch } from "react-redux";

import JobPosting from "./components/jobPosting";

import Signup from "./components/Signup";

import Data from "./component/Data";


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

    



      <Signup />
       <Loginpage />
<JobPosting />
      <UserProfiles />
      <FreelancersSearch />
         <Data />



    </div>

  );
}
//employer name.
//location
//type of business
//number
//emails
//about...
