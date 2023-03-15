import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screenMode: 6,
  value: 10,
  user: { email: "", password: "" },

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
  jobListing: [
    {
      ID: "j1",
      jobTitle: "waiter",
      jobDuration: "Part-Time",
      jobLocation: "london",
      jobDescription:
        "this position is to fill in for a waiter on leave you will becovering weekend shifts and  tuesday's",
    },
  ],
};

export const hospitalitySlice = createSlice({
  name: "hospitality",
  initialState,

  reducers: {
    login: (state, action) => {
      state.user = action.playload;
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

    setUserProfile: (state, payload) => {
      state.userProfile = payload;
    },
    addJobListing: (state, payload) => {
      state.jobListing = payload;
    },
  },
});

export const {
  increment,
  decrement,
  setUserProfile,
  SIGNUP,
  login,
  addJobListing,
} = hospitalitySlice.actions;

export const selectBusinesses = (state) => state.hospitality.businesses;
export const selectFreelancers = (state) => state.hospitality.freelancers;
export const selectScreenMode = (state) => state.hospitality.screenMode;
//----- tell computer what you select
//----- can see the dev tool to get some hint

export default hospitalitySlice.reducer;
