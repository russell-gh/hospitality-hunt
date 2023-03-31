import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { selectJobListings } from "../../features/hospitality/hospitalitySlice";
import gsap from "gsap";
import Result from "./Result";

const Controls = () => {
  const jobListings = useSelector(selectJobListings);
  const [userInput, setUserInput] = useState("");
  const [userSelect, setUserSelect] = useState("type");
  const [contractButtonSelect, setContractButtonSelect] = useState("any");
  const inputBox = useRef();

  useLayoutEffect(() => {
    gsap.fromTo(
      ".eachResult",
      { y: -1000 },
      { duration: 2, ease: "bounce.out", y: 0 }
    );
  }, []);

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
      return jobListing.title.some((item) =>
        item.toLowerCase().includes(userInput.toLowerCase())
      );
    });
  } else if (userSelect === "postCode") {
    filtered = filtered.filter((jobListing) => {
      return jobListing.postCode
        .toLowerCase()
        .startsWith(userInput.toLowerCase());
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
  } else {
    filtered = filtered.filter((jobListing) => {
      return jobListing;
    });
  }

  return (
    <>
      <h1 className="title">Search for a job</h1>
      <div className="contractBar">
        <button
          className="btn btn-success"
          type="radio"
          id="any"
          name="contract"
          value="any"
          onClick={(e) => setContractButtonSelect(e.target.value)}
        >
          Any
        </button>
        <button
          className="btn btn-success"
          type="radio"
          id="fullTime"
          name="contract"
          value="fullTime"
          onClick={(e) => setContractButtonSelect(e.target.value)}
        >
          Full-time
        </button>
        <button
          className="btn btn-success"
          type="radio"
          id="partTime"
          name="contract"
          value="partTime"
          onClick={(e) => setContractButtonSelect(e.target.value)}
        >
          Part-time
        </button>
      </div>

      <div className="searchByBar">
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

      <Result filtered={filtered} />
    </>
  );
};

export default Controls;
