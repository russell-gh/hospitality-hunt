import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screenMode: 11,

  value: 10,
  user: { email: "", password: "" },

  lastAddedJobId: 1,

  freelancers: [
    {
      id: 1,
      Name: "Joe Bloggs",
      Role: "chef",
      Experience: "3 years chef",
      Skill: "strong knife skill",
      Contract: "Full-time",
      Postcode: "TW1 1AH",
      Email: "joebloggs@email.com",
      Phone: "089-93746328",
      About:
        "Creating new recipes, or adhering to specific food preparation and standards set by the restaurant and local laws.",
      // isEdit: false,
    },
    {
      id: 2,
      Name: "Luna Estrada",
      Role: "waitress, assistance",
      Experience: "0 year hospitality",
      Skill: "time management",
      Contract: "Part-time",
      Postcode: "E17 8PQ",
      Email: "lunaestrada@email.com",
      Phone: "089-93746328",
      About: "Full-time student looking for part-time on weekend",
      // isEdit: false,
    },
    {
      id: 3,
      Name: "Peter Gordon",
      Role: "bartender, server",
      Experience: "1 years bartender",
      Skill: "bartending",
      Contract: "Full-time",
      Postcode: "SE16 5HL",
      Email: "petergordon@email.com",
      Phone: "089-93746328",
      About:
        "I work directly with customers by mixing and serving drink orders. My responsibilities include verifying age requirements, knowing alcohol pairing and tastes, knowing how to make traditional and classy drinks, processing payments, managing inventory and cleaning bar supplies.",
      // isEdit: false,
    },
    {
      id: 4,
      Name: "Beatrice Middleton",
      Role: "manager",
      Experience: "7 years kitchen management",
      Skill: "management",
      Contract: "Full-time",
      Postcode: "W2 3NJ",
      Email: "beatricemiddleton@email.com",
      Phone: "012-55375537",
      About:
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
} = hospitalitySlice.actions;

export const selectJobListings = (state) => state.hospitality.jobListings;
export const selectFreelancers = (state) => state.hospitality.freelancers;
export const selectScreenMode = (state) => state.hospitality.screenMode;
export const selectLastAddedJobId = (state) => state.hospitality.lastAddedJobId;

export default hospitalitySlice.reducer;
