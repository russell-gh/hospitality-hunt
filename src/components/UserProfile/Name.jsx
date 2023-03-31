import React from "react";

const Name = (props) => {
  const { isEdit, userData, errors } = props;
  return (
    <>
      <div>
        <label htmlFor="firstName">First name: </label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          name="firstName"
          placeholder="e.g. Sam"
          value={userData.firstName}
          disabled={!isEdit}
        />
        {errors.firstName && (
          <div className="alert alert-danger" role="alert">
            {errors.firstName}
          </div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="secondName">Last name: </label>
        <input
          type="text"
          className="form-control"
          id="secondName"
          name="secondName"
          placeholder="e.g. Smith"
          value={userData.secondName}
          disabled={!isEdit}
        />
        {errors.secondName && (
          <div className="alert alert-danger" role="alert">
            {errors.secondName}
          </div>
        )}
      </div>
    </>
  );
};

export default Name;
