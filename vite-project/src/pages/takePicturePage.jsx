import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WebcamCapture from '../components/Webcam';

function TakePic() {
  const imgID = document.getElementById('imgID');
  const imgForm = document.getElementById('imgForm');
  const navigate = useNavigate();
  const upload = () => {
    imgForm.addEventListener('submit', (event) => {
      event.preventDefault();
      console.log("submit img");
      fetch(imgForm.action, {
        method: 'POST',
        body: new FormData(imgForm)
      })
    });

    imgID.addEventListener('change', (event) => {
      if (event?.target.files && event.target.files[0]) {
        imgID.src = URL.createObjectURL(event.target.files[0]);
        imgID.load()
      }
    });
  }

  return (
    <div className="innerContainer">
      <h1>ResuManiac</h1>
      <h3 className="subHeadings">ACE YOUR INTERVIEW</h3>

      <div>
        <WebcamCapture />
      </div>

      <div className="biggerContainer">
        <div className="inputContainer"></div>
      </div>
      <button className="take-pic-button" onClick={() => navigate('/')}>Upload file</button>
    </div>
  )
}

export default TakePic;