import OpenAIbot from "../OpenAIbot";
import TextToSpeech from "../TextToSpeech";
import Mouth from '../assets/mouth.gif'
import { useLocation } from 'react-router-dom';

function Resume() {
  const location = useLocation();

  const label = location.state;
  // const [resumeData, setResumeData] = useState(null);
  // useEffect(() => {
  //   const fetchResumeData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:3000/api/resume');
  //       const data = await response.json();
  //       setResumeData(data);
  //     } catch (error) {
  //       console.error('Error fetching resume data:', error);
  //     }
  //   };

  //   fetchResumeData();
  // }, []);


  return (
    <div className="resume">
      <p>RESUME!</p>
      <TextToSpeech />
      <div className="container">
        <button onClick={() => navigate('../')} className="back-button"></button>
        <div className="image">
          <img className="mouth-pic" src={Mouth} />
        </div>
        <div className="resume-container">
          {/* the CV */}
          <div hidden>
            <OpenAIbot  label={label}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume;