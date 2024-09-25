import { useState, useEffect, useRef } from 'react';

const useSpeechToText = (options = {}) => {
  const [isListening, setListening] = useState(false);
  const [transcript, setTranscript] = useState(''); 
  const recognitionRef = useRef(null);
  const [manualStop, setManualStop] = useState(false); // Track if stop button was manually pressed

  // Initialize a new instance of webkitSpeechRecognition on every start
  const initializeRecognition = () => {
    if (!('webkitSpeechRecognition' in window)) {
      console.error('Speech recognition is not supported in this browser');
      return null;
    }
    
    const recognition = new window.webkitSpeechRecognition();
    recognition.interimResults = options.interimResults || true;
    recognition.lang = options.lang || 'en-IN';
    recognition.continuous = options.continuous || true;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      let text = '';
      for (let i = 0; i < event.results.length; i++) {
        text += event.results[i][0].transcript;
      }
      setTranscript(text);
    };

    recognition.onerror = (event) => {
      console.error('Error occurred while listening:', event.error);
    };

    recognition.onend = () => {
      if (!manualStop) {
        recognition.start(); // Restart listening if it wasn't manually stopped
      } else {
        setListening(false);  // Set isListening to false when manually stopped
        // Ensure final transcript is captured here
        setTranscript((prev) => prev + ' ');
      }
    };

    return recognition;
  };

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const startListening = () => {
    if (!isListening) {
      recognitionRef.current = initializeRecognition(); // Create a new recognition instance
      if (recognitionRef.current) {
        setManualStop(false); // Reset manual stop flag
        recognitionRef.current.start();
        setListening(true);
      }
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      setManualStop(true);  // Ensure that we stop manually and don't restart automatically
      recognitionRef.current.stop();  // Stop the recognition service
      setListening(false);  // Update the listening state
    }
  };

  const reset = () => {
    setTranscript('');  // Reset the transcript in the hook
  };

  return {
    isListening,
    transcript,
    startListening,
    stopListening,
    reset,  // Expose reset function
  };
};

export default useSpeechToText;
