import React, { useState } from "react";
import Webcam from "react-webcam";
import { useDispatch } from "react-redux";
import { editedUserImage } from "../../features/hospitality/hospitalitySlice";

const videoConstraints = {
  width: 300,
  height: 300,
  facingMode: "user",
};

const WebcamForUserPofile = () => {
  const [newImage, setNewImage] = useState();
  const dispatch = useDispatch();

  const onImageClick = (newImage) => {
    setNewImage(newImage);
  };

  const onSave = () => {
    dispatch(editedUserImage(newImage));
  };

  return (
    <div className="camGrid">
      <Webcam
        className="webcamForUserPofile border border-secondary rounded-circle"
        audio={false}
        height={300}
        screenshotFormat="image/jpeg"
        width={300}
        videoConstraints={videoConstraints}
      >
        {({ getScreenshot }) => {
          return (
            <>
              <button
                type="submit"
                className="captureImgButton btn btn-success "
                onClick={() => {
                  const imageSrc = getScreenshot();
                  onImageClick(imageSrc);
                }}
              >
                Capture
              </button>

              {newImage && (
                <>
                  <img
                    className="editedPhoto border border-secondary rounded-circle"
                    src={newImage}
                    alt="You"
                  />

                  <button
                    type="submit"
                    className="saveImgButton btn btn-success "
                    onClick={onSave}
                  >
                    Save
                  </button>

                  <button
                    className="retakeImgButton btn btn-success "
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
  );
};

export default WebcamForUserPofile;
