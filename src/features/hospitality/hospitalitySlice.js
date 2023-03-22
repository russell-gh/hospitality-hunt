import { createSlice } from "@reduxjs/toolkit";
import { getData, storeData } from "../../storage";
import { freelancers, jobListings } from "../../sampleData";

const dataFromDisk = getData("redux-store");
const initialState = {
  screenMode: 4,
  currentUserId: 1,
  user: { email: "", password: "" },
  freelancers,
  jobListings,
};

export const hospitalitySlice = createSlice({
  name: "hospitality",
  initialState:
    dataFromDisk ||
    initialState /* if data from the disk exists, use it, else use the initial state */,
  reducers: {
    login: (state, action) => {
      state.screenMode = 3;
      state.loggedIn = true;
      storeData("redux-store", state);
    },
    signUp: (state, action) => {
      state.user = action.payload;
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

    setFreelancerDetails: (state, payload) => {
      payload.payload.image = state.userImage;
      state.freelancers = [...state.freelancers, payload.payload];
      state.currentUserId = payload.payload.id;
      state.screenMode = 12;
      state.userImage = undefined;
      // state.freelancerDetails;
      storeData("redux-store", state);
    },

    setUserImage: (state, payload) => {
      state.userImage = payload.payload;
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

    editedData: (state, action) => {
      const freelancer = state.freelancers.findIndex(
        (item) => item.id === state.currentUserId
      );
      state.freelancers[freelancer] = action.payload;
    },
  },
});

export const {
  setDeleteJob,
  setUserProfile,
  signUp,
  login,
  setBusinessProfile,
  setFreelancerDetails,
  onboarding,
  addJobListing,
  setScreenMode,
  setUserImage,
  editFormData,
  saveEditForm,
  editedData,
} = hospitalitySlice.actions;

export const selectJobListings = (state) => state.hospitality.jobListings;
export const selectFreelancers = (state) => state.hospitality.freelancers;
export const selectScreenMode = (state) => state.hospitality.screenMode;
export const selectLastAddedJobId = (state) => state.hospitality.lastAddedJobId;
export const selectCurrentUserId = (state) => state.hospitality.currentUserId;
export const selectUser = (state) => state.hospitality.user;
export const selectLoggedIn = (state) => state.hospitality.loggedIn;

export default hospitalitySlice.reducer;
