import React, { useState } from "react";
import {
  selectJobListings,
  selectCurrentUserId,
  editJobData,
  setScreenMode,
  setDeleteJob,
} from "../features/hospitality/hospitalitySlice";
import { useSelector, useDispatch } from "react-redux";
import "./EmployerJobListing.css";
import axios from "axios";
import { apiURL } from "../config";

const EmployerJobListing = () => {
  const dispatch = useDispatch();
  const currentUserId = useSelector(selectCurrentUserId);
  const jobListings = useSelector(selectJobListings);
  const [isEdit, setIsEdit] = useState(false);
  const [jobId, setJobId] = useState();
  const [editJob, setEditJob] = useState({});

  const onEdit = (id) => {
    setJobId(id);
    setIsEdit(true);
  };

  const onJobEdit = (e) => {
    const index = jobListings.findIndex((job) => job.id === jobId);
    const currentJob = jobListings[index];
    setEditJob({ ...currentJob, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(editJobData(editJob));
    setIsEdit(false);
  };

  const deleteJob = (job) => {
    console.log(job.id);
    dispatch(setDeleteJob(job));
    axios.delete(`${apiURL}/deleteJobListing/${job.id}`);
  };

  const currentUserJobs = jobListings.filter(
    (job) => job.currentUserId === currentUserId
  );
  return (
    <>
      <h1 className="jobListingsTitle">Job listings</h1>
      {currentUserJobs.map((job) => (
        <div key={job.id} className="job-details">
          {isEdit && jobId === job.id ? (
            <form
              className="eachJobListings"
              onInput={onJobEdit}
              onSubmit={onSubmit}
              style={{ background: "white" }}
            >
              <label>Contract</label>
              <select
                name="contract"
                className="form-control jobListingsEachInput"
              >
                <option>Select Option</option>
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Contract</option>
              </select>
              <label>Business Sector</label>
              <select name="type" className="form-control jobListingsEachInput">
                <option value="hotel">Hotel</option>
                <option value="pub">Pub</option>
                <option value="bar">Bar</option>
                <option value="club">Club</option>
                <option value="restaurant">Restaurant</option>
                <option value="catering">Catering</option>
                <option value="takeaway">Takeaway</option>
              </select>
              <label>Job Title</label>
              <input
                name="title"
                type="text"
                className="form-control jobListingsEachInput"
                placeholder="Job Title"
              />
              <label>Job Description</label>
              <textarea
                name="description"
                className="form-control"
                rows="5"
              ></textarea>
              <div className="text-center">
                <button
                  onClick={() => setIsEdit(false)}
                  type="button"
                  className="btn btn-secondary jobListingsCancel"
                >
                  cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-success jobListingsSave"
                >
                  save
                </button>
              </div>
            </form>
          ) : (
            <>
              <form className="eachJobListings">
                <div>
                  <p>Contract: {job.contract}</p>
                  <p>Type: {job.type}</p>
                  <p>Title: {job.title}</p>
                  <p>Description: {job.description}</p>
                </div>
                <div className="text-center">
                  <button
                    onClick={() => {
                      deleteJob(job);
                    }}
                    type="button"
                    className="btn btn-danger jobListingsX"
                  >
                    x
                  </button>
                  <button
                    onClick={() => onEdit(job.id)}
                    type="button"
                    className="btn btn-secondary jobListingsEdit"
                  >
                    Edit
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      ))}

      <div className="text-center">
        <button
          onClick={() => {
            dispatch(setScreenMode(6));
          }}
          type="button"
          className="btn btn-success jobListingsAdd btn-lg"
        >
          Add new job
        </button>
      </div>
    </>
  );
};

export default EmployerJobListing;
