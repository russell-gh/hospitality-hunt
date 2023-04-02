import React from "react";
import { searchForJobListingText } from "../../language/english";
import { useDispatch } from "react-redux";
import { jobClicked } from "../../features/hospitality/hospitalitySlice";

const Result = (props) => {
  const { filtered } = props;
  const dispatch = useDispatch();

  return (
    <div className="allResult">
      {filtered.map((job) => {
        const quickViewJob = Object.entries(job);

        return (
          <div className="btn-outline-dark" key={job.id}>
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
                    <p className="eachLineResult">
                      {searchForJobListingText[item[0]]}:
                      {typeof item[1] === "string"
                        ? item[1]
                        : item[1].join(" ")}
                    </p>
                  </div>
                );
              })}
              <button
                className="btn btn-outline-success"
                onClick={() => {
                  dispatch(jobClicked(job.id));
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
