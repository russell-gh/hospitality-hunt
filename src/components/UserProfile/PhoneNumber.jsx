import React from "react";

const PhoneNumber = (props) => {
  const { isEdit, userData, errors } = props;

  return (
    <div className="form-group">
      <label htmlFor="phoneNumber">Phone number: </label>
      <input
        type="number"
        className="form-control"
        id="phoneNumber"
        name="phoneNumber"
        placeholder="0722334456"
        disabled={!isEdit}
        value={userData.phoneNumber}
      ></input>
      {errors.phoneNumber && (
        <div className="alert alert-danger" role="alert">
          {errors.phoneNumber}
        </div>
      )}
    </div>
  );
};

export default PhoneNumber;
