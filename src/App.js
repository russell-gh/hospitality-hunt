import React from "react";
import Login from "./components/Login";
import AddJob from "./components/AddJob";
import Signup from "./components/Signup";
import CreateBusinessProfile from "./components/CreateBusinessProfile";
import CreateUserProfile from "./components/CreateUserProfile";
import SearchForJob from "./components/SearchForJob";
import "./App.css";
import { useSelector } from "react-redux";
import { selectScreenMode } from "./features/hospitality/hospitalitySlice";
import JobDetails from './components/JobDetails'
import Navigation from './components/Navigation'
import SearchForFreelancer from './components/SearchForFreelancer'
import FreelancerDetails from "./components/FreelancerDetails";
import Onboarding from "./components/Onboarding";
import Footer from './components/Footer'

export default function App() {
  const screenMode = useSelector(selectScreenMode);

  return (
    <div>
      <Navigation /* Yahya */ />
      <main>
        {screenMode === 1 && <Signup /> /* Stuart tidy up*/}
        {screenMode === 2 && <Login /> /* Yahya  tody up*/}
        {screenMode === 3 && <Onboarding /> /* Stuart create this component */}
        {screenMode === 4 && <CreateUserProfile /> /* creating a user profile once signed up Amelia tidy up */}
        {screenMode === 5 && <CreateBusinessProfile /> /* create a business profile once signed up, Luca */}
        {screenMode === 6 && <AddJob /> /* Yusuf add validation */}
        {screenMode === 7 && <SearchForFreelancer /> /* Bernie this one */}
        {screenMode === 8 && <SearchForJob /* Bernie tidy this up */ />}
        {screenMode === 9 && <JobDetails /> /* Dan */}
        {screenMode === 10 && <FreelancerDetails /> /* Yahya and Luca */}
      </main>
      <Footer />
    </div>
  );
}
//employer name.
//location
//type of business
//number
//emails
//about...
