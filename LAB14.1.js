
import React from 'react';
import './App.css';
import srcImage from './im.jpg'; // Updated import path

function App() {
  return (
    <div className="App">
      {/* Image from public folder */}
      <div>
        <p>Image from public folder</p>
        <img
          src="/pub.jpg"
          alt="Public Folder"
          width={400}
        />
      </div>

      {/* Image from src folder */}
      <div>
        <p>Image from src/Images folder</p>
        <img
          src={srcImage}
          alt="Src Folder"
          width={400}
        />
      </div>
    </div>
  );
}

export default App;