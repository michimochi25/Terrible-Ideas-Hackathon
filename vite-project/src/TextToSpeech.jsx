import React, { useState, useEffect } from 'react';
const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');
const client = new textToSpeech.TextToSpeechClient()


async function TextToSpeech(text) {
    const request = {
        input: {text: text},
        voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
        audioConfig: {audioEncoding: 'MP3'},
      };

    const [response] = await client.synthesizeSpeech(request);
    const writeFile = util.promisify(fs.writeFile);
    await writeFile('output.mp3', response.audioContent, 'binary');
    // console.log('Audio content written to file: output.mp3');
    
    return (
        <div>
            <h1>Text to speech</h1>
        </div>
    );
}

export default TextToSpeech;
