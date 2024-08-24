import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import Camera from '../assets/camera.svg';

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
  };

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
            <img src={imageSrc} alt="Captured" />
          </div>
        )}
      </div>
    </div>
  );
};

export default WebcamCapture;