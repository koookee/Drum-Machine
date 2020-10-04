import React from 'react';
import './App.css';
import DrumMachine from './Components/DrumMachine.js'

function App() {
  //Displays the flexbox close to the center of the page
  let flexDisplay = {
    margin:"15% auto",
    width:"50%"
  }
  return (
    <div style={flexDisplay}>
    <DrumMachine />
    </div>
  );
}

export default App;
