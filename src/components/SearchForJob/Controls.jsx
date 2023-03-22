import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectJobListings,
  setScreenMode,
} from "../../features/hospitality/hospitalitySlice";

const Controls = () => {
  const jobListings = useSelector(selectJobListings);
  const [userInput, setUserInput] = useState("");
  const [userSelect, setUserSelect] = useState("type");
  const [contractButtonSelect, setContractButtonSelect] = useState("any");
  const inputBox = useRef();
  const dispatch = useDispatch();

  const seeJobDetails = () => {
    dispatch(setScreenMode(9));
  };

  useEffect(() => {
    if (jobListings) inputBox.current.focus();
  }, [jobListings]);

  if (!jobListings) {
    return <p>Loading...</p>;
  }

  let filtered = [...jobListings];
  if (userSelect === "type") {
    filtered = filtered.filter((jobListing) => {
      return jobListing.type.toLowerCase().includes(userInput.toLowerCase());
    });
  } else if (userSelect === "title") {
    filtered = filtered.filter((jobListing) => {
      return jobListing.title.toLowerCase().includes(userInput.toLowerCase());
    });
  } else if (userSelect === "postCode") {
    filtered = filtered.filter((jobListing) => {
      return jobListing.postCode
        .toLowerCase()
        .includes(userInput.toLowerCase());
    });
  }
  if (contractButtonSelect === "fullTime") {
    filtered = filtered.filter((jobListing) => {
      return jobListing.contract.includes(contractButtonSelect);
    });
  } else if (contractButtonSelect === "partTime") {
    filtered = filtered.filter((jobListing) => {
      return jobListing.contract.includes(contractButtonSelect);
    });
  } else if (contractButtonSelect === "any") {
    filtered = filtered.filter((jobListing) => {
      return jobListing;
    });
  }

  return (
    <>
      <h1>Search for a job</h1>
      <div className="contractBar">
        <button
          className="btn btn-outline-primary"
          type="radio"
          id="any"
          name="contract"
          value="any"
          onClick={(e) => setContractButtonSelect(e.target.value)}
        >
          Any
        </button>
        <button
          className="btn btn-outline-primary"
          type="radio"
          id="fullTime"
          name="contract"
          value="fullTime"
          onClick={(e) => setContractButtonSelect(e.target.value)}
        >
          Full-time
        </button>
        <button
          className="btn btn-outline-primary"
          type="radio"
          id="partTime"
          name="contract"
          value="partTime"
          onClick={(e) => setContractButtonSelect(e.target.value)}
        >
          Part-time
        </button>
      </div>

      <div className="controlBar">
        <label>
          Search by:
          <select
            onChange={(e) => {
              setUserSelect(e.target.value);
            }}
          >
            <option value="type">Type</option>
            <option value="title">Title</option>
            <option value="postCode">Postcode</option>
          </select>
        </label>
      </div>

      <div className="inputBar">
        <input
          ref={inputBox}
          onInput={(e) => {
            setUserInput(e.target.value);
          }}
          type="text"
          placeholder="Search for a job"
        ></input>
      </div>

      <div className="allResult">
        {filtered.map((job) => {
          {
            /* console.log(job); */
          }
          const quickViewJob = Object.entries(job);

          return (
            <button
              className="btn-outline-dark"
              onClick={seeJobDetails}
              key={job.id}
            >
              <form className="eachResult">
                {quickViewJob.map((item) => {
                  if (
                    item[0] === "email" ||
                    item[0] === "phoneNumber" ||
                    item[0] === "id" ||
                    item[0] === "description"
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
              </form>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Controls;
