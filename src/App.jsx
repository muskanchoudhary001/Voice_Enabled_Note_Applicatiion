import React, { useState } from 'react';
import './App.css';
import useSpeechToText from './Hooks/useSpeechToText'; // Import the custom hook

const App = () => {
  const [textInput, setTextInput] = useState(''); // State to store the final transcript
  const { isListening, transcript, startListening, stopListening, reset } = useSpeechToText({ continuous: true });

  // Stop listening and append the final transcript to the textInput
  const stopVoiceInput = () => {
    // Stop listening first
    stopListening();

    // Use a timeout to allow the final transcript to update before setting textInput
    setTimeout(() => {
      setTextInput(prevVal => prevVal + (transcript.length ? (prevVal.length ? ' ' : '') + transcript : ''));
    }, 500); // You may adjust the delay time as needed.
  };


  // Copy the transcript to clipboard
  const copyToClipboard = () => {
    if (textInput) {
      navigator.clipboard.writeText(textInput)
        .then(() => alert('Text copied to clipboard!'))
        .catch((err) => console.error('Failed to copy text:', err));
    } else {
      alert('No text available to copy!');
    }
  };

  // Reset the transcript and textInput
  const resetTranscript = () => {
    setTextInput(''); // Clear the textInput state
    reset && reset(); // Clear the transcript from the hook
  };

  return (
    <div className="container">
      <h2>Voice Enabled Note Application</h2>
      <br />

      {/* Textarea for displaying transcript */}
      <textarea
        value={textInput + (isListening && transcript.length ? (textInput.length ? ' ' : '') + transcript : '')}
        onChange={(e) => setTextInput(e.target.value)}
        placeholder="Transcribed text will appear here..."
        readOnly
        rows={10}
        className="transcript-textarea"
      />

      <div className="btn-style">
        <button
          style={{ backgroundColor: '#0066b2' }}
          onClick={startListening}
          className="start-button"
          disabled={isListening} // Disable button if already listening
        >
          Start Listening
        </button>
        <button
          style={{ backgroundColor: '#e91e63' }}
          onClick={stopVoiceInput}
          className="stop-button"
          disabled={!isListening} // Disable button if not listening
        >
          Stop Listening
        </button>
        <button className="copy-button" onClick={copyToClipboard}>
          Copy
        </button>
        <button className="reset-button" onClick={resetTranscript}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
