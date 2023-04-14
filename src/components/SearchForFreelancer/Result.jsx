import React from "react";
import { searchForFreelancerListingText } from "../../language/english";
import { freelancerClicked } from "../../features/hospitality/hospitalitySlice";
import { useDispatch } from "react-redux";

const Result = (props) => {
  const { filtered } = props;
  const dispatch = useDispatch();

  return (
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
                  item[0] === "user_id" ||
                  item[0] === "aboutYou" ||
                  item[0] === "experience" ||
                  item[0] === "image" ||
                  item[0] === "location" ||
                  item[0] === "distance" ||
                  item[0] === "lat" ||
                  item[0] === "lon"
                )
                  return null;

                return (
                  <div key={item[0]}>
                    <p className="eachLineResult">
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
                  console.log(freelancer);
                  console.log(freelancer.id);
                  dispatch(freelancerClicked(freelancer.user_id));
                }}
              >
                more info
              </button>
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default Result;
