import OpenAIbot from "../OpenAIbot";
import TextToSpeech from "../TextToSpeech";
import Mouth from '../assets/mouth.gif'
import { useNavigate } from 'react-router-dom';
import LlamaBot from "../../LlamaBot";
import { useLocation } from 'react-router-dom';
import SimpleChat from "../SimpleChat";

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
      <h1>RESUME</h1>
      <TextToSpeech />
      <div className="container">
        <button onClick={() => navigate('../')} className="back-button"></button>
        <div className="image">
          <img className="mouth-pic" src={Mouth} />
        </div>
        <div className="resume-container">
          {/* the CV */}
          {/* <OpenAIbot /> */}
          {/* <LlamaBot /> */}
          <SimpleChat />
        </div>
      </div>
    </div>
  )
}

export default Resume;