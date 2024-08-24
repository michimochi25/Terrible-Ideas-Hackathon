import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WebcamCapture from '../components/Webcam';

function TakePic() {
  const navigate = useNavigate();

  return (
    <div className="innerContainer">
      <h1>ResuManiac</h1>
      <h3 className="subHeadings">ACE YOUR INTERVIEW</h3>

      <div>
        <WebcamCapture />
      </div>


      <form action="" method="get">
          <textarea
            className="inputContainer"
            placeholder='Put the job position you want to apply for, e.g. Software Engineer'
            rows="4"
          />
      </form>
      <button className="take-pic-button" onClick={() => navigate('/')}>Upload file</button>
    </div>
  )
}

export default TakePic;