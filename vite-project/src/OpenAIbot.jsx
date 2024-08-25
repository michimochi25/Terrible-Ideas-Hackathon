import React, { useState } from 'react';
import axios from 'axios';

const OpenAIbot = ({ label }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  let basePrompt = `Can you come up with a resume for a {$label}? The resume should consists of skills suitable for a normal job that makes logical sense and a superhero alter ego. Make it as comprehensive as you can while making it funny. Be sure to include experiences and skills that it would have and would be relevant for these jobs. You can use your imagination as long as it makes sense. You can make connections to elements from the popular culture in Australia as well as elements from its hypothetical daily life.`;

  const handleSend = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4-turbo',
          messages: [{ role: 'user', content: input }],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          },
        }
      );

      setMessages([...messages, { role: 'user', content: input }, { role: 'assistant', content: response.data.choices[0].message.content }]);
      setInput('');
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index} className={msg.role}>
            <strong>{msg.role === 'user' ? 'You' : 'Assistant'}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <textarea value={input} onChange={(e) => setInput()} />
      <button onClick={handleSend} disabled={loading}>
        {loading ? 'Sending...' : 'Send'}
      </button>
    </div>
  );
};

export default OpenAIbot;