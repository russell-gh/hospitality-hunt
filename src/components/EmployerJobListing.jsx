import React from "react";
import { selectJobListings } from "../features/hospitality/hospitalitySlice";
import { useSelector } from "react-redux";
import { selectLastAddedJobId } from "../features/hospitality/hospitalitySlice";
import { setScreenMode } from "../features/hospitality/hospitalitySlice";
import { useDispatch } from "react-redux";

const EmployerJobListing = () => {
  const dispatch = useDispatch();
  const jobListings = useSelector(selectJobListings);

  return (
    <main className="container  text-center ">
      <h1>Job Listings</h1>
      <div className="job-details my-3">
        <button type="button" className="btn btn-danger btn-lg">
          X
        </button>
      </div>
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
