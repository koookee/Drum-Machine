import React from 'react';

class DrumMachine extends React.Component{
  constructor(){
    super();
    this.state = {};
  }
  render(){
    let borderAround = {borderStyle:"solid"} //Just to see flex child containers
    let drumMachineDisplay = {display:"flex",borderStyle:"solid"};
    return(
      <div id="drum-machine" style={drumMachineDisplay}>
      <h1 style={borderAround}>Drum machine</h1>
      </div>
    )
  }
}

export default DrumMachine;
