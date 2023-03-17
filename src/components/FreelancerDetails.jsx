import React from "react";
import { useState } from "react";
import { setFreelancerDetails } from "../features/hospitality/hospitalitySlice";
import { useDispatch } from "react-redux";
import { validate } from "../validation/joi";

const FreelancerDetails = (props) => {
  const dispatch = useDispatch();
  const [freelancerData, setFreelancerData] = useState({});
  const onInput = (e) => {
    setFreelancerData({ ...freelancerData, [e.target.id]: e.target.value });
  };

  const setFreelancerDetails = (e) => {
    e.preventDefault();
    // validate("valType", freelancerData);
    dispatch(setFreelancerDetails(freelancerData));
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
        onSubmit={setFreelancerDetails}
        action=""
        method="post">
        <ul>
          <li>
            <label for="firstName"> </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />
          </li>
          <li>
            <label for="surName"> </label>
            <input
              type="text"
              id="surName"
              name="surName"
              placeholder="SurName"></input>
          </li>
          <li>
            <label for="post-code"></label>
            <input
              type="text"
              id="postCode"
              name="postCode"
              placeholder="Poste Code"></input>
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
            <label for="contactNumber"></label>
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              placeholder="Contact Number"></input>
          </li>
          <li>
            <label for="role"></label>
            <input
              type="text"
              id="role"
              name="role"
              placholder="Role you are appling for"></input>
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
            <laebel for="skills"></laebel>
            <input
              type="text"
              id="skills"
              name="skills"
              placholder="Skills"></input>
          </li>
          <li>
            <label for="contract"></label>
            <input
              type="contract"
              id="contract"
              name="contract"
              plcheolder="Contract you are looking for"></input>
          </li>
          <li>
            <label for="about"></label>
            <textarea
              id="about"
              name="about"
              placeholder="Introduce Yourself"></textarea>
          </li>
          <button type="submit">Submit</button>
        </ul>
      </form>
    </>
  );
};

export default FreelancerDetails;
