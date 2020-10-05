import React from 'react';
import Button from 'react-bootstrap/Button';

class Buttons extends React.Component{
  constructor(){
    super();
  }
  render(){
    let buttonsDisplay = {
    display:"grid",
    gridTemplateColumns:"auto auto auto",
    gridTemplateRows:"auto auto auto",
    gap:"5px"
  }
    return(
      <div style={buttonsDisplay}>
        <Button variant="light" size="lg">Q</Button>
        <Button variant="light" size="lg">W</Button>
        <Button variant="light" size="lg">E</Button>
        <Button variant="light" size="lg">A</Button>
        <Button variant="light" size="lg">S</Button>
        <Button variant="light" size="lg">D</Button>
        <Button variant="light" size="lg">Z</Button>
        <Button variant="light" size="lg">X</Button>
        <Button variant="light" size="lg">C</Button>
      </div>
    )
  }
}

export default Buttons
