import { createSlice } from "@reduxjs/toolkit";
import { getData, storeData } from "../../storage";

const dataFromDisk = getData("redux-store");

const initialState = {

  screenMode: 6,

  value: 10,
  user: { email: "", password: "" },
  lastAddedJobId: 1,

  freelancers: [
    {
      id: 1,
      firstName: "Joe",
      lastName: "Bloggs",
      position: "chef",
      experience: "3 years chef",
      skills: "strong knife skill",
      contract: "fullTime",
      postCode: "TW1 1AH",
      email: "joebloggs@email.com",
      phoneNumber: "089-93746328",
      aboutYou:
        "Creating new recipes, or adhering to specific food preparation and standards set by the restaurant and local laws.",
    },
    {
      id: 2,
      firstName: "Luna",
      lastName: "Estrada",
      position: "waitress, assistance",
      experience: "0 year hospitality",
      skills: "time management",
      contract: "partTime",
      postCode: "E17 8PQ",
      email: "lunaestrada@email.com",
      phoneNumber: "089-93746328",
      aboutYou: "Full-time student looking for part-time on weekend",
    },
    {
      id: 3,
      firstName: "Peter",
      lastName: "Gordon",
      position: "bartender, server",
      experience: "1 years bartender",
      skills: "bartending",
      contract: "fullTime",
      postCode: "SE16 5HL",
      email: "petergordon@email.com",
      phoneNumber: "089-93746328",
      aboutYou:
        "I work directly with customers by mixing and serving drink orders. My responsibilities include verifying age requirements, knowing alcohol pairing and tastes, knowing how to make traditional and classy drinks, processing payments, managing inventory and cleaning bar supplies.",
    },
    {
      id: 4,
      firstName: "Beatrice",
      lastName: "Middleton",
      position: "manager",
      experience: "7 years kitchen management",
      skills: "management",
      contract: "fullTime",
      postCode: "W2 3NJ",
      email: "beatricemiddleton@email.com",
      phoneNumber: "012-55375537",
      aboutYou:
        "In charge of coordinating and supervising a restaurant's kitchen staff according to food safety standards. My duties include hiring, training and scheduling Cooks, performing quality control on food leaving the kitchen and ordering inventory to keep up with demand",
    },
  ],

  jobListings: [
    {
      id: 1,
      name: "London Sushi",
      type: "Japanese restaurant",
      title: "waiter",
      salary: "£10/hr",
      contract: "Part-time",
      postCode: "N4 7HA",
      email: "londonsuhsi@email.com",
      phoneNumber: "034-653125",
      description:
        "this position is to fill in for a waiter on leave you will be covering weekend shifts and tuesday's",
    },
    {
      id: 2,
      name: "The Red Lion",
      type: "Pub",
      title: "Cocktail bartender",
      salary: "£13.5/hr",
      contract: "Part-time",
      postCode: "S2 3TR",
      email: "redlion@email.com",
      phoneNumber: "56-65312465",
      description: "Provide a high level of customer service at all times",
    },
    {
      id: 3,
      name: "The Steakhouse",
      type: "Restaurant",
      title: "server, host",
      salary: "£11/hr",
      contract: "Full-time",
      postCode: "SE11 5EQ",
      email: "thesteakhouse@email.com",
      phoneNumber: "111-64442465",
      description:
        "Experience of working within, or a desire to work within a high-end restaurant",
    },
    {
      id: 4,
      name: "The Kings Head",
      type: "Restaurant",
      title: "bartender",
      salary: "£12/hr",
      contract: "Full-time",
      postCode: "SE28 0PB"
      email: "thekingshead@email.com",
      phoneNumber: "111-64442465",
      description: "40hrs in a week, time slot: 18:00-02:00 / 22:00-06:00",
    },
  ],
};

export const hospitalitySlice = createSlice({
  name: "hospitality",
  initialState:
    dataFromDisk ||
    initialState /* if data from the disk exists, use it, else use the initial state */,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.screenMode = 3;
      storeData("redux-store", state);
    },
    signUp: (state, action) => {
      state.user.email = action.payload.email;
      state.user.password = action.payload.password;
      storeData("redux-store", state);
    },
    onboarding: (state, action) => {
      // If is freelancer is true, they are a person that is looking for a job.
      // otherwise, it is a company that is advertising a job.
      state.user.isFreelancer = action.payload;
      storeData("redux-store", state);
    },

    setBusinessProfile: (state, payload) => {
      state.createBusinessProfile = payload;
      storeData("redux-store", state);
    },
    setFreelancerDetails: (state, payload) => {
      state.freelancerDetails = payload;
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

    // setFreelancerDetails: (state, payload) => {
    //   state.freelancers = [...state.freelancers, payload.payload];
    //   // state.screenMode = 10;
    //   // state.freelancerDetails;
    //   storeData("redux-store", state)
    // },


    },

    setFreelancerDetails: (state, payload) => {
      state.freelancers = [...state.freelancers, payload.payload];
      storeData("redux-store", state);
    },


    // editFormData: (state) => (state.isEdit = true),
      // state.screenMode = 10;
      // state.freelancerDetails;
   //   storeData("redux-store", state);
  //  },

    setUserImage: (state, payload) => {
      state.userImage = payload.payload;
      storeData("redux-store", state);
    },


    setEditData: (state, payload) => {},


  },
});

export const {
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
  setEditData,
} = hospitalitySlice.actions;

export const selectJobListings = (state) => state.hospitality.jobListings;
export const selectFreelancers = (state) => state.hospitality.freelancers;
export const selectScreenMode = (state) => state.hospitality.screenMode;
export const selectLastAddedJobId = (state) => state.hospitality.lastAddedJobId;

export default hospitalitySlice.reducer;
