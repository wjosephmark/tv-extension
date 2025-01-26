import React from 'react';
import FolderSearch from './folder-search.jsx';

const App = () => {
	const audioRef = React.useRef(null);

  // Function to handle the button click and play audio
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

	// Handle file/folder selection
	// const handleFileChange = (event) => {
	// 	const selectedFiles = event.target.files;
	// 	const filesArray = Array.from(selectedFiles).map(file => file.name); // Convert file list to array of file names
	// 	setFiles(filesArray); // Update state with the selected files
	// };

		
	return (
    <main>
      <h1>Hello Trader!</h1>

      {/* Audio player */}
      <div>
        <button onClick={playAudio}>Play Audio</button>
        <audio ref={audioRef} src="audios/sussy.mp3" />
      </div>

      {/* File and folder selection */}
      {/* <div>
        <h2>File Explorer</h2>
        <input 
          type="" 
          onChange={handleFileChange} 
          multiple 
        />
        <button onClick={() => console.log(files)}>Print Files</button>

        <div>
          <h3>Files and Folders:</h3>
          <ul>
            {files.map((file, index) => ( 
              <li key={index}>{file}</li>
            ))}
          </ul>
        </div>
      </div> */}
    </main>
  );
};

export default App;