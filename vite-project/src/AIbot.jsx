import React, { useState, useEffect } from 'react';
// import { json } from 'react-router-dom';
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
                // console.log("======================");
                // console.log(response.text());


                // const r = response.json();

                const r = response.text();

                console.log(r);
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

    // to-do: refactor later
    const words = data.split('}');
    const result = [];
    for (let word of words) {
        word = word.replace('data: {"answer": "', '');
        word = word.replace('"', '');
        result.push(word);
    }

    console.log(result);

    return (
        <div>
            <h1>Data from API</h1>
            <p>{result}</p>
            {/* <p>{JSON.stringify(data, null, 2)}</p> */}

        </div>
    );
}

export default AIbot;