import OpenAIbot from "../OpenAIbot";
import TextToSpeech from "../TextToSpeech";
import Mouth from '../assets/mouth.gif'
import { useLocation, useNavigate } from 'react-router-dom';
import LlamaBot from "../../LlamaBot";
import SimpleChat from "../SimpleChat";
import React, { useState } from 'react';


function Resume() {
  const location = useLocation();
  const { label, img } = location.state;
  const navigate = useNavigate();

  const [response, setResponse] = useState('');

  const handleResponse = (newResponse) => {
    setResponse(newResponse);
  };

  const text = "You suck, no resume for you!";


  return (
    <div className="resume">
      <h1>RESUME</h1>
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
          {/* <OpenAIbot /> */}
          {/* <LlamaBot /> */}
          {/* <SimpleChat onResponse={handleResponse} /> */}
          <SimpleChat />

          {img && <TextToSpeech text={response} />}

        </div>
      </div>
    </div>
  )
}

export default Resume;