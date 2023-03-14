import React from "react";

const Results = (props) => {
  const { freelancer_name, location, role, skills } = props;
  return (
    <div>
      <div className="eachJob">
        <h2>{freelancer_name}</h2>
        <p>Location: {location}</p>
        <p>Role: {role}</p>
        <p>Skills: {skills}</p>
      </div>
    </div>
  );
};

export default Results;
