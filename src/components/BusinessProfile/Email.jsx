import React from "react";
import { selectUser } from "../../features/hospitality/hospitalitySlice";
import { useSelector } from "react-redux";

const Email = () => {
  const user = useSelector(selectUser);

  return (
    <div className="form-group">
      <label htmlFor="email">Email: </label>
      <input
        type="text"
        className="form-control"
        id="email"
        name="email"
        disabled
        value={user.email}
      ></input>
    </div>
  );
};

export default Email;
