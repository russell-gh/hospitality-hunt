import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screenMode: 6,

  value: 10,
  user: { email: "", password: "" },

  lastAddedJobId: 1,

  businesses: [
    {
      ID: 6,
      type: "Business",
      business_name: "The Red Lion",
      location: "NW1 0HX",
      business_type: "pub",
      position: "bartender",
      email: "redlion@email.com",
      about: "",
      salar: "100,000",
    },
    {
      ID: 7,
      type: "Business",
      business_name: "The Steakhouse",
      location: "SE11 5EQ",
      business_type: "restaurant",
      position: "server, host",
      email: "thesteakhouse@email.com",
      about: "",
    },
    {
      ID: 8,
      type: "Business",
      business_name: "London Sushi",
      location: "W9 3DS",
      business_type: "restaurant",
      position: "server",
      email: "londonsuhsi@email.com",
      about: "",
    },
    {
      ID: 9,
      type: "Business",
      business_name: "London Pub",
      location: "SE28 0PB",
      business_type: "pub",
      position: "server",
      email: "londonpub@email.com",
      about: "",
    },
    {
      ID: 10,
      type: "Business",
      business_name: "The Kings Head",
      location: "SE28 0PB",
      business_type: "pub",
      position: "bartender",
      email: "thekingshead@email.com",
      about: "",
    },
  ],
  freelancers: [
    {
      ID: 1,
      type: "Freelancer",
      freelancer_name: "Joe Bloggs",
      location: "TW1 1AH",
      about: "",
      role: "server",
      skills: "bartending, server",
      email: "joebloggs@email.com",
    },
    {
      ID: 2,
      type: "Freelancer",
      freelancer_name: "Luna Estrada",
      location: "E17 8PQ",
      about: "",
      role: "server",
      skills: "server",
      email: "lunaestrada@email.com",
    },
    {
      ID: 3,
      type: "Freelancer",
      freelancer_name: "Natasha Schmidt",
      location: "N17 0TG",
      about: "",
      role: "server",
      skills: "bartender, host",
      email: "natashaschmidt@email.com",
    },
    {
      ID: 4,
      type: "Freelancer",
      freelancer_name: "Peter Gordon",
      location: "SE16 5HL",
      about: "",
      role: "bartender",
      skills: "bartender,manager",
      email: "petergordon@email.com",
    },
    {
      ID: 5,
      type: "Freelancer",
      freelancer_name: "Beatrice Middleton",
      location: "W2 3NJ",
      about: "",
      role: "bartender, server",
      skills: "bartender,server",
      email: "beatricemiddleton@email.com",
    },
  ],

  jobListings: [
    {
      ID: 1,
      jobTitle: "waiter",
      jobDuration: "Part-Time",
      jobLocation: "london",
      jobDescription:
        "this position is to fill in for a waiter on leave you will be covering weekend shifts and  tuesday's",
    },

    {
      ID: 2,
      jobTitle: "bartender",
      jobDuration: "Part-Time",
      jobLocation: "london",
      jobDescription:
        "this position is to fill in for a bartender on leave you will be covering weekend shifts and  tuesday's",
    },
  ],
};

export const hospitalitySlice = createSlice({
  name: "hospitality",
  initialState,

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.screenMode = 3;
    },

    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },

    SIGNUP: (state, action) => {
      state.user.email = action.payload.email;
      state.user.password = action.payload.password;
    },
    ONBOARDING: (state, action) => {
      // isFreelancer is a boolean.
      // True = is freelancer, False = is business.
      state.user.isFreelancer = action.payload;
    },

    setUserProfile: (state, payload) => {
      state.businessProfile = payload;
    },
    setBusinessProfile: (state, payload) => {
      state.createBusinessProfile = payload;
    },

    setFreelancerDetails: (state, payload) => {
      state.freelancerDetails = payload;
    },

    setScreenMode: (state, payload) => {
      state.screenMode = payload.payload;
    },

    addJobListing: (state, payload) => {
      state.jobListings = [...state.jobListings, payload.payload];
      state.screenMode = 9;
      state.lastAddedJobId = payload.payload.ID;
    },

    setFreelancerDetails: (state, payload) => {
      state.freelancers = [...state.freelancers, payload.payload];
      // state.screenMode = 10;
      // state.freelancerDetails;
    },
  },
});

export const {
  increment,
  decrement,
  setUserProfile,
  SIGNUP,
  login,
  setBusinessProfile,
  setFreelancerDetails,
  ONBOARDING,
  addJobListing,
  setScreenMode,
} = hospitalitySlice.actions;

export const selectBusinesses = (state) => state.hospitality.businesses;

export const selectJobListings = (state) => state.hospitality.jobListings;

export const selectFreelancers = (state) => state.hospitality.freelancers;
export const selectScreenMode = (state) => state.hospitality.screenMode;

//----- tella  computer what you select

export const selectLastAddedJobId = (state) => state.hospitality.lastAddedJobId;

//----- tella  computer what you select

//----- tell computer what you select

//----- can see the dev tool to get some hint

export default hospitalitySlice.reducer;
