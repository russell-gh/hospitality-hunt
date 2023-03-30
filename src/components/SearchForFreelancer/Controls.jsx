import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFreelancers,
  freelancerClicked,
} from "../../features/hospitality/hospitalitySlice";
import { searchForFreelancerListingText } from "../../language/english";
import gsap from "gsap";
import { calcLonLatDiff, getLongLat } from "../../location";

const Controls = () => {
  const freelancers = useSelector(selectFreelancers);
  const [freelancersWithDistance, setFreelancersWithDistance] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [userSelect, setUserSelect] = useState("position");
  const [contractButtonSelect, setContractButtonSelect] = useState("any");
  const inputBox = useRef();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    gsap.fromTo(
      ".eachResult",
      { y: -1000 },
      { duration: 2, ease: "bounce.out", y: 0 }
    );
  }, []);

  useEffect(() => {
    if (freelancers) inputBox.current.focus();
  }, [freelancers]);

  useEffect(() => {
    if (userSelect !== "postCode") return;

    const postCode = async () => {
      let filtered = JSON.parse(JSON.stringify(freelancers)); //because the store can not be mutated
      //location in long and lat of the current search term
      const { lat, lon } = await getLongLat(userInput);

      console.log(lat, lon);

      //calc the difference between the above and the ones for each result
      filtered.forEach((freelancer) => {
        freelancer.distance = calcLonLatDiff(
          lat,
          lon,
          freelancer.location.lat,
          freelancer.location.lon
        );
      });

      console.log(filtered);

      setFreelancersWithDistance(filtered);
    };
    postCode();
  }, [userInput]);

  if (!freelancers) {
    return <p>Loading...</p>;
  }

  let filtered = [...freelancers];
  if (userSelect === "postCode") {
    //filter the results to only show them if the distance is within the amount
    filtered = freelancersWithDistance.filter((freelancer) => {
      return freelancer.distance && freelancer.distance < 4000;
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
      <h1 className="title">Search for a freelancer</h1>
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
            <div className="btn-outline-dark" key={freelancer.id}>
              <form className="eachResult">
                {quickViewFreelancer.map((item) => {
                  if (
                    item[0] === "email" ||
                    item[0] === "phoneNumber" ||
                    item[0] === "id" ||
                    item[0] === "aboutYou" ||
                    item[0] === "experience" ||
                    item[0] === "image" ||
                    item[0] === "location" ||
                    item[0] === "distance"
                  )
                    return null;

                  return (
                    <div key={item[0]}>
                      <p>
                        {searchForFreelancerListingText[item[0]]}:{" "}
                        {typeof item[1] === "string"
                          ? item[1]
                          : item[1].join(" ")}
                      </p>
                    </div>
                  );
                })}
                <button
                  className="moreInfo btn btn-outline-success"
                  onClick={() => {
                    dispatch(freelancerClicked(freelancer.id));
                  }}
                >
                  more info
                </button>
              </form>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Controls;
