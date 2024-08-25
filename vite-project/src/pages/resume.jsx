import OpenAIbot from "../OpenAIbot";
import TextToSpeech from "../TextToSpeech";
import Mouth from '../assets/mouth.gif'
import { useNavigate } from 'react-router-dom';
import LlamaBot from "../../LlamaBot";
import { useLocation } from 'react-router-dom';
import SimpleChat from "../SimpleChat";
import { useState } from "react";

function Resume() {
  const location = useLocation();

  const label = location.state;
  const [response, setResponse] = useState('');

  const handleResponse = (newResponse) => {
    setResponse(newResponse);
  }

  const temp ="temp cehck"

  return (
    <div className="resume">
      <p>RESUME!</p>
      <TextToSpeech text={temp}/>
      <div className="container">
        <button onClick={() => navigate('../')} className="back-button"></button>
        <div className="image">
          <img className="mouth-pic" src={Mouth} />
        </div>
        <div className="resume-container">
          <SimpleChat onResponse={handleResponse}/>
          {/* <SimpleChat /> */}
          <div hidden>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume;