import React from 'react';
import Button from 'react-bootstrap/Button';
import '../CSS/buttons.css';

class Buttons extends React.Component{
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }
  handleClick(e){
    let audioTypeToKey = {
      "chord 1":"Q",
      "chord 2":"W",
      "chord 3":"E",
      "shaker":"A",
      "HH 1":"S",
      "HH 2":"D",
      "clap":"Z",
      "snare":"X",
      "kick":"C"
    }
    //When the user clicks on the audio before it finishes playing, it repeats the audio
    //insted of forcing the user to sit through the entire clip
    let audio = document.getElementById(audioTypeToKey[e.target.id]);
    audio.pause();
    audio.currentTime = 0;
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
    let audioArr = [
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Melodic%20Stabs%20and%20Hits/356[kb]one-staggered-epiano-chord-2.wav.mp3",
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Melodic%20Stabs%20and%20Hits/299[kb]one-gentle-epiano-hit.wav.mp3",
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Melodic%20Stabs%20and%20Hits/1166[kb]stab-satisfying-1.wav.mp3",
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/116[kb]shekere1.aif.mp3",
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Cymbals/93[kb]curiouscym2.aif.mp3",
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Cymbals/78[kb]opencym.aif.mp3",
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/295[kb]big-verby-clap.wav.mp3",
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/45[kb]ec-sn032.wav.mp3",
    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Punches%20Hits%20Discoblasts/1181[kb]drop-kick-05.wav.mp3"
  ]
    return(
      <div style={buttonsDisplay}>

        <Button variant="light" size="lg" className="drum-pad" id="chord 1" onClick={this.handleClick}>Q
        <audio className="clip" id="Q" src={audioArr[0]} type="audio/mpeg" />
        </Button>

        <Button variant="light" size="lg" className="drum-pad" id="chord 2" onClick={this.handleClick}>W
        <audio className="clip" id="W" src={audioArr[1]} type="audio/mpeg" />
        </Button>

        <Button variant="light" size="lg" className="drum-pad" id="chord 3" onClick={this.handleClick}>E
        <audio className="clip" id="E" src={audioArr[2]} type="audio/mpeg" />
        </Button>

        <Button variant="light" size="lg" className="drum-pad" id="shaker" onClick={this.handleClick}>A
        <audio className="clip" id="A" src={audioArr[3]} type="audio/mpeg" />
        </Button>

        <Button variant="light" size="lg" className="drum-pad" id="HH 1" onClick={this.handleClick}>S
        <audio className="clip" id="S" src={audioArr[4]} type="audio/mpeg" />
        </Button>

        <Button variant="light" size="lg" className="drum-pad" id="HH 2" onClick={this.handleClick}>D
        <audio className="clip" id="D" src={audioArr[5]} type="audio/mpeg" />
        </Button>

        <Button variant="light" size="lg" className="drum-pad" id="clap" onClick={this.handleClick}>Z
        <audio className="clip" id="Z" src={audioArr[6]} type="audio/mpeg" />
        </Button>

        <Button variant="light" size="lg" className="drum-pad" id="snare" onClick={this.handleClick}>X
        <audio className="clip" id="X" src={audioArr[7]} type="audio/mpeg" />
        </Button>

        <Button variant="light" size="lg" className="drum-pad" id="kick" onClick={this.handleClick}>C
        <audio className="clip" id="C" src={audioArr[8]} type="audio/mpeg" />
        </Button>

      </div>
    )
  }
}

export default Buttons
