import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addJobListing } from "../features/hospitality/hospitalitySlice";
import { randomId } from "../utils";
import { validate } from "../validation/joi";

const AddJob = () => {
  const dispatch = useDispatch();
  const [postJob, setPostJob] = useState({});
  const [errors, setErrors] = useState({});
  console.log(errors);
  const onJobPost = (e) => {
    setPostJob({ ...postJob, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const result = await validate("addJob", postJob);
    if (result === true) {
      postJob.ID = randomId();
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
            <label>Job Title</label>
            <input
              name="jobtitle"
              type="text"
              className="form-control"
              placeholder="Job Title"
            />
            <p>{errors.jobtitle}</p>
          </div>

          <div className="col-md-4">
            <label>Select Duration</label>
            <select name="jobduration" className="form-control">
              <option>Full-Time</option>
              <option>Part-Time</option>
              <option>Contract</option>
            </select>
            <p>{errors.jobduration}</p>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-6">
            <label>PostCode</label>
            <input
              name="postcode"
              type="text"
              className="form-control"
              placeholder="PostCode"
            />
          </div>

          <div className="col-md-4">
            <label>Business Sector</label>
            <select name="businesssector" className="form-control">
              <option>Restaurant</option>
              <option>Bar</option>
              <option>Hotel</option>
              <option>Night-Club</option>
              <option>Cinema</option>
            </select>
          </div>

          <div className="col-md-10 ">
            <label>Salary Range</label>
            <select name="salaryrange" className="form-control">
              <option>Full-Time</option>
              <option>Part-Time</option>
              <option>Contract</option>
            </select>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-10">
            <label>Business Email</label>
            <input
              name="businessemail"
              type="text"
              className="form-control"
              placeholder="Business Email"
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-10">
            <label>Business Phone Number</label>
            <input
              name="businessphone"
              type="text"
              className="form-control"
              placeholder="Phone Numer"
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-10">
            <label>Job Description</label>
            <textarea
              name="jobdescription"
              className="form-control"
              rows="5"
            ></textarea>
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
