import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBusinesses,
  selectCurrentUserId,
  editedBusinessData,
  selectUser,
} from "../../features/hospitality/hospitalitySlice";
import "./BusinessProfile.css";
import { validate } from "../../validation/joi";

const BusinessProfile = () => {
  const dispatch = useDispatch();
  const businesses = useSelector(selectBusinesses);
  const currentUserId = useSelector(selectCurrentUserId);
  const user = useSelector(selectUser);
  const business = businesses.find((item) => {
    return item.id === currentUserId;
  });
  const [businessData, setBusinessData] = useState(business);
  const [errors, setErrors] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  const onInput = (e) => {
    let newInputData = [];
    if (e.target.name === "type") {
      var options = e.target.options;
      var values = [];
      for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
          values.push(options[i].value);
        }
      }
      newInputData = { ...businessData, [e.target.id]: values };
    } else {
      newInputData = { ...businessData, [e.target.id]: e.target.value };
    }
    setBusinessData(newInputData);
    validateData(newInputData);
  };

  const validateData = async (newInputData) => {
    const result = await validate("businessProfile", newInputData);
    setErrors(result);
  };

  const submitData = async (e) => {
    e.preventDefault();
    if (errors === true) {
      console.log(errors);
      dispatch(editedBusinessData(businessData));
      setIsEdit(false);
    }
  };

  const cancelClick = () => {
    setBusinessData(business);
    setIsEdit(false);
  };

  return (
    <div className="html">
      <h1 className="businessProfileTitle">Your profile</h1>

      <form className="businessProfile" onInput={onInput} onSubmit={submitData}>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={businessData.name}
            disabled={!isEdit}
          />
          {errors.name && (
            <div className="alert alert-danger" role="alert">
              {errors.name}
            </div>
          )}
        </div>

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

        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            disabled
            value={user.email}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone number: </label>
          <input
            type="number"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            disabled={!isEdit}
            value={businessData.phoneNumber}
          ></input>
          {errors.phoneNumber && (
            <div className="alert alert-danger" role="alert">
              {errors.phoneNumber}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="details">Details about your business:</label>
          <textarea
            id="details"
            className="form-control"
            name="details"
            placeholder="Information about your business"
            disabled={!isEdit}
            value={businessData.details}
          ></textarea>
          {errors.details && (
            <div className="alert alert-danger" role="alert">
              {errors.details}
            </div>
          )}
        </div>

        <div className="buttons form-group">
          {isEdit ? (
            <>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={cancelClick}
              >
                Cancel
              </button>
            </>
          ) : (
            <div className="btn btn-secondary" onClick={() => setIsEdit(true)}>
              Edit Profile
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default BusinessProfile;
