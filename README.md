
# Voice Enabled Note-Taking Application

A simple, interactive note-taking application powered by **React.js** and **Web Speech API**. This web app allows users to dictate their notes via voice, and the speech is transcribed in real-time. The app also includes functionalities for starting and stopping voice input, copying transcribed notes, and resetting the input.

## Features
- **Voice Recognition**: Uses the Web Speech API for real-time voice-to-text transcription.
- **Start/Stop Listening**: Users can control when the app listens for voice input.
- **Copy to Clipboard**: Easily copy your transcribed notes to the clipboard.
- **Reset Functionality**: Clear all the current transcription with a single click.
- **Responsive UI**: A clean and user-friendly interface built with custom CSS.

## Demo
[Add a link to a live demo or screenshots if available]

## Tech Stack
- **React.js**: Frontend framework for building the user interface.
- **Web Speech API**: For real-time speech-to-text functionality.
- **HTML5/CSS3**: For structuring and styling the app.
- **JavaScript (ES6+)**: Core language for logic and functionality.
- **Vite**: Development environment and build tool for fast project setup.

## Installation

### Prerequisites
- **Node.js** (v12 or higher)
- **npm** or **yarn** (package managers)

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/voice-note-app.git
   cd voice-note-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # OR
   yarn install
   ```

3. **Run the application**:
   ```bash
   npm run dev
   # OR
   yarn dev
   ```

4. **Open in Browser**:  
   Open your browser and navigate to `http://localhost:3000/` to access the app.

## Usage

1. Click on the **Start Listening** button to start the voice transcription.
2. Speak into your device's microphone, and your speech will be transcribed in real-time.
3. Click on **Stop Listening** to pause the transcription.
4. Use the **Copy** button to copy the transcribed text to your clipboard.
5. Press **Reset** to clear all text and restart.

## Code Overview

### Main Components

- **App.jsx**: The root component managing the overall app state and layout.
- **useSpeechToText.jsx**: A custom React hook that handles the speech-to-text functionality using the Web Speech API.

### Key Functionalities

- **Speech Recognition**: The `useSpeechToText` hook manages the speech recognition logic, including starting, stopping, and resetting the recognition service.
- **Clipboard Copy**: Implemented using the browser's `navigator.clipboard` API.
- **Reset Functionality**: Clears the current transcript and state.

## Known Issues
- The Web Speech API may not be supported in all browsers. Please use Chrome or another supported browser.
- Microphone permissions must be granted for the app to work.

## Future Enhancements
- Add support for multiple languages.
- Display an indication of when the app is actively listening (e.g., a flashing microphone icon).
- Add the ability to save and manage multiple notes.
- Improve mobile responsiveness.

## Browser Compatibility
This application has been tested on the following browsers:
- Chrome
- Edge

Please note that **Safari** and  **Mozilla Firefox**  may not fully support the Web Speech API.

## Contributing
Pull requests and contributions are welcome! Please open an issue first to discuss what you would like to change.

## Author
- Muskan Choudhary : [Muskan Choudhary](https://github.com/muskanchoudhary001)

