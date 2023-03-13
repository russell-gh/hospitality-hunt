import React, { useState } from "react";

const JobPosting = () => {
  const [input, Setinput] = useState();

  const onInput = (e) => {
    Setinput({ ...input, [e.tartget.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container mt-5">
      <form onInput={onInput} onSubmit={onSubmit}>
        <div className="row mb-2">
          <h5>Job Details</h5>
          <p>
            Please add as much detailed as possible describing the job opening.
          </p>
        </div>
        <div className="row mb-2">
          <div className="col-md-6">
            <label>Job Title</label>
            <input
              name="jobTitle"
              type="text"
              className="form-control"
              placeholder="Job Title"
            />
          </div>

          <div className="col-md-4">
            <label>Select Duration</label>
            <select name="jobDuration" className="form-control">
              <option>Full-Time</option>
              <option>Part-Time</option>
              <option>Contract</option>
            </select>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-10">
            <label>Location</label>
            <input
              name="jobLocation"
              type="text"
              className="form-control"
              placeholder="Enter Job Location"
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-10">
            <label>Job Description</label>
            <textarea
              name="jobDescription"
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

export default JobPosting;
