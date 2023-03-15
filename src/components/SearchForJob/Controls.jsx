import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectJob } from "../../features/hospitality/hospitalitySlice";
import Results from "./Results";

const Controls = () => {
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
      <h1>Search for a job</h1>
      <div className="controlBar">
        <label>
          Search by:
          <select
            onChange={(e) => {
              setUserSelect(e.target.value);
            }}
          >
            <option value="Location">Location</option>
            <option value="Job-type">Job type</option>
            <option value="Position">Position</option>
          </select>
        </label>
      </div>
      <div className="inputBar">
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
          <Results
            key={item.ID}
            business_name={item.business_name}
            location={item.location}
            business_type={item.business_type}
            position={item.position}
          />
        ))}
      </div>
    </>
  );
};

export default Controls;
