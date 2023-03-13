import React from "react";
import { useSelector } from "react-redux";
import { selectCount } from "../features/hospitality/hospitalitySlice";

const FreelancersSearch = () => {
  const users = useSelector(selectCount);
  console.log(users);

  if (!users) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>
        <input
          // onInput={(e) => {
          //   setUserInput(e, target.value);
          // }}
          type="text"
          placeholder="Search for a job"
        ></input>
        <select>
          <option>Job type</option>
          <option>Skills</option>
          <option>Location</option>
        </select>
      </div>

      <div>
        {/* {users.map((item) => (
          <>
            <p>{item.type}</p>
          </>
        ))} */}

        <p>{users}</p>
      </div>
    </>
  );
};

export default FreelancersSearch;
