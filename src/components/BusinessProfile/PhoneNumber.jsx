import React from "react";

const PhoneNumber = (props) => {
  const { isEdit, errors, business } = props;

  return (
    <div className="form-group businessProfileEachResult">
      <label htmlFor="phoneNumber">Phone number: </label>
      <input
        type="number"
        className="form-control"
        id="phoneNumber"
        name="phoneNumber"
        disabled={!isEdit}
        value={business.phoneNumber}
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
