import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectFreelancers } from "../../features/hospitality/hospitalitySlice";
import Results from "./Results";

const Controls = () => {
  const freelancers = useSelector(selectFreelancers);
  const [userInput, setUserInput] = useState("");
  const [userSelect, setUserSelect] = useState("");

  if (!freelancers) {
    return <p>Loading...</p>;
  }

  let filtered = freelancers;
  if (userSelect === "Location") {
    filtered = freelancers.filter((freelancers) => {
      return (
        freelancers.location.toLowerCase().includes(userInput) ||
        freelancers.location.toUpperCase().includes(userInput)
      );
    });
  } else if (userSelect === "Role") {
    filtered = freelancers.filter((freelancers) => {
      return (
        freelancers.role.toLowerCase().includes(userInput) ||
        freelancers.role.toUpperCase().includes(userInput)
      );
    });
  } else {
    filtered = freelancers.filter((freelancers) => {
      return (
        freelancers.skills.toLowerCase().includes(userInput) ||
        freelancers.skills.toUpperCase().includes(userInput)
      );
    });
  }

  return (
    <>
      <h1>Search For Freelancer</h1>
      <div>
        <label>
          Search by:
          <select
            onChange={(e) => {
              setUserSelect(e.target.value);
            }}
          >
            <option value="Location">Location</option>
            <option value="Job-type">Role</option>
            <option value="Position">Skills</option>
          </select>
        </label>
      </div>
      <div>
        <input
          onInput={(e) => {
            setUserInput(e.target.value);
          }}
          type="text"
          placeholder="Search for a freelancer"
        ></input>
      </div>
      <div>
        {filtered.map((item) => (
          <Results
            key={item.ID}
            freelancer_name={item.freelancer_name}
            location={item.location}
            role={item.role}
            skills={item.skills}
          />
        ))}
      </div>
    </>
  );
};

export default Controls;
