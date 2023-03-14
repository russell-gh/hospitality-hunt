import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectJob } from "../features/hospitality/hospitalitySlice";

const SearchForJob = () => {
  const job = useSelector(selectJob);
  const [userInput, setUserInput] = useState("");
  const [userSelect, setUserSelect] = useState("");

  if (!job) {
    return <p>Loading...</p>;
  }

  let filtered = job;
  if (userSelect === "Location") {
    filtered = job.filter((job) => {
      return (
        job.location.toLowerCase().includes(userInput) ||
        job.location.toUpperCase().includes(userInput)
      );
    });
  } else if (userSelect === "Job-type") {
    filtered = job.filter((job) => {
      return (
        job.business_type.toLowerCase().includes(userInput) ||
        job.business_type.toUpperCase().includes(userInput)
      );
    });
  } else {
    filtered = job.filter((job) => {
      return (
        job.position.toLowerCase().includes(userInput) ||
        job.position.toUpperCase().includes(userInput)
      );
    });
  }

  return (
    <>
      <div>
        <label>Search by:</label>
        <select
          onChange={(e) => {
            setUserSelect(e.target.value);
          }}
        >
          <option value="Location">Location</option>
          <option value="Job-type">Job type</option>
          <option value="Position">Position</option>
        </select>
      </div>

      <div>
        <input
          onInput={(e) => {
            setUserInput(e.target.value);
          }}
          type="text"
          placeholder="Search for a job"
        ></input>
      </div>

      <div>
        {filtered.map((item) => (
          <>
            <div className="eachJob" key={item.ID}>
              <h1>{item.business_name}</h1>
              <p>Location: {item.location}</p>
              <p>Type: {item.business_type}</p>
              <p>Position: {item.position}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default SearchForJob;
