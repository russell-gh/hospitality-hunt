import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectJobListing } from "../../features/hospitality/hospitalitySlice";
// import Results from "./Results";

const Controls = () => {
  const businesses = useSelector(selectJobListing);
  const [userInput, setUserInput] = useState("");
  const [userSelect, setUserSelect] = useState("Location");

  if (!businesses) {
    return <p>Loading...</p>;
  }

  let filtered = businesses;
  // if (userSelect === "Location") {
  //   filtered = businesses.filter((businesses) => {
  //     return businesses.location
  //       .toLowerCase()
  //       .includes(userInput.toLowerCase());
  //   });
  // } else if (userSelect === "Job-type") {
  //   filtered = businesses.filter((businesses) => {
  //     return businesses.business_type
  //       .toLowerCase()
  //       .includes(userInput.toLowerCase());
  //   });
  // } else {
  //   filtered = businesses.filter((businesses) => {
  //     return businesses.position
  //       .toLowerCase()
  //       .includes(userInput.toLowerCase());
  //   });
  // }

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
        {filtered.map(
          (item) => {
            const quickViewJob = Object.entries(item);

            return quickViewJob.map((item) => {
              return (
                <div>
                  <p>
                    {item[0]}: {item[1]}
                  </p>
                </div>
              );
            });
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
