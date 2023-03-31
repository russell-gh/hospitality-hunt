import React from "react";

const Type = (props) => {
  const { isEdit, errors, business } = props;

  return (
    <div className="form-group">
      <label htmlFor="type">Type of business: </label>
      {isEdit ? (
        <select
          id="type"
          className="form-control"
          name="type"
          size="7"
          multiple
        >
          <option value="hotel">Hotel</option>
          <option value="pub">Pub</option>
          <option value="bar">Bar</option>
          <option value="club">Club</option>
          <option value="restaurant">Restaurant</option>
          <option value="catering">Catering</option>
          <option value="takeaway">Takeaway</option>
        </select>
      ) : (
        <input
          type="text"
          className="form-control"
          id="type"
          name="type"
          placeholder="00447111111111"
          disabled={!isEdit}
          value={business.type}
        ></input>
      )}
      {errors.position && (
        <div className="alert alert-danger" role="alert">
          {errors.type}
        </div>
      )}
    </div>
  );
};

export default Type;
