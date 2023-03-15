import React from "react";

const Results = (props) => {
  const { business_name, location, business_type, position } = props;
  return (
    <div>
      <div>
        <h2>{business_name}</h2>
        <p>Location: {location}</p>
        <p>Type: {business_type}</p>
        <p>Position: {position}</p>
      </div>
    </div>
  );
};

export default Results;
