import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addJobListing,
  selectCurrentUserId,
} from "../features/hospitality/hospitalitySlice";
import { randomId } from "../utils";
import { validate } from "../validation/joi";

const AddJob = () => {
  const dispatch = useDispatch();
  const [postJob, setPostJob] = useState({});
  const [errors, setErrors] = useState({});
  const currentUserId = useSelector(selectCurrentUserId);
  console.log(errors);
  const onJobPost = (e) => {
    setPostJob({ ...postJob, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const result = await validate("addJob", postJob);
    if (result === true) {
      postJob.id = randomId();
      postJob.userId = currentUserId;
      dispatch(addJobListing(postJob));
    } else {
      setErrors(result);
    }
  };

  return (
    <div className="container mt-5">
      <form onInput={onJobPost} onSubmit={onSubmit}>
        <div className="row mb-2">
          <h5>Job Details</h5>
          <p>Please be detailed as possible describing the job opening.</p>
        </div>
        <div className="row mb-2">
          <div className="col-md-6">
            <label>Job Title </label>
            <input
              name="title"
              type="text"
              className="form-control"
              placeholder="Job Title"
            />
            {errors.title && (
              <div className="alert alert-danger"> Job title is required </div>
            )}
          </div>

          <div className="col-md-4">
            <label>Select Duration</label>
            <select name="contract" className="form-control">
              <option>Select Option</option>
              <option>Full-Time</option>
              <option>Part-Time</option>
              <option>Contract</option>
            </select>
            {errors.contract && (
              <div className="alert alert-danger">
                {" "}
                Select job duration is required{" "}
              </div>
            )}
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-6">
            <label>PostCode</label>
            <input
              name="postCode"
              type="text"
              className="form-control"
              placeholder="PostCode"
            />
            {errors.postCode && (
              <div className="alert alert-danger"> PostCode is required </div>
            )}
          </div>

          <div className="col-md-4">
            <label>Business Sector</label>
            <select name="type" className="form-control">
              <option>Select Option</option>
              <option>Restaurant</option>
              <option>Bar</option>
              <option>Hotel</option>
              <option>Night-Club</option>
              <option>Cinema</option>
            </select>
            {errors.type && (
              <div className="alert alert-danger">
                Select a business sector is required
              </div>
            )}
          </div>

          <div className="col-md-10 ">
            <label>Salary </label>
            <input
              name="salary"
              type="text"
              className="form-control"
              placeholder="Enter Salary"
            />
            {errors.salary && (
              <div className="alert alert-danger"> Enter salary required </div>
            )}
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-10">
            <label>Business Email</label>
            <input
              name="email"
              type="text"
              className="form-control"
              placeholder="Enter Business Email"
            />
            {errors.email && (
              <div className="alert alert-danger">
                Business email is required
              </div>
            )}
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-10">
            <label>Business Phone Number</label>
            <input
              name="phoneNumber"
              type="text"
              className="form-control"
              placeholder="Enter Business Phone Numer"
            />
            {errors.phoneNumber && (
              <div className="alert alert-danger">
                Business phone number is required
              </div>
            )}
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-10">
            <label>Job Description</label>
            <textarea
              name="description"
              className="form-control"
              rows="5"
            ></textarea>
            {errors.description && (
              <div className="alert alert-danger">
                Job description is required
              </div>
            )}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Post Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;
