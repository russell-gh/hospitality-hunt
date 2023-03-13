import { configureStore } from '@reduxjs/toolkit';
import hospitalityReducer from '../features/hospitality/hospitalitySlice';

export const store = configureStore({
  reducer: {
    hospitality: hospitalityReducer,
  },
});
