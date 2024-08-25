import React, { useState } from 'react';
import axios from 'axios';

const SimpleChat = ({ resume, label }) => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    setLoading(true);
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY; // Replace with your actual API key

    let basePrompt = `You are a ${label}. Can you introduce yourself by summarizing the following resume content. ${resume}`;


    try {
      const result = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        }
      );

      setResponse(result.data.choices[0].message.content);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your prompt here" /> */}
      <button onClick={handleSend} disabled={loading}>
        {loading ? 'Loading...' : 'Send'}
      </button>
      <div>
        <strong>Response:</strong>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default SimpleChat;