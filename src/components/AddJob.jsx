import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addJobListing,
  selectCurrentUserId,
} from "../features/hospitality/hospitalitySlice";
import { randomId } from "../utils";
import { validate } from "../validation/joi";
import "./AddJob.css";

const AddJob = () => {
  const dispatch = useDispatch();
  const [postJob, setPostJob] = useState({});
  const [errors, setErrors] = useState({});
  const currentUserId = useSelector(selectCurrentUserId);
  // console.log(errors);
  const onJobPost = (e) => {
    setPostJob({ ...postJob, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const result = await validate("addJob", postJob);
    if (result === true) {
      postJob.id = randomId();
      postJob.currentUserId = currentUserId;
      dispatch(addJobListing(postJob));
    } else {
      setErrors(result);
    }
  };

  return (
    <>
      <h1>Job details</h1>
      <p>Please be as detailed as possible describing the job opening:</p>
      <main className=" mt-5 d-flex  justify-content-center">
        <form onInput={onJobPost} onSubmit={onSubmit}>
          <div className="row mb-2"></div>
          <div className="row mb-2">
            <div className="col-md-6">
              <label>Job title: </label>
              <input
                name="title"
                type="text"
                className="form-control"
                placeholder="Job title"
              />
              {errors.title && (
                <div className="alert alert-danger">
                  {" "}
                  Job title is required{" "}
                </div>
              )}
            </div>

            <div className="col-md-4">
              <label>Select duration:</label>
              <select name="contract" className="form-control">
                <option>Select option</option>
                <option>Full-time</option>
                <option>Part-time</option>
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
              <label>Postcode:</label>
              <input
                name="postCode"
                type="text"
                className="form-control"
                placeholder="Postcode"
              />
              {errors.postCode && (
                <div className="alert alert-danger"> PostCode is required </div>
              )}
            </div>

            <div className="col-md-4">
              <label>Business sector:</label>
              <select name="type" className="form-control">
                <option>Select option</option>
                <option value="hotel">Hotel</option>
                <option value="pub">Pub</option>
                <option value="bar">Bar</option>
                <option value="club">Club</option>
                <option value="restaurant">Restaurant</option>
                <option value="catering">Catering</option>
                <option value="takeaway">Take-away</option>
              </select>
              {errors.type && (
                <div className="alert alert-danger">
                  Select a business sector is required
                </div>
              )}
            </div>

            <div className="col-md-10 ">
              <label>Salary: </label>
              <input
                name="salary"
                type="text"
                className="form-control"
                placeholder="Enter salary"
              />
              {errors.salary && (
                <div className="alert alert-danger">
                  {" "}
                  Enter salary required{" "}
                </div>
              )}
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-md-10">
              <label>Business email:</label>
              <input
                name="email"
                type="text"
                className="form-control"
                placeholder="Enter business email"
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
              <label>Business phone number:</label>
              <input
                name="phoneNumber"
                type="text"
                className="form-control"
                placeholder="Enter business phone number"
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
              <label>Job description:</label>
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
          <div className="text-center">
            <button type="submit" className="btn btn-success">
              Post job
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default AddJob;
