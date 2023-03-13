import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
  value: 10,
  user: { email: "f", password: "" },
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
      console.log(action);
      state.user.email = action.payload;
      state.user.password = action.payload.passwordFirst;
    },
  },
});

export const { increment, decrement, SIGNUP } = hospitalitySlice.actions;

export const selectCount = (state) => state.hospitality.value;

export default hospitalitySlice.reducer;
