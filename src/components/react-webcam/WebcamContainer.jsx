import React from "react";
import Webcam from "react-webcam";
import { useDispatch } from "react-redux";
import { setUserImage } from "../../features/hospitality/hospitalitySlice";
// import "../../createUserProfile.css";

const videoConstraints = {
  width: 300,
  height: 300,
  facingMode: "user",
};

const WebcamContainer = (props) => {
  const dispatch = useDispatch();

  const onImageClick = (image) => {
    props.setImage(image);
  };

  const onSave = () => {
    //send to  store
    // console.log(image);
    dispatch(setUserImage(props.image));
  };

  return (
    <>
      <div className="photoContainer text-center">
        <div>
          {props.image && (
            <>
              <img
                className="photo rounded-circle border border-secondary"
                src={props.image}
                alt="You"
              />{" "}
              {/* place the confirm on top of the  live image */}
              <button
                className="webcamButton btn btn-success mx-2 mb-2"
                onClick={onSave}
              >
                Save
              </button>
              <button
                className="webcamButton btn btn-success mx-2 mb-2"
                onClick={() => onImageClick(undefined)}
              >
                Retake
              </button>
            </>
          )}
          <div className="webcamBox">
            <Webcam
              className="webcam rounded-circle border border-secondary"
              audio={false}
              height={300}
              screenshotFormat="image/jpeg"
              width={300}
              videoConstraints={videoConstraints}
            >
              {({ getScreenshot }) => {
                return (
                  <button
                    className="btn btn-success webcamCapture"
                    onClick={() => {
                      const imageSrc = getScreenshot();
                      onImageClick(imageSrc);
                    }}
                  >
                    Capture photo
                  </button>
                );
              }}
            </Webcam>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebcamContainer;
