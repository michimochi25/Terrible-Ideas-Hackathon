import InputBox from '../components/InputBox';
import { useNavigate } from 'react-router-dom';
import WebcamCapture from '../components/Webcam';

function TakePic() {
  const navigate = useNavigate();

  return (
    <div className="innerContainer">
      <h1>ResuManiac</h1>
      <p className="subHeadings">ACE YOUR INTERVIEW</p>

      <div className="flexContainer">
        <WebcamCapture />
        <InputBox />
        <button className="take-pic-button" onClick={() => navigate('/')}>Upload a file</button>
      </div>
    </div>
  )
}

export default TakePic;