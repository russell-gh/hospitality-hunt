import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    // {
    //   ID: 1,
    //   type: "Freelancer",
    //   freelancer_name: "Joe Bloggs",
    //   location: "TW1 1AH",
    //   about: "",
    //   role: "server",
    //   skills: "bartending, server",
    //   email: "joebloggs@email.com",
    // },
    // {
    //   ID: 2,
    //   type: "Freelancer",
    //   freelancer_name: "Luna Estrada",
    //   location: "E17 8PQ",
    //   about: "",
    //   role: "server",
    //   skills: "server",
    //   email: "lunaestrada@email.com",
    // },
    // {
    //   ID: 3,
    //   type: "Freelancer",
    //   freelancer_name: "Natasha Schmidt",
    //   location: "N17 0TG",
    //   about: "",
    //   role: "server",
    //   skills: "bartender, host",
    //   email: "natashaschmidt@email.com",
    // },
    // {
    //   ID: 4,
    //   type: "Freelancer",
    //   freelancer_name: "Peter Gordon",
    //   location: "SE16 5HL",
    //   about: "",
    //   role: "bartender",
    //   skills: "bartender,manager",
    //   email: "petergordon@email.com",
    // },
    // {
    //   ID: 5,
    //   type: "Freelancer",
    //   freelancer_name: "Beatrice Middleton",
    //   location: "W2 3NJ",
    //   about: "",
    //   role: "bartender, server",
    //   skills: "bartender,server",
    //   email: "beatricemiddleton@email.com",
    // },
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
};

export const hospitalitySlice = createSlice({
  name: "hospitality",
  initialState,
  reducers: {},
});

export const { users } = hospitalitySlice.actions;

export const selectCount = (state) => state.hospitality.users;
//----- tell computer what you select
//----- can see the dev tool to get some hint

export default hospitalitySlice.reducer;
