import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectFreelancers } from "../../features/hospitality/hospitalitySlice";
// import Results from "./Results";

const Controls = () => {
  const freelancers = useSelector(selectFreelancers);
  const [userInput, setUserInput] = useState("");
  const [userSelect, setUserSelect] = useState("Role");
  const [contractButtonSelect, setContractButtonSelect] = useState("Any");
  console.log(userSelect, contractButtonSelect);
  if (!freelancers) {
    return <p>Loading...</p>;
  }

  let filtered = [...freelancers];
  if (userSelect === "Postcode") {
    filtered = filtered.filter((freelancer) => {
      return freelancer.Postcode.toLowerCase().includes(
        userInput.toLowerCase()
      );
    });
  } else if (userSelect === "Role") {
    filtered = filtered.filter((freelancer) => {
      return freelancer.Role.toLowerCase().includes(userInput.toLowerCase());
    });
  } else if (userSelect === "Skill") {
    filtered = filtered.filter((freelancer) => {
      return freelancer.Skill.toLowerCase().includes(userInput.toLowerCase());
    });
  }
  if (contractButtonSelect === "Full-time") {
    filtered = filtered.filter((freelancer) => {
      return freelancer.Contract.includes(contractButtonSelect);
    });
  } else if (contractButtonSelect === "Part-time") {
    filtered = filtered.filter((freelancer) => {
      return freelancer.Contract.includes(contractButtonSelect);
    });
  } else if (contractButtonSelect === "Any") {
    filtered = filtered.filter((freelancer) => {
      return freelancer;
    });
  }

  return (
    <>
      <h1>Search For Freelancer</h1>
      <div className="controlBar">
        <label>
          Search by:
          <select
            onChange={(e) => {
              setUserSelect(e.target.value);
            }}
          >
            <option value="Role">Role</option>
            <option value="Skill">Skill</option>
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
          placeholder="Enter something ..."
        ></input>
      </div>

      <div>
        {filtered.map((freelancer) => {
          const quickViewFreelancer = Object.entries(freelancer);

          return (
            <div className="eachResult">
              {quickViewFreelancer.map((item) => {
                if (
                  item[0] === "Email" ||
                  item[0] === "Phone" ||
                  item[0] === "id" ||
                  item[0] === "About" ||
                  item[0] === "Experience"
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

          // <Results
          //   key={item.ID}
          //   freelancer_name={item.freelancer_name}
          //   location={item.location}
          //   role={item.role}
          //   skills=  {item.skills}
          // />
        })}
      </div>
    </>
  );
};

export default Controls;
