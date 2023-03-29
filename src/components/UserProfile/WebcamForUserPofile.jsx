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
  const [isCapture, setIsCapture] = useState(false);
  const [isSave, setIsSave] = useState(false);
  const dispatch = useDispatch();

  const onImageClick = (newImage) => {
    setNewImage(newImage);
    setIsSave(false);
    setIsCapture(true);
  };

  const onSave = () => {
    dispatch(editedUserImage(newImage));
    setIsSave(true);
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
              {isCapture ? (
                <div></div>
              ) : (
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
              )}

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
                    onClick={() => {
                      onImageClick(undefined);
                      setIsCapture(false);
                    }}
                  >
                    Retake
                  </button>
                  <div>
                    {isSave ? (
                      <div className="saveNotice">Your photo is saved</div>
                    ) : (
                      <div></div>
                    )}
                  </div>
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
