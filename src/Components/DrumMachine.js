import React from 'react';
import Button from './Buttons.js';

class DrumMachine extends React.Component{
  constructor(){
    super();
    this.state = {};
  }
  render(){
    let borderAround = {borderStyle:"solid"} //Just to see flex child containers
    let drumMachineDisplay = {
      display:"flex",
      borderStyle:"solid",
      justifyContent:"space-evenly"
    }
    return(
      <div id="drum-machine" style={drumMachineDisplay}>
      <Button />
      <h1 style={borderAround}>Drum machine</h1>
      </div>
    )
  }
}

export default DrumMachine;
