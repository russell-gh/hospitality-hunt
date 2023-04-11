import React, { useEffect } from "react";
import Login from "./components/Login";
import AddJob from "./components/AddJob";
import Signup from "./components/Signup";
import CreateBusinessProfile from "./components/CreateBusinessProfile";
import CreateUserProfile from "./components/CreateUserProfile/CreateUserProfile";
import SearchForJob from "./components/SearchForJob";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { selectScreenMode } from "./features/hospitality/hospitalitySlice";
import JobDetails from "./components/JobDetails";
import Navigation from "./components/Navigation/Navigation";
import SearchForFreelancer from "./components/SearchForFreelancer";
import FreelancerDetails from "./components/FreelancerDetails";
import Onboarding from "./components/Onboarding";
import Home from "./components/Home";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile/UserProfile";
import EmployerJobListing from "./components/EmployerJobListing";
import TestingNav from "./components/TestingNav";
import BusinessProfile from "./components/BusinessProfile/BusinessProfile";
import Online from "./components/Online";
// import { calcLonLatDiff, getLongLat } from "./location";
import axios from 'axios';

export default function App() {
  const screenMode = useSelector(selectScreenMode);
  const debugModeOn = true;
  const dispatch = useDispatch();

  const getInitialData = async () => {
    const { data } = await axios.get("http://localhost:6001/getFreelancers");

    //send the data to the store to replace the data in the store
  }

  useEffect(() => {
    getInitialData();
  }, [])

  return (
    <div>
      <Online />

      {debugModeOn && (
        <button onClick={() => localStorage.clear()}>
          Clear Local Storage
        </button>
      )}

      {/* <WebcamContainer /> */}
      <Navigation /* Yahya */ />
      {debugModeOn && <TestingNav />}

      <main>
        {screenMode === 1 && <Signup /> /* Stuart tidy up*/}
        {screenMode === 2 && <Login /> /* Yahya  tody up*/}
        {screenMode === 3 && <Onboarding /> /* Stuart create this component */}
        {
          screenMode === 4 && (
            <CreateUserProfile />
          ) /* creating a user profile once signed up Amelia tidy up */
        }
        {
          screenMode === 5 && (
            <CreateBusinessProfile />
          ) /* create a business profile once signed up, Luca */
        }
        {screenMode === 6 && <AddJob /> /* Yusuf add validation */}
        {screenMode === 7 && <SearchForFreelancer /> /* Bernie this one */}
        {screenMode === 8 && <SearchForJob /* Bernie tidy this up */ />}
        {screenMode === 9 && <JobDetails /> /* Dan */}
        {screenMode === 10 && <FreelancerDetails /> /* Yahya and Luca */}
        {screenMode === 11 && <Home />}
        {screenMode === 12 && <UserProfile /> /* Bernie */}
        {screenMode === 13 && <EmployerJobListing />}
        {screenMode === 14 && <BusinessProfile />}
      </main>
      <Footer />
    </div>
  );
}
