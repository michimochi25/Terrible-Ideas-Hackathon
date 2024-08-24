import AIbot from "../AIbot";
import ObjectDetection from "../ObjectDetector";
import { useState, useEffect } from 'react';
import Mouth from '../assets/mouth.gif'
import { useNavigate } from 'react-router-dom';
import OpenAIbot from "../OpenAIbot";

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
      <div className="container">
        <div className="image">
          <img className="mouth-pic" src={Mouth} />
          {/* <ObjectDetection /> */}
        </div>
        <div className="resume-container">
          {/* the CV */}
          {/* {resumeData} */}
          <OpenAIbot />
        </div>
      </div>
      <button onClick={() => navigate('../')} className="back-button"></button>
    </div>
  )
}

export default Resume;