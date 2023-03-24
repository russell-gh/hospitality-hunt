import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFreelancers,
  freelancerClicked,
} from "../../features/hospitality/hospitalitySlice";
import { searchForFreelancerListingText } from "../../language/english";

const Controls = () => {
  const freelancers = useSelector(selectFreelancers);
  const [userInput, setUserInput] = useState("");
  const [userSelect, setUserSelect] = useState("position");
  const [contractButtonSelect, setContractButtonSelect] = useState("any");
  const inputBox = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (freelancers) inputBox.current.focus();
  }, [freelancers]);

  if (!freelancers) {
    return <p>Loading...</p>;
  }

  let filtered = [...freelancers];
  if (userSelect === "postCode") {
    filtered = filtered.filter((freelancer) => {
      return freelancer.postCode
        .toLowerCase()
        .includes(userInput.toLowerCase());
    });
  } else if (userSelect === "position") {
    filtered = filtered.filter((freelancer) => {
      return freelancer.position.some((item) =>
        item.toLowerCase().includes(userInput.toLowerCase())
      ); // some() loop over the array for each item to check any of them which is contain userInput in lower case
    });
  } else if (userSelect === "skills") {
    filtered = filtered.filter((freelancer) => {
      return freelancer.skills.toLowerCase().includes(userInput.toLowerCase());
    });
  }

  if (contractButtonSelect === "fullTime") {
    filtered = filtered.filter((freelancer) => {
      return freelancer.contract.includes(contractButtonSelect);
    });
  } else if (contractButtonSelect === "partTime") {
    filtered = filtered.filter((freelancer) => {
      return freelancer.contract.includes(contractButtonSelect);
    });
  } else {
    filtered = filtered.filter((freelancer) => {
      return freelancer;
    });
  }

  return (
    <>
      <h1 className="title">Search For Freelancer</h1>
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
            <option value="position">Position</option>
            <option value="skills">Skill</option>
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
          placeholder="Enter something ..."
        ></input>
      </div>

      <div className="allResult">
        {filtered.map((freelancer) => {
          const quickViewFreelancer = Object.entries(freelancer);

          return (
            <div
              className="btn-outline-dark"
              onClick={() => {
                dispatch(freelancerClicked(freelancer.id));
              }}
              key={freelancer.id}
            >
              <form className="eachResult">
                {quickViewFreelancer.map((item) => {
                  if (
                    item[0] === "email" ||
                    item[0] === "phoneNumber" ||
                    item[0] === "id" ||
                    item[0] === "aboutYou" ||
                    item[0] === "experience" ||
                    item[0] === "image"
                  )
                    return null;

                  return (
                    <div key={item[0]}>
                      <p>
                        {searchForFreelancerListingText[item[0]]}:
                        {typeof item[1] === "string"
                          ? item[1]
                          : item[1].join(" ")}
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
