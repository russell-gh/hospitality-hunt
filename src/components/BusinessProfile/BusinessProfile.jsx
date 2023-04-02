import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBusinesses,
  selectCurrentUserId,
  editedBusinessData,
} from "../../features/hospitality/hospitalitySlice";
import "./BusinessProfile.css";
import { validate } from "../../validation/joi";
import Name from "./Name";
import Type from "./Type";
import Email from "./Email";
import PhoneNumber from "./PhoneNumber";

const BusinessProfile = () => {
  const dispatch = useDispatch();
  const businesses = useSelector(selectBusinesses);
  const currentUserId = useSelector(selectCurrentUserId);
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
      <div className="businessProfileContainer">
        <h1 className="businessProfileTitle">Your profile</h1>
        <form
          className="businessProfile"
          onInput={onInput}
          onSubmit={submitData}
        >
          <Name isEdit={isEdit} errors={errors} business={business} />
          <Type isEdit={isEdit} errors={errors} business={business} />
          <Email />
          <PhoneNumber isEdit={isEdit} errors={errors} business={business} />

          <div className="businessProfileButtons form-group">
            {isEdit ? (
              <>
                <button
                  type="submit"
                  className="btn btn-success businessProfileSubmit"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-secondary businessProfileCancel"
                  onClick={cancelClick}
                >
                  Cancel
                </button>
              </>
            ) : (
              <div
                className="btn btn-secondary businessProfileEdit"
                onClick={() => setIsEdit(true)}
              >
                Edit profile
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default BusinessProfile;
