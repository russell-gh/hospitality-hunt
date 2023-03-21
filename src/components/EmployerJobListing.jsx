import React, { useState } from "react";
import { selectJobListings } from "../features/hospitality/hospitalitySlice";
import { useSelector } from "react-redux";
import { setScreenMode } from "../features/hospitality/hospitalitySlice";
import { useDispatch } from "react-redux";

const EmployerJobListing = () => {
  const dispatch = useDispatch();
  const jobListings = useSelector(selectJobListings);
  console.log(jobListings);
  return (
    <main className="container  text-center ">
      <h1>Job Listings</h1>
      {jobListings.map((job) => (
        <div key={job.id} className="job-details my-3">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{job.contract}</li>
            <li className="list-group-item">{job.type}</li>
            <li className="list-group-item">{job.title}</li>
            <li className="list-group-item">{job.description}</li>
          </ul>
          <button type="button" className="btn btn-danger btn-lg">
            X
          </button>
        </div>
      ))}

      <button
        onClick={() => {
          dispatch(setScreenMode(6));
        }}
        type="button"
        className="btn btn-primary btn-lg  "
      >
        Add New Job
      </button>
    </main>
  );
};

export default EmployerJobListing;
