import React from 'react';
import Button from './Buttons.js';

class DrumMachine extends React.Component{
  constructor(){
    super();
    this.state = {};
  }
  render(){
    let borderAround = {borderStyle:"solid",borderRadius: "10px", alignSelf:"center"}
    let drumMachineDisplay = {
      display:"flex",
      borderStyle:"solid",
      justifyContent:"space-evenly"
    }
    return(
      <div id="drum-machine" style={drumMachineDisplay}>
      <Button />
      <h1 id="display" style={borderAround}>Drum machine</h1>
      </div>
    )
  }
}

export default DrumMachine;
