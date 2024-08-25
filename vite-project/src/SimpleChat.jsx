import React, { useState } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';

const SimpleChat = ({ label, onResponse }) => {
  const [input, setInput] = useState('');
  // const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  let response = '';

  let basePrompt = `Can you come up with a resume for a ${label}? The resume should consists of skills suitable for a normal job that makes logical sense. Also include a superhero alter ego for the ${label}. Make it as comprehensive as you can while making it funny. Be sure to include experiences and skills that it would have and would be relevant for these jobs. You can use your imagination as long as it makes sense. You can make connections to elements from the popular culture in Australia as well as elements from its hypothetical daily life.`;

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

      response = result.data.choices[0].message.content;
      onResponse(response);

      // downloadFile(response, Date.now() + 'resume');
      generatePDF(response, Date.now() + 'resume.pdf');
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    } finally {
      setLoading(false);
    }
  };

  // const downloadFile = (content, fileName) => {
  //   const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  //   const url = URL.createObjectURL(blob);
  //   const a = document.createElement('a');
  //   a.href = url;
  //   a.download = fileName;
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  //   URL.revokeObjectURL(url);
  // };

  const generatePDF = (text, fileName) => {
    const doc = new jsPDF();
    doc.text(text, 10, 10);
    doc.save(fileName); // Trigger the download
  };

  return (
    <div>
      <div className="AIPrompt">
      {/* <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your prompt here" className="AIContainer"/> */}
        <button onClick={handleSend} disabled={loading} className="sendButton">
          {loading ? 'Loading...' : 'Send'}
        </button>
      </div>
      <div>
        <strong>Response:</strong>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default SimpleChat;