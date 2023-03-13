import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 10,
  user: {email: "", password: ''}
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
  },
});

export const { increment, decrement } = hospitalitySlice.actions;

export const selectCount = (state) => state.hospitality.value;

export default hospitalitySlice.reducer;
