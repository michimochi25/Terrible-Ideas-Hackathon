import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Summarizer = ({ label, resume, onSummary }) => {
  const [input, setInput] = useState('');
  // const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  let summary = '';

  let basePrompt = `You are a ${label}. Can you introduce yourself by summarizing the following resume content in about 4 to 5 lines. ${resume}`;

  const handleSend = async () => {
    setLoading(true);
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY; // Replace with your actual API key

    try {
      const result = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: basePrompt }],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        }
      );

      summary = result.data.choices[0].message.content;
      onSummary(summary);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if(resume){
      handleSend();
    }
  }, [resume]);

  return (
    <div>
      <div className="AIPrompt">
      {/* <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your prompt here" className="AIContainer"/> */}
        {/* {<button onClick={handleSend} disabled={loading} className="sendButton">
          {loading ? 'Loading...' : 'Send'}
        </button> } */}
      </div>
      <div>
        {/* <strong>Response:</strong> */}
        {/* <p>{response}</p> */}
      </div>
    </div>
  );
};

export default Summarizer;

