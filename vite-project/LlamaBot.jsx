import React, { useState } from 'react';
import axios from 'axios';

const LlamaBot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'http://localhost:11434/api/chat',
        {
            model: "llama3",
            messages: [{ role: 'user', content: input }]
        }
      );

      setMessages([...messages, { role: 'user', content: input }, { role: 'assistant', content: response.data.generated_text }]);
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
      <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSend} disabled={loading}>
        {loading ? 'Sending...' : 'Send'}
      </button>
    </div>
  );
};

export default LlamaBot;