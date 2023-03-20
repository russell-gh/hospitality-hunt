import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserProfile,
  setScreenMode,
  selectFreelancers,
  editFormData,
} from "../features/hospitality/hospitalitySlice";
import { validate } from "../validation/joi";

const UserProfile = (props) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});
  const [errors, setErrors] = useState({});
  const freelancers = useSelector(selectFreelancers);
  // const isEdit = useSelector((state) => state.freelancers);

  const onInput = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  const sendUserInfo = async (e) => {
    e.preventDefault();
    const result = await validate("createUserProfile", userData);
    console.log(result);
    if (result === true) {
      dispatch(setUserProfile(userData));
      dispatch(setScreenMode(10));
    } else {
      setErrors(result);
    }
  };

  // const editButton = () => {
  //   dispatch(editFormData());
  // };

  return (
    <div className="html">
      <h1>Your profile</h1>
      <p>Please fill in the information below:</p>

      <form
        className="createUserProfile"
        onInput={onInput}
        onSubmit={sendUserInfo}
      >
        <ul>
          <div className="form-group">
            <label htmlFor="firstName">First name: </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={freelancers[0].Name}
              // disabled={!isEdit}
              // onChange={onInput}
            />
            {errors.firstName && (
              <div className="alert alert-danger" role="alert">
                {errors.firstName}
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last name: </label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              name="lastName"
              value={freelancers[0].Name}
            />
            {errors.lastName && (
              <div className="alert alert-danger" role="alert">
                {errors.lastName}
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone number: </label>
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              value={freelancers[0].Phone}
            ></input>
            {errors.phoneNumber && (
              <div className="alert alert-danger" role="alert">
                {errors.phoneNumber}
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="postcode">Postcode: </label>
            <input
              type="text"
              className="form-control"
              id="postcode"
              name="postcode"
              value={freelancers[0].Postcode}
            />
            {errors.postcode && (
              <div className="alert alert-danger" role="alert">
                {errors.postcode}
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="contract">Type of contract: </label>
            <select
              id="contract"
              className="form-control"
              name="contract"
              size="2"
              multiple
            >
              <option value="fulltime">Full-time</option>
              <option value="parttime">Part-time</option>
            </select>
            {errors.contract && (
              <div className="alert alert-danger" role="alert">
                {errors.contract}
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="position">Type of position: </label>
            <select
              id="position"
              className="form-control"
              name="position"
              size="6"
              multiple
            >
              <option value="fulltime">Waiter/waitress</option>
              <option value="parttime">Bartender</option>
              <option value="fulltime">Porter</option>
              <option value="parttime">Housekeeper</option>
              <option value="fulltime">General Manager</option>
              <option value="parttime">Chef</option>
            </select>
            {errors.position && (
              <div className="alert alert-danger" role="alert">
                {errors.position}
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="experience">Experience in hospitality:</label>
            <textarea
              id="experience"
              className="form-control"
              name="experience"
              value={freelancers[0].Experience}
            ></textarea>
            {errors.experience && (
              <div className="alert alert-danger" role="alert">
                {errors.experience}
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="skills">Skills:</label>
            <textarea
              id="skills"
              className="form-control"
              name="skills"
              value={freelancers[0].Skill}
            ></textarea>
            {errors.skills && (
              <div className="alert alert-danger" role="alert">
                {errors.skills}
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="aboutYou">About you:</label>
            <textarea
              id="aboutYou"
              className="form-control"
              name="aboutYou"
              value={freelancers[0].About}
            ></textarea>
            {errors.aboutYou && (
              <div className="alert alert-danger" role="alert">
                {errors.aboutYou}
              </div>
            )}
          </div>
          {/* <div className="button">
            <button type="BUTTON" onClick={editButton}>
              Edit
            </button>
          </div> */}
          <div className="button">
            <button type="submit">Submit</button>
          </div>
        </ul>
      </form>
    </div>
  );
};

export default UserProfile;
