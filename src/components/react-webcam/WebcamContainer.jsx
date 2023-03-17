import React, { useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const WebcamContainer = () => {
  const [image, setImage] = useState();

  const onImageClick = (image) => {
    setImage(image);
  };

  const onSave = () => {
    //send to  store
  };

  return (
    <>
      {image && (
        <div>
          <img src={image} alt="You" />{" "}
          {/* place the confirm on top of the live image */}
          <button onClick={onSave}>Save</button>
        </div>
      )}

      <Webcam
        audio={false}
        height={720}
        screenshotFormat="image/jpeg"
        width={1280}
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
    </>
  );
};

export default WebcamContainer;
