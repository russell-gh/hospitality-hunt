import React from "react";

const Position = (props) => {
  const { isEdit, userData, errors } = props;

  return (
    <div className="form-group">
      <label htmlFor="position">Type of position: </label>
      {isEdit ? (
        <select
          id="position"
          className="form-control userProfileEachResult"
          name="position"
          size="6"
          multiple
        >
          <option value="waiter/waitress">Waiter/waitress</option>
          <option value="bartender">Bartender</option>
          <option value="porter">Porter</option>
          <option value="housekeeper">Housekeeper</option>
          <option value="generalManager">General Manager</option>
          <option value="chef">Chef</option>
        </select>
      ) : (
        <input
          type="text"
          className="form-control userProfileEachResult"
          id="position"
          name="position"
          placeholder="00447111111111"
          disabled={!isEdit}
          value={userData.position}
        ></input>
      )}
      {errors.position && (
        <div className="alert alert-danger" role="alert">
          {errors.position}
        </div>
      )}
    </div>
  );
};

export default Position;
