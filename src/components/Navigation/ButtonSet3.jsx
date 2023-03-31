import React from "react";
import { setScreenMode } from "../../features/hospitality/hospitalitySlice";
import { useDispatch } from "react-redux";

const ButtonSet3 = () => {
  const dispatch = useDispatch();
  return (
    <>
      <li className="nav-item justify-content-end">
        <button
          className="nav-link"
          onClick={() => {
            dispatch(setScreenMode(2));
          }}
        >
          Log in
        </button>
      </li>
      <li className="nav-item justify-content-end">
        <button
          className="nav-link"
          onClick={() => {
            dispatch(setScreenMode(1));
          }}
        >
          Sign up
        </button>
      </li>
    </>
  );
};

export default ButtonSet3;
