import React from "react";
import { useDispatch } from "react-redux";

const Data = (props) => {
  const { data } = props;

  const dispatch = useDispatch();

  return (
    <>
      <nav>
        <div className="logo"></div>
        <ul></ul>
      </nav>
      <form className="label"></form>

      <button>SUBMIT</button>
    </>
  );
};

export default Data;
