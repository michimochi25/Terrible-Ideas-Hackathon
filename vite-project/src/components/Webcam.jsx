import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import ObjectDetection from '../ObjectDetector';

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [targetLabel, setTargetlabel] = useState(null);

  const handleLabelValueChange = (newValue) => {
    setTargetlabel(newValue);
  };

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
    const link = document.createElement('a');
    link.href = capture;
    link.download = 'images/target.png';
  };


  return (
    <div className='webcam'>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={320}
        height={240}
      />
      <button onClick={capture}>Capture photo</button>
      {imageSrc && (
        <div>
          <h2>Captured Image:</h2>
          {/* <img src={imageSrc} alt="Captured" /> */}
          <ObjectDetection imageSrc={imageSrc} onTargetLabelChange={handleLabelValueChange}/>
          <h4>{targetLabel}</h4> {/*For debug only*/}
        </div>
      )}
    </div>
  );
};

export default WebcamCapture;