import React, { useState } from "react";
import {
  selectJobListings,
  selectCurrentUserId,
  editJobData,
} from "../features/hospitality/hospitalitySlice";
import { useSelector } from "react-redux";
import {
  setScreenMode,
  setDeleteJob,
} from "../features/hospitality/hospitalitySlice";
import { useDispatch } from "react-redux";

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

  const currentUserJobs = jobListings.filter(
    (job) => job.currentUserId === currentUserId
  );
  return (
    <main className="container  text-center ">
      <h1>Job Listings</h1>
      {currentUserJobs.map((job) => (
        <div key={job.id} className="job-details my-3">
          {isEdit && jobId === job.id ? (
            <form
              onInput={onJobEdit}
              onSubmit={onSubmit}
              style={{ background: "white" }}
            >
              <label>Contract</label>
              <select name="contract" className="form-control">
                <option>Select Option</option>
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Contract</option>
              </select>
              <label>Business Sector</label>
              <select name="type" className="form-control">
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
                className="form-control"
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
                  className="btn btn-danger btn-lg"
                >
                  cancel
                </button>
                <button type="submit" className="btn btn-success btn-lg">
                  save
                </button>
              </div>
            </form>
          ) : (
            <>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{job.contract}</li>
                <li className="list-group-item">{job.type}</li>
                <li className="list-group-item">{job.title}</li>
                <li className="list-group-item">{job.description}</li>
              </ul>
              <div className="d-flex">
                <button
                  onClick={() => {
                    dispatch(setDeleteJob(job));
                  }}
                  type="button"
                  className="btn btn-danger btn-lg"
                >
                  X
                </button>
                <button
                  onClick={() => onEdit(job.id)}
                  type="button"
                  className="btn btn-success btn-lg"
                >
                  {" "}
                  edit
                </button>
              </div>
            </>
          )}
        </div>
      ))}

      <button
        onClick={() => {
          dispatch(setScreenMode(6));
        }}
        type="button"
        className="btn btn-success btn-lg  "
      >
        Add New Job
      </button>
    </main>
  );
};

export default EmployerJobListing;
