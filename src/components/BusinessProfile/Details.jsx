import React from "react";

const Details = (props) => {
  const { isEdit, errors, business } = props;

  return (
    <div className="form-group">
      <label htmlFor="details">Details about your business:</label>
      <textarea
        id="details"
        className="form-control"
        name="details"
        placeholder="Information about your business"
        disabled={!isEdit}
        value={business.details}
      ></textarea>
      {errors.details && (
        <div className="alert alert-danger" role="alert">
          {errors.details}
        </div>
      )}
    </div>
  );
};

export default Details;
