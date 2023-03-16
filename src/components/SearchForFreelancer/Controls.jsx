import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectFreelancers } from "../../features/hospitality/hospitalitySlice";
// import Results from "./Results";

const Controls = () => {
  const freelancers = useSelector(selectFreelancers);
  const [userInput, setUserInput] = useState("");
  const [userSelect, setUserSelect] = useState("Postcode");

  if (!freelancers) {
    return <p>Loading...</p>;
  }

  let filtered = freelancers;
  if (userSelect === "Postcode") {
    filtered = freelancers.filter((freelancer) => {
      return freelancer.Postcode.toLowerCase().includes(
        userInput.toLowerCase()
      );
    });
  } else if (userSelect === "Role") {
    filtered = freelancers.filter((freelancer) => {
      return freelancer.Role.toLowerCase().includes(userInput.toLowerCase());
    });
  } else {
    filtered = freelancers.filter((freelancer) => {
      return freelancer.Skill.toLowerCase().includes(userInput.toLowerCase());
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
            <option value="Skills">Skill</option>{" "}
            <option value="Postcode">Postcode</option>
          </select>
        </label>
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

          return quickViewFreelancer.map((item) => {
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
