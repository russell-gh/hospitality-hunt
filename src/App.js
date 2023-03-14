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
      <Navigation />
      <main>
        {screenMode === 1 && <Signup />}
        {screenMode === 2 && <Login />}
        {screenMode === 3 && <Onboarding /> /* choose between business and freelancer */}
        {screenMode === 4 && <CreateUserProfile /> /* creating a user profile once signed up */}
        {screenMode === 5 && <CreateBusinessProfile /> /* create a business profile once signed up */}
        {screenMode === 6 && <AddJob />}
        {screenMode === 7 && <SearchForFreelancer />}
        {screenMode === 8 && <SearchForJob />}
        {screenMode === 9 && <JobDetails />}
        {screenMode === 10 && <FreelancerDetails />}
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
