import React, { useState, useEffect } from 'react';
export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXJyaWJsZS5pZGVhQG9wZW5vbmlvbi5haSIsImV4cCI6NTMyNDQ4Mzc3Mn0.4coCRAgTFqsnqnbLhZXzZItKtenChNOSQTqEL3brPiQ";
export const urlBASE = 'https://api.closeonion.com';

function AIbot() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = urlBASE + '/api/v1/chat/premium_message';
        const bodyJson = {
            "messages": [
              {
                "role": "user",
                "content": "how to apply COE?"
              }
            ],
            "stream": false,
            "model": "Resumaniac",
            "temperature": 0,
            "presence_penalty": 0,
            "frequency_penalty": 0,
            "top_p": 0
        };

        const headerJson = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        };

        fetch(
            url, 
            {
                method: 'POST',
                headers: headerJson,
                body: JSON.stringify(bodyJson),
            })
            .then((response) => {
                if (!response.ok) {
                    console.log(response.status)
                    throw new Error('Network response was not ok');
                }
                console.log('Content-Type:', response.headers.get('Content-Type'));

                const r = response.text();
                return r;
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []); // Empty dependency array means this useEffect runs once after the initial render

    useEffect(() => {
        if (data) {
            const words = data.split('}');
            const content = words
                            .map(word => word.replace('data: {"answer": "', '').replace('"', ''))
                            .join('');

            const handleDownload = () => {
                const blog = new Blob([content], { type: 'text/markdown;charset=utf-8' });
                const resumeUrl = URL.createObjectURL(blog);
        
                const resume = document.createElement('a');
                resume.href = resumeUrl;
                resume.download = Date.now() + 'resume.html';

                resume.click();
            };

            handleDownload();
        }
    }, [data]); // runs when data changes


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // console.log(content);


    return (
        <div>
            <h1>Data from API</h1>
            <p>{data}</p>
            {/* <button onClick={handleDownload}>Download Resume</button> */}


            {/* <p>{JSON.stringify(data, null, 2)}</p> */}

        </div>
    );
}

export default AIbot;