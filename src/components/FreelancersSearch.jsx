import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCount } from "../features/hospitality/hospitalitySlice";

const FreelancersSearch = () => {
  const users = useSelector(selectCount);
  const [userInput, setUserInput] = useState("");
  const [userSelect, setUserSelect] = useState("");

  if (!users) {
    return <p>Loading...</p>;
  }

  let filtered = users;
  if (userSelect === "Location") {
    filtered = users.filter((users) => {
      return (
        users.location.toLowerCase().includes(userInput) ||
        users.location.toUpperCase().includes(userInput)
      );
    });
  } else if (userSelect === "Job-type") {
    filtered = users.filter((users) => {
      return (
        users.business_type.toLowerCase().includes(userInput) ||
        users.business_type.toUpperCase().includes(userInput)
      );
    });
  } else {
    filtered = users.filter((users) => {
      return (
        users.position.toLowerCase().includes(userInput) ||
        users.position.toUpperCase().includes(userInput)
      );
    });
  }

  return (
    <>
      {/* <div>
        <label>I'm looking for:</label>
        <select>
          <option>Job</option>
          <option>Freelancer</option>
        </select>
      </div> */}

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
              <p>{item.business_name}</p>
              <p>{item.location}</p>
              <p>{item.business_type}</p>
              <p>{item.position}</p>
              <p>{item.email}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default FreelancersSearch;
