import OpenAIbot from "../OpenAIbot";
import TextToSpeech from "../TextToSpeech";
import Mouth from '../assets/mouth.gif'
import { useLocation, useNavigate } from 'react-router-dom';

function Resume() {
  const location = useLocation();
  const { label, img } = location.state;
  const navigate = useNavigate();

  return (
    <div className="resume">
      {img && <TextToSpeech />}
      <div className="container">
        <button onClick={() => navigate('../')} className="back-button"></button>
        {img && <div className="image"
          style={{
            backgroundImage: `url(${img})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
          }}>
          <img className="mouth-pic" src={Mouth} />
        </div>}
        <div className="resume-container">
          {/* the CV */}
          <OpenAIbot label={label} />
        </div>
      </div>
    </div>
  )
}

export default Resume;