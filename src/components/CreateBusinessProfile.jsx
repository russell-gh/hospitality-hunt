import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBusiness } from "../features/hospitality/hospitalitySlice";
import { validate } from "../validation/joi";
import "./createBusinsessProfile.css";
import { randomId } from "../utils";

const BusinessProfile = (props) => {
  const dispatch = useDispatch();
  const [businessData, setBusinessData] = useState({});
  const [errors, setErrors] = useState({});

  const onAddBusiness = (e) => {
    setBusinessData({ ...businessData, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    businessData.currentUserId = randomId();
    dispatch(addBusiness(businessData));
  };

  return (
    <div className="html">
      <h1>Business profile</h1>
      <p>Please fill in the information below:</p>
      <form
        className="createBusinessProfile"
        onInput={onAddBusiness}
        onSubmit={onSubmit}
      >
        <div className="form-group">
          <label htmlFor="businessName">Business name: </label>
          <input
            type="text"
            className="form-control"
            id="businesstName"
            name="businesstName"
            placeholder="Business name"
          />
          {errors.busineesName && (
            <div className="alert alert-danger" role="alert">
              {errors.businessName}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="businessNumber">Businees number : </label>
          <input
            type="number"
            className="form-control"
            id="businessNumber"
            name="businessNumber"
            placeholder="00447111111111"
          ></input>
          {errors.businessNumber && (
            <div className="alert alert-danger" role="alert">
              {errors.businessNumber}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="postcode">Postcode: </label>
          <input
            type="text"
            className="form-control"
            id="postcode"
            name="postcode"
            placeholder="SW1A 2AA"
          />
          {errors.postcode && (
            <div className="alert alert-danger" role="alert">
              {errors.postcode}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="position">Type of position: </label>
          <select
            id="businessType"
            className="form-control"
            name="businessType"
            size="6"
            multiple
          >
            <option value="hotel">Hotel</option>
            <option value="cleaning">Cleaning</option>
            <option value="carwash">car Detailer</option>
            <option value="restaurant">Restaurant</option>
            <option value="cater">Catering</option>
          </select>
          {errors.businessType && (
            <div className="alert alert-danger" role="alert">
              {errors.businessType}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="yourBusiness">
            Please provide some details about your business:
          </label>
          <textarea
            id="yourBusiness"
            className="form-control"
            name="yourbusiness"
            placeholder="Information about your business"
          ></textarea>
          {errors.yourBusiness && (
            <div className="alert alert-danger" role="alert">
              {errors.yourBusiness}
            </div>
          )}
        </div>

        {/* asjkdbfkjdsa */}

        <div className="form-group">
          <input type="submit" className="btn btn-success" />
        </div>
      </form>
    </div>
  );
};

export default BusinessProfile;
