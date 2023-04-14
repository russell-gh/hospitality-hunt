import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBusiness } from "../features/hospitality/hospitalitySlice";
import { validate } from "../validation/joi";
import "./createBusinsessProfile.css";
import { randomId } from "../utils";
import axios from "axios";
import { apiURL } from "../config";

const BusinessProfile = (props) => {
  const dispatch = useDispatch();
  const [businessData, setBusinessData] = useState({});
  const [errors, setErrors] = useState({});

  const onInput = (e) => {
    const newBusinessData = { ...businessData, [e.target.id]: e.target.value };
    setBusinessData(newBusinessData);
    validateBusinessDate(newBusinessData);
  };

  const validateBusinessDate = async (newBusinessData) => {
    const result = await validate("createBusinessProfile", newBusinessData);
    setErrors(result);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (errors === true) {
      businessData.id = randomId();
      dispatch(addBusiness(businessData));
      axios.post(`${apiURL}/createBusiness`, businessData);
    }
  };

  return (
    <div className="html createBusinessProfileContainer">
      <h1>Create your business profile</h1>
      <p>Please fill in the information below:</p>
      <form
        className="createBusinessProfile"
        onInput={onInput}
        onSubmit={onSubmit}
      >
        <div className="form-group">
          <label htmlFor="name">Business name: </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Name"
          />
          {errors.name && (
            <div className="alert alert-danger" role="alert">
              {errors.name}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone number: </label>

          <input
            type="number"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone number"
          ></input>
          {errors.phoneNumber && (
            <div className="alert alert-danger" role="alert">
              {errors.phoneNumber}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="type">Type of business: </label>
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
          {errors.type && (
            <div className="alert alert-danger" role="alert">
              {errors.type}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="details">
            Please provide some details about your business:
          </label>
          <textarea
            id="details"
            className="form-control"
            name="details"
            placeholder="Information about your business"
          ></textarea>
          {errors.details && (
            <div className="alert alert-danger" role="alert">
              {errors.details}
            </div>
          )}
        </div>

        <div className="text-center">
          <input
            type="submit"
            className="btn btn-success createBusinessProfileSubmit"
          />
        </div>
      </form>
    </div>
  );
};

export default BusinessProfile;
