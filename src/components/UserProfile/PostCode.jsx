import React from "react";

const PostCode = (props) => {
  const { isEdit, userData, errors } = props;

  return (
    <>
      <div className="form-group">
        <label htmlFor="postCode">Postcode: </label>
        <input
          type="text"
          className="form-control userProfileEachResult"
          id="postCode"
          name="postCode"
          placeholder="SW1 2AA"
          disabled={!isEdit}
          value={userData.postCode}
        />
        {errors.postCode && (
          <div className="alert alert-danger" role="alert">
            {errors.postCode}
          </div>
        )}
      </div>
    </>
  );
};

export default PostCode;
