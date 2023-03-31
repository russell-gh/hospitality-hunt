import React from "react";

const AboutYou = (props) => {
  const { isEdit, userData, errors } = props;

  return (
    <div className="form-group">
      <label htmlFor="aboutYou">About you:</label>
      <textarea
        id="aboutYou"
        className="form-control"
        name="aboutYou"
        placeholder="Introduce yourself"
        disabled={!isEdit}
        value={userData.aboutYou}
      ></textarea>
      {errors.aboutYou && (
        <div className="alert alert-danger" role="alert">
          {errors.aboutYou}
        </div>
      )}
    </div>
  );
};

export default AboutYou;
