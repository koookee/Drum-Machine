import React from 'react';
import './App.css';
import DrumMachine from './Components/DrumMachine.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{height: "100%",position: "absolute",left: "0",width: "100%",overflow: "hidden",backgroundColor:"#D3DBFF"}}>
    <DrumMachine />
    </div>
  );
}

export default App;
