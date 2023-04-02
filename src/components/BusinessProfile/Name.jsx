import React from "react";

const Name = (props) => {
  const { isEdit, errors, business } = props;
  return (
    <div className="form-group businessProfileEachResult">
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        className="form-control"
        id="name"
        name="name"
        value={business.name}
        disabled={!isEdit}
      />
      {errors.name && (
        <div className="alert alert-danger" role="alert">
          {errors.name}
        </div>
      )}
    </div>
  );
};

export default Name;
