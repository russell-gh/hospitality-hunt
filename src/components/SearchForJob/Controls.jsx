import React, { useState } from "react";
import { useSelector } from "react-redux";

import { selectJobListings } from "../../features/hospitality/hospitalitySlice";
// import Results from "./Results";

const Controls = () => {
  const JobListings = useSelector(selectJobListings);
  const [userInput, setUserInput] = useState("");
  const [userSelect, setUserSelect] = useState("Type");
  const [contractButtonSelect, setContractButtonSelect] = useState("Any");

  if (!JobListings) {
    return <p>Loading...</p>;
  }

  let filtered = [...JobListings];
  if (userSelect === "Type") {
    filtered = filtered.filter((JobListing) => {
      return JobListing.Type.toLowerCase().includes(userInput.toLowerCase());
    });
  } else if (userSelect === "Title") {
    filtered = filtered.filter((JobListing) => {
      return JobListing.Title.toLowerCase().includes(userInput.toLowerCase());
    });
  } else if (userSelect === "Postcode") {
    filtered = filtered.filter((JobListing) => {
      return JobListing.Postcode.toLowerCase().includes(
        userInput.toLowerCase()
      );
    });
  }
  if (contractButtonSelect === "Full-time") {
    filtered = filtered.filter((JobListing) => {
      return JobListing.Contract.includes(contractButtonSelect);
    });
  } else if (contractButtonSelect === "Part-time") {
    filtered = filtered.filter((JobListing) => {
      return JobListing.Contract.includes(contractButtonSelect);
    });
  } else if (contractButtonSelect === "Any") {
    filtered = filtered.filter((JobListing) => {
      return JobListing;
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
            <option value="Type">Type</option>
            <option value="Title">Title</option>
            <option value="Postcode">Postcode</option>
          </select>
        </label>
      </div>

      <div className="contractBar">
        <button
          type="radio"
          id="Any"
          name="Contract"
          value="Any"
          onClick={(e) => setContractButtonSelect(e.target.value)}
        >
          Any
        </button>
        <button
          type="radio"
          id="Full-time"
          name="Contract"
          value="Full-time"
          onClick={(e) => setContractButtonSelect(e.target.value)}
        >
          Full-time
        </button>
        <button
          type="radio"
          id="Part-time"
          name="Contract"
          value="Part-time"
          onClick={(e) => setContractButtonSelect(e.target.value)}
        >
          Part-time
        </button>
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
        {filtered.map(
          (job) => {
            const quickViewJob = Object.entries(job);

            return (
              <div className="eachResult">
                {quickViewJob.map((item) => {
                  if (
                    item[0] === "Email" ||
                    item[0] === "Phone" ||
                    item[0] === "id" ||
                    item[0] === "Description"
                  )
                    return;

                  return (
                    <div key={item[0]}>
                      <p>
                        {item[0]}: {item[1]}
                      </p>
                    </div>
                  );
                })}
              </div>
            );
          }

          // <Results
          //   key={item.ID}
          //   business_name={item.business_name}
          //   location={item.location}
          //   business_type={item.business_type}
          //   position={item.position}
          // />
        )}
      </div>
    </>
  );
};

export default Controls;
