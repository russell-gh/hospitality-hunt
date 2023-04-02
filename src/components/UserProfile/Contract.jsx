import React from "react";

const Contract = (props) => {
  const { isEdit, userData, errors } = props;

  return (
    <div className="form-group">
      <label htmlFor="contract">Type of contract: </label>
      {isEdit ? (
        <select
          id="contract"
          className="form-control userProfileEachResult"
          name="contract"
          size="2"
          multiple
        >
          <option value="fullTime">Full-time</option>
          <option value="partTime">Part-time</option>
        </select>
      ) : (
        <input
          type="text"
          className="form-control userProfileEachResult"
          id="contract"
          name="contract"
          placeholder="00447111111111"
          disabled={!isEdit}
          value={userData.contract}
        ></input>
      )}
      {errors.contract && (
        <div className="alert alert-danger" role="alert">
          {errors.contract}
        </div>
      )}
    </div>
  );
};

export default Contract;
