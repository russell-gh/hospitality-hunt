import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

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
    SIGNUP: (state, action) => {
      state.user.email = action.payload.email;
      state.user.password = action.payload.password;
    },
  },
});

export const { increment, decrement, SIGNUP } = hospitalitySlice.actions;

export const selectCount = (state) => state.hospitality.value;

export const selectUser = (state) => state.hospitality.user;

export default hospitalitySlice.reducer;
