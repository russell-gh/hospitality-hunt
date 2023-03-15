import React from "react";
import { useState } from "react";
import { setFreelancerDetails } from "../features/hospitality/hospitalitySlice";
import { useDispatch } from "react-redux";

const FreelancerDetails = (props) => {
  const dispatch = useDispatch();
  const [freelancerData, setFreelancerData] = useState({});
  const onInput = (e) => {
    setFreelancerData({ ...freelancerData, [e.target.id]: e.target.value });
  };

  const setFreelancerDetails = (e) => {
    e.preventDefault();
    dispatch(setFreelancerData(freelancerData));
  };

  // const onChange = (e) => {
  //   let files = e.target.files;

  //   let reader = new FileReader();
  //   reader.readAsDataURL(files[0]);
  //   console.log(reader);
  // };
  return (
    <>
      <h1>Freelancer Profile</h1>
      <div>
        <img src="#" alt="" />
      </div>
      <form
        onInput={onInput}
        onSubmit={"send to search page"}
        action=""
        method="post">
        <ul>
          <li>
            <label for="first-name"> </label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              placeholder="First Name"
            />
          </li>
          <li>
            <label for="surname-name"> </label>
            <input
              type="text"
              id="surname-name"
              name="surname-name"
              placeholder="Surname Name"></input>
          </li>
          <li>
            <label for="email"></label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"></input>
          </li>
          <li>
            <label for="contact-number"></label>
            <input
              type="text"
              id="number"
              name="number"
              placeholder="Contact Number"></input>
          </li>
          <li>
            <label for="years-of-experience"></label>
            <input
              type="text"
              id="experience"
              name="experience"
              placeholder="Years of Experience"></input>
          </li>
          <li>
            <label for="cv-link"></label>
            <input type="file" name="file" /*onChange={onChange}*/></input>
          </li>
          <li>
            <label for="about"></label>
            <textarea
              id="about"
              name="about"
              placeholder="Introduce Yourself"></textarea>
          </li>
        </ul>
      </form>
    </>
  );
};

export default FreelancerDetails;
