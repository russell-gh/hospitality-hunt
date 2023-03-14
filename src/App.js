import React from "react";
import { useSelector, useDispatch } from "react-redux";
import JobPosting from "./components/jobPosting";
import {
  selectCount,
  increment,
  decrement,
} from "./features/hospitality/hospitalitySlice";

export default function App() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <JobPosting />
      </div>
    </div>
  );
}
