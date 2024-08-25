import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import Camera from '../assets/camera.svg';
import ObjectDetection from '../ObjectDetector';
import { useNavigate } from 'react-router-dom';

const WebcamCapture = () => {
  const navigate = useNavigate();
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [targetLabel, setTargetlabel] = useState(null);

  const handleLabelValueChange = (newValue) => {
    setTargetlabel(newValue);
  };

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
  };


  useEffect(() => {
    if (targetLabel) {
      setTimeout(() => {
        navigate('/resume', { state: { label: targetLabel, img: imageSrc } });
      }, 3000); // Wait for 3 seconds before changing pages
      
    }
  }, [targetLabel, navigate, imageSrc]);

  return (
    <div className='webcam'>
      <div className='take-photo'>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={320}
          height={240}
        />
        <button className='camera-button' onClick={capture}>
          <img src={Camera} />
        </button>
      </div>

      <div>
        {imageSrc && (
          <div>
            <h2>Captured Image:</h2>
            <ObjectDetection imageSrc={imageSrc} onTargetLabelChange={handleLabelValueChange} />
            {!targetLabel && <h4>
              No item detected. Please take another photo.
            </h4>}
          </div>
        )}
      </div>
    </div>
  );
};

export default WebcamCapture;