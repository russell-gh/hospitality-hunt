import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screenMode: 4,

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
      skill: "strong knife skill",
      contract: "Full-time",
      postCode: "TW1 1AH",
      email: "joebloggs@email.com",
      phoneNumber: "089-93746328",
      aboutYou:
        "Creating new recipes, or adhering to specific food preparation and standards set by the restaurant and local laws.",
      // isEdit: false,
    },
    {
      id: 2,
      firstName: "Luna",
      lastName: "Estrada",
      position: "waitress, assistance",
      experience: "0 year hospitality",
      skill: "time management",
      contract: "Part-time",
      postCode: "E17 8PQ",
      email: "lunaestrada@email.com",
      phoneNumber: "089-93746328",
      aboutYou: "Full-time student looking for part-time on weekend",
      // isEdit: false,
    },
    {
      id: 3,
      firstName: "Peter",
      lastName: "Gordon",
      position: "bartender, server",
      experience: "1 years bartender",
      skill: "bartending",
      contract: "Full-time",
      postCode: "SE16 5HL",
      email: "petergordon@email.com",
      phoneNumber: "089-93746328",
      aboutYou:
        "I work directly with customers by mixing and serving drink orders. My responsibilities include verifying age requirements, knowing alcohol pairing and tastes, knowing how to make traditional and classy drinks, processing payments, managing inventory and cleaning bar supplies.",
      // isEdit: false,
    },
    {
      id: 4,
      firstName: "Beatrice",
      lastName: "Middleton",
      position: "manager",
      experience: "7 years kitchen management",
      skill: "management",
      contract: "Full-time",
      postCode: "W2 3NJ",
      email: "beatricemiddleton@email.com",
      phoneNumber: "012-55375537",
      aboutYou:
        "In charge of coordinating and supervising a restaurant's kitchen staff according to food safety standards. My duties include hiring, training and scheduling Cooks, performing quality control on food leaving the kitchen and ordering inventory to keep up with demand",
      // isEdit: false,
    },
  ],

  jobListings: [
    {
      id: 1,
      Name: "London Sushi",
      Type: "Japanese restaurant",
      Title: "waiter",
      Salary: "£10/hr",
      Contract: "Part-time",
      Postcode: "N4 7HA",
      Email: "londonsuhsi@email.com",
      Phone: "034-653125",
      Description:
        "this position is to fill in for a waiter on leave you will be covering weekend shifts and tuesday's",
    },
    {
      id: 2,
      Name: "The Red Lion",
      Type: "Pub",
      Title: "Cocktail bartender",
      Salary: "£13.5/hr",
      Contract: "Part-time",
      Postcode: "S2 3TR",
      Email: "redlion@email.com",
      Phone: "56-65312465",
      Description: "Provide a high level of customer service at all times",
    },
    {
      id: 3,
      Name: "The Steakhouse",
      Type: "Restaurant",
      Title: "server, host",
      Salary: "£11/hr",
      Contract: "Full-time",
      Postcode: "SE11 5EQ",
      Email: "thesteakhouse@email.com",
      Phone: "111-64442465",
      Description:
        "Experience of working within, or a desire to work within a high-end restaurant",
    },
    {
      id: 4,
      Name: "The Kings Head",
      Type: "Restaurant",
      Title: "bartender",
      Salary: "£12/hr",
      Contract: "Full-time",
      Postcode: "SE28 0PB",
      Email: "thekingshead@email.com",
      Phone: "111-64442465",
      Description: "40hrs in a week, time slot: 18:00-02:00 / 22:00-06:00",
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
      state.user.email = action.payload.signupFormEmail;
      state.user.password = action.payload.signupFormPassword;
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

    // editFormData: (state) => (state.isEdit = true),

    setUserImage: (state, payload) => {
      state.userImage = payload.payload;
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
  // editFormData,
  setUserImage,
} = hospitalitySlice.actions;

export const selectJobListings = (state) => state.hospitality.jobListings;
export const selectFreelancers = (state) => state.hospitality.freelancers;
export const selectScreenMode = (state) => state.hospitality.screenMode;
export const selectLastAddedJobId = (state) => state.hospitality.lastAddedJobId;

export default hospitalitySlice.reducer;
