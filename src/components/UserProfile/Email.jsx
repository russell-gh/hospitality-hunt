import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/hospitality/hospitalitySlice";

const Email = () => {
  const user = useSelector(selectUser);

  return (
    <div className="form-group">
      <label htmlFor="email">Email: </label>
      <input
        type="text"
        className="form-control userProfileEachResult"
        id="email"
        name="email"
        disabled
        value={user.email}
      ></input>
    </div>
  );
};

export default Email;
