import InputBox from '../components/InputBox';
import { useNavigate } from 'react-router-dom';
import WebcamCapture from '../components/Webcam';

function TakePic() {
  const navigate = useNavigate();

  return (
    <div className="innerContainer">
      <h1>ResuManiac</h1>
      <h3 className="subHeadings">ACE YOUR INTERVIEW</h3>

      <WebcamCapture />
      <InputBox />

      <button className="take-pic-button" onClick={() => navigate('/')}>Upload a file</button>
    </div>
  )
}

export default TakePic;