import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  selectCount,
  increment,
  decrement,
} from "./features/hospitality/hospitalitySlice";
import UserProfiles from "./components/UserProfiles";

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
      <UserProfiles />
    </div>
  );
}
