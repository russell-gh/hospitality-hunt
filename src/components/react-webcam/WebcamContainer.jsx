import React, { useState } from "react";
import Webcam from "react-webcam";
import { useDispatch } from "react-redux";
import { setUserImage } from "../../features/hospitality/hospitalitySlice";

const videoConstraints = {
  width: 400,
  height: 300,
  facingMode: "user",
};

const WebcamContainer = () => {
  const [image, setImage] = useState();
  const dispatch = useDispatch();

  const onImageClick = (image) => {
    setImage(image);
  };

  const onSave = () => {
    //send to  store
    console.log(image);
    dispatch(setUserImage(image));
  };

  return (
    <>
      <div className="photoContainer">
        <div>
          {image && (
            <>
              <img className="photo" src={image} alt="You" />{" "}
              {/* place the confirm on top of the live image */}
              <button onClick={onSave}>Save</button>
              <button onClick={() => onImageClick(undefined)}>Retake</button>
            </>
          )}
          <div className="webcamBox">
            <Webcam
              className="webcam"
              audio={false}
              height={300}
              screenshotFormat="image/jpeg"
              width={400}
              videoConstraints={videoConstraints}
            >
              {({ getScreenshot }) => {
                return (
                  <button
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
