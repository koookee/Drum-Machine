import React from 'react';
import Button from 'react-bootstrap/Button';

class Buttons extends React.Component{
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }
  handleClick(e){
    console.log(e.target.id);
    let audio = document.getElementById("Q")
    audio.play();
  }
  componentDidMount() {
		window.addEventListener("keyup", this.keyPress);
	}
  keyPress(event){
		let key = event.key;
    console.log(key);
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
        <Button variant="light" size="lg" className="drum-pad" id="test1" onClick={this.handleClick}>Q
        <audio style={{display:"none"}} controls className="clip" id="Q">
        <source src="https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/295[kb]big-verby-clap.wav.mp3" type="audio/mpeg" />
        </audio>
        </Button>
        <Button variant="light" size="lg" className="drum-pad" id="test2">W</Button>
        <Button variant="light" size="lg" className="drum-pad" id="test3">E</Button>
        <Button variant="light" size="lg" className="drum-pad" id="test4">A</Button>
        <Button variant="light" size="lg" className="drum-pad" id="test5">S</Button>
        <Button variant="light" size="lg" className="drum-pad" id="test6">D</Button>
        <Button variant="light" size="lg" className="drum-pad" id="test7">Z</Button>
        <Button variant="light" size="lg" className="drum-pad" id="test8">X</Button>
        <Button variant="light" size="lg" className="drum-pad" id="test9">C</Button>
      </div>
    )
  }
}

export default Buttons
