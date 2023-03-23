import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  jobClicked,
  selectJobListings,
  selectLastClickedJobId,
} from "../../features/hospitality/hospitalitySlice";
import { searchForJobListingText } from "../../language/english";

const Controls = () => {
  const jobListings = useSelector(selectJobListings);
  // const lastClickedJobId = useSelector(selectLastClickedJobId);
  // const selectedJob = jobListings.find((item) => {
  //   console.log(item);
  //   return item.id === lastClickedJobId;
  // });

  const [userInput, setUserInput] = useState("");
  const [userSelect, setUserSelect] = useState("type");
  const [contractButtonSelect, setContractButtonSelect] = useState("any");
  const inputBox = useRef();
  const dispatch = useDispatch();

  // const seeJobDetails = () => {
  //   dispatch(jobClicked({ selectedJob }));
  // };

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

      <div className="allResult">
        {filtered.map((job) => {
          const quickViewJob = Object.entries(job);

          return (
            <div
              className="btn-outline-dark"
              onClick={() => {
                // seeJobDetails({ id: job.id });
                // console.log({ id: job.id });
                dispatch(jobClicked(job.id));
              }}
              key={job.id}
            >
              <form className="eachResult">
                {quickViewJob.map((item) => {
                  if (
                    item[0] === "email" ||
                    item[0] === "phoneNumber" ||
                    item[0] === "id" ||
                    item[0] === "description" ||
                    item[0] === "currentUserId" ||
                    item[0] === "userId"
                  )
                    return null;

                  return (
                    <div key={item[0]}>
                      <p>
                        {searchForJobListingText[item[0]]}: {item[1]}
                      </p>
                    </div>
                  );
                })}
              </form>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Controls;
