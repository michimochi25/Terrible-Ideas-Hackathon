import React, { useState, useEffect } from 'react';

function AIbot() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXJyaWJsZS5pZGVhQG9wZW5vbmlvbi5haSIsImV4cCI6NTMyNDQ3MDc1Mn0.bbgVzig8BmUk-87Qko5anRhcQARQfAbbkgRc2qivYLw";

    useEffect(() => {
        const url = 'https://api.closeonion.com/api/v1/chat/premium_message';

        fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
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
                  }
            ),
        })
            .then((response) => {
                if (!response.ok) {
                    console.log(response.status)
                    throw new Error('Network response was not ok');
                }
                console.log('Content-Type:', response.headers.get('Content-Type'));
                const r = response.json();
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

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Data from API</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default AIbot;