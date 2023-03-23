import React, { useState } from "react";
import Webcam from "react-webcam";
import { useDispatch } from "react-redux";
import { editedUserImage } from "../../features/hospitality/hospitalitySlice";
import "./UserProfile.css";

const videoConstraints = {
  width: 400,
  height: 300,
  facingMode: "user",
};

const WebcamForUserPofile = (props) => {
  const [image, setImage] = useState();
  const dispatch = useDispatch();
  const { handleSetIsEdit } = props;

  const onImageClick = (image) => {
    setImage(image);
  };

  const onSave = () => {
    dispatch(editedUserImage(image));
    handleSetIsEdit(false);
  };

  return (
    <>
      <div className="photoContainer text-center">
        <div>
          <div className="webcamBox camGrid">
            <Webcam
              className="webcam border border-secondary"
              audio={false}
              height={300}
              screenshotFormat="image/jpeg"
              width={400}
              videoConstraints={videoConstraints}
            >
              {({ getScreenshot }) => {
                return (
                  <>
                    <button
                      type="submit"
                      className="btn btn-success captureImg"
                      onClick={() => {
                        const imageSrc = getScreenshot();
                        onImageClick(imageSrc);
                      }}
                    >
                      Capture
                    </button>

                    {image && (
                      <>
                        <img
                          className="photo border border-secondary camImage"
                          src={image}
                          alt="You"
                        />

                        <button
                          type="submit"
                          className="btn btn-success saveImg"
                          onClick={onSave}
                        >
                          Save
                        </button>

                        <button
                          className="webcamButton btn btn-success retakeImg"
                          onClick={() => onImageClick(undefined)}
                        >
                          Retake
                        </button>
                      </>
                    )}
                  </>
                );
              }}
            </Webcam>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebcamForUserPofile;
