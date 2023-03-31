import React from "react";
import { setScreenMode } from "../../features/hospitality/hospitalitySlice";
import { useDispatch } from "react-redux";

const ButtonSet1 = () => {
  const dispatch = useDispatch();

  return (
    <>
      <li className="nav-item justify-content-end">
        <button
          className="nav-link"
          onClick={() => {
            dispatch(setScreenMode(8));
          }}
        >
          Job search
        </button>
      </li>
      <li className="nav-item justify-content-end">
        <button
          className="nav-link"
          onClick={() => {
            dispatch(setScreenMode(12));
          }}
        >
          Your profile
        </button>
      </li>
    </>
  );
};

export default ButtonSet1;
