import React from "react";
import Loginpage from "./components/Loginpage";
import JobPosting from "./components/jobPosting";
import Signup from "./components/Signup";
import Data from "./component/Data";
import UserProfiles from "./components/UserProfiles";
import FreelancersSearch from "./components/FreelancersSearch";
import "./App.css";

export default function App() {
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
