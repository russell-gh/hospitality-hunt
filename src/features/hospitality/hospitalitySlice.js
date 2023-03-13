import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 10,
  user: { email: "", password: "" },
};

export const hospitalitySlice = createSlice({
  name: "hospitality",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },

    setUserProfile: (state, payload) => {
      state.userProfile = payload;
    },
  },
});

export const { increment, decrement, setUserProfile } =
  hospitalitySlice.actions;

export const selectCount = (state) => state.hospitality.value;

export default hospitalitySlice.reducer;
