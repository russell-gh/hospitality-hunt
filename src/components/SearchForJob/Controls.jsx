import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectJobListings } from "../../features/hospitality/hospitalitySlice";
import Results from "./Results";

const Controls = () => {
  const businesses = useSelector(selectJobListings);
  const [userInput, setUserInput] = useState("");
  const [userSelect, setUserSelect] = useState("Location");

  if (!businesses) {
    return <p>Loading...</p>;
  }

  let filtered = businesses;
  if (userSelect === "Location") {
    filtered = businesses.filter((businesses) => {
      return businesses.location
        .toLowerCase()
        .includes(userInput.toLowerCase());
    });
  } else if (userSelect === "Job-type") {
    filtered = businesses.filter((businesses) => {
      return (
        businesses.business_type.toLowerCase().includes(userInput) ||
        businesses.business_type.toUpperCase().includes(userInput)
      );
    });
  } else {
    filtered = businesses.filter((businesses) => {
      return (
        businesses.position.toLowerCase().includes(userInput) ||
        businesses.position.toUpperCase().includes(userInput)
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
