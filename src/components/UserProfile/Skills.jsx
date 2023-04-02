import React from "react";

const Skills = (props) => {
  const { isEdit, userData, errors } = props;

  return (
    <div className="form-group">
      <label htmlFor="skills">Your skills:</label>
      <textarea
        id="skills"
        className="form-control userProfileEachResult"
        name="skills"
        placeholder="e.g. strong knife skill"
        disabled={!isEdit}
        value={userData.skills}
      ></textarea>
      {errors.skills && (
        <div className="alert alert-danger" role="alert">
          {errors.skills}
        </div>
      )}
    </div>
  );
};

export default Skills;
