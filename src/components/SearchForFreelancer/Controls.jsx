import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectFreelancers } from "../../features/hospitality/hospitalitySlice";
// import Results from "./Results";

const Controls = () => {
  const freelancers = useSelector(selectFreelancers);
  const [userInput, setUserInput] = useState("");
  const [userSelect, setUserSelect] = useState("Location");

  if (!freelancers) {
    return <p>Loading...</p>;
  }

  let filtered = freelancers;
  if (userSelect === "Location") {
    filtered = freelancers.filter((freelancers) => {
      return freelancers.location
        .toLowerCase()
        .includes(userInput.toLowerCase());
    });
  } else if (userSelect === "Role") {
    filtered = freelancers.filter((freelancers) => {
      return freelancers.role.toLowerCase().includes(userInput.toLowerCase());
    });
  } else {
    filtered = freelancers.filter((freelancers) => {
      return freelancers.skills.toLowerCase().includes(userInput.toLowerCase());
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
            <option value="Location">Location</option>
            <option value="Role">Role</option>
            <option value="Skills">Skills</option>
          </select>
        </label>
      </div>
      <div className="inputBar">
        <input
          onInput={(e) => {
            setUserInput(e.target.value);
          }}
          type="text"
          placeholder="Search for a freelancer"
        ></input>
      </div>
      <div>
        {filtered.map((freelancer) => {
          const quickViewFreelancer = Object.entries(freelancer);

          return quickViewFreelancer.map((item) => {
            if (
              (item[0] === "Experience",
              item[0] === "Email",
              item[0] === "Phone",
              item[0] === "About")
            )
              return;
            return (
              <div key={item[0]}>
                <p>
                  {item[0]}: {item[1]}
                </p>
              </div>
            );
          });
          // <Results
          //   key={item.ID}
          //   freelancer_name={item.freelancer_name}
          //   location={item.location}
          //   role={item.role}
          //   skills={item.skills}
          // />
        })}
      </div>
    </>
  );
};

export default Controls;

// Freelancer: [
//   Name
//   Postcode
//   Contract (e.g. full or part time)
//   Skill
//   Role (what role looking for)
//   ]
