import AIbot from "../AIbot";
import TextToSpeech from "../TextToSpeech";
import { useState, useEffect } from 'react';
import Mouth from '../assets/mouth.gif'
import { useNavigate } from 'react-router-dom';

function Resume() {
  const navigate = useNavigate();

  const [resumeData, setResumeData] = useState(null);
  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/resume');
        const data = await response.json();
        setResumeData(data);
      } catch (error) {
        console.error('Error fetching resume data:', error);
      }
    };

    fetchResumeData();
  }, []);


  return (
    <div className="resume">
      <p>RESUME!</p>
      <AIbot />
      <TextToSpeech />
      <div className="container">
        <div className="image">
          <img className="mouth-pic" src={Mouth} />
        </div>
        <div className="resume-container">
          {/* the CV */}
          {resumeData}
        </div>
      </div>
      <button onClick={() => navigate('../')} className="back-button"></button>
    </div>
  )
}

export default Resume;