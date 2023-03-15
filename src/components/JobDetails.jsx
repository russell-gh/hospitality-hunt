import React from "react";
import { selectBusinesses } from "../features/hospitality/hospitalitySlice";
import { useSelector } from "react-redux";
import "./JobDetails.css";
import { listingText } from '../language/english';

const JobDetails = () => {

    const businesses = useSelector(selectBusinesses);
    console.log(businesses);
    if (!businesses) {
        return <p>Loading...</p>;
    }

    return businesses.map((business) => {
        const { business_name, location, business_type, position, email, about } =
            business;

        const bArray = Object.entries(business)

        return bArray.map(item => {
            return <div style={{ display: 'flex' }}>
                <p>{listingText[item[0]] ? listingText[item[0]] : item[0]}</p>
                <p>{item[1]}</p>
            </div>
        })

        // return (
        //     <div className="job-details">
        //         <h1>Job Details</h1>
        //         <h2>Type of Role</h2>
        //         <p>{business_name}</p>
        //         <h2>Location of Restaurant:</h2>
        //         <p>{location}</p>
        //         <h2>Type of Business:</h2>
        //         <p>{business_type}</p>
        //         <h2>Type of Role:</h2>
        //         <p>{position}</p>
        //         <h2>Contact information:</h2>
        //         <p>{email}</p>
        //         <h2>Further information:</h2>
        //         <p>{about}</p>
        // //    </div>
        // );
    });
};

export default JobDetails;
