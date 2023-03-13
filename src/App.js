import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Signup from "./components/Signup";
import {
  selectCount,
  increment,
  decrement,
} from "./features/hospitality/hospitalitySlice";

import "./App.css";

export default function App() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
      </div>

      <Signup />
    </div>
  );
}
