import { createSlice } from "@reduxjs/toolkit";
import { getData, storeData } from "../../storage";
import { freelancers, jobListings, businesses } from "../../sampleData";

const dataFromDisk = getData("redux-store");
const initialState = {
  screenMode: 14,

  currentUserId: 1,
  user: { email: "", password: "" },
  isFreelancer: undefined,
  isProfileComplete: false,
  freelancers,
  jobListings,
  businesses,
  lastClickedJobId: 1,
  lastClickedFreelancerId: 1,
};

export const hospitalitySlice = createSlice({
  name: "hospitality",
  initialState:
    dataFromDisk ||
    initialState /* if data from the disk exists, use it, else use the initial state */,
  reducers: {
    login: (state) => {
      if (state.isFreelancer) {
        if (state.isProfileComplete) {
          state.screenMode = 8; //searchForJob
        } else {
          state.screenMode = 4; //createUserProfile
        }
      } else if (state.isFreelancer === false) {
        if (state.isProfileComplete) {
          state.screenMode = 13; //employerJobListings
        } else {
          state.screenMode = 5; //createBusinessProfile
        }
      } else if (typeof state.isFreelancer === "undefined") {
        state.screenMode = 3; //onboarding
      }
      state.loggedIn = true;
      storeData("redux-store", state);
    },
    logout: (state) => {
      state.screenMode = 11;
      state.loggedIn = false;
      storeData("redux-store", state);
    },
    signUp: (state, action) => {
      state.user = action.payload;
      state.loggedIn = true;
      storeData("redux-store", state);
    },
    onboarding: (state, action) => {
      // If is freelancer is true, they are a person that is looking for a job.
      // otherwise, it is a company that is advertising a job.
      state.isFreelancer = action.payload;
      state.screenMode = action.payload ? 4 : 5;
      storeData("redux-store", state);
    },
    setBusinessProfile: (state, payload) => {
      state.isProfileComplete = true;
      state.createBusinessProfile = payload;
      storeData("redux-store", state);
    },
    setScreenMode: (state, payload) => {
      state.screenMode = payload.payload;
    },
    addJobListing: (state, payload) => {
      state.jobListings = [...state.jobListings, payload.payload];
      state.screenMode = 13;
      state.lastAddedJobId = payload.payload.ID;
      storeData("redux-store", state);
    },
    addBusiness: (state, payload) => {
      state.businesses = [...state.businesses, payload.payload];
      state.screenMode = 6;
      state.currentUserId = payload.payload.currentUserId;
      storeData("redux-store", state);
    },
    setFreelancerDetails: (state, payload) => {
      state.isProfileComplete = true;
      payload.payload.image = state.userImage;
      state.freelancers = [...state.freelancers, payload.payload];
      state.currentUserId = payload.payload.id;
      state.screenMode = 12;
      state.userImage = undefined;
      // state.freelancerDetails;
      storeData("redux-store", state);
    },
    setDeleteJob: (state, payload) => {
      const index = state.jobListings.findIndex(
        (job) => job.id === payload.payload.id
      );
      state.jobListings.splice(index, 1);
      storeData("redux-store", state);
    },
    setUserImage: (state, payload) => {
      state.userImage = payload.payload;
      storeData("redux-store", state);
    },
    editedFreelancerData: (state, action) => {
      const freelancer = state.freelancers.findIndex(
        (item) => item.id === state.currentUserId
      );
      state.freelancers[freelancer] = action.payload;
      storeData("redux-store", state);
    },
    jobClicked: (state, payload) => {
      state.lastClickedJobId = payload.payload;
      state.screenMode = 9;
    },
    freelancerClicked: (state, payload) => {
      state.lastClickedFreelancerId = payload.payload;
      state.screenMode = 10;
    },
    editedUserImage: (state, action) => {
      const freelancer = state.freelancers.findIndex(
        (item) => item.id === state.currentUserId
      );
      state.freelancers[freelancer].image = action.payload;
      storeData("redux-store", state);
    },
    editedBusinessData: (state, action) => {
      const business = state.businesses.findIndex(
        (item) => item.id === state.currentUserId
      );
      state.businesses[business] = action.payload;
      storeData("redux-store", state);
    },
    setBackToFreelancerListing: (state) => {
      state.screenMode = 7;
    },
    setBackToJobListing: (state) => {
      state.screenmode = 8;
    },
  },
});

export const {
  setDeleteJob,
  setUserProfile,
  signUp,
  login,
  addBusiness,
  setFreelancerDetails,
  onboarding,
  addJobListing,
  setScreenMode,
  setUserImage,
  editFormData,
  saveEditForm,
  editedFreelancerData,
  jobClicked,
  logout,
  freelancerClicked,
  editedUserImage,
  editedBusinessData,
  setBackToFreelancerListing,
  setBackToJobListing,
} = hospitalitySlice.actions;

export const selectJobListings = (state) => state.hospitality.jobListings;
export const selectFreelancers = (state) => state.hospitality.freelancers;
export const selectScreenMode = (state) => state.hospitality.screenMode;
export const selectLastAddedJobId = (state) => state.hospitality.lastAddedJobId;
export const selectCurrentUserId = (state) => state.hospitality.currentUserId;
export const selectUser = (state) => state.hospitality.user;
export const selectLoggedIn = (state) => state.hospitality.loggedIn;
export const selectLastClickedJobId = (state) =>
  state.hospitality.lastClickedJobId;
export const selectIsFreelancer = (state) => state.hospitality.isFreelancer;
export const selectLastClickedFreelancerId = (state) =>
  state.hospitality.lastClickedFreelancerId;
export const selectBusinesses = (state) => state.hospitality.businesses;

export default hospitalitySlice.reducer;
