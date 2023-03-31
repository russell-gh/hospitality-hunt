import React from "react";

const Experience = (props) => {
  const { isEdit, userData, errors } = props;

  return (
    <div className="form-group">
      <label htmlFor="experience">Your experience in hospitality:</label>
      <textarea
        id="experience"
        className="form-control"
        name="experience"
        placeholder="e.g. two years kitchen management"
        disabled={!isEdit}
        value={userData.experience}
      ></textarea>
      {errors.experience && (
        <div className="alert alert-danger" role="alert">
          {errors.experience}
        </div>
      )}
    </div>
  );
};

export default Experience;
