import React from 'react';
import '../CSS/Display.css';

class Display extends React.Component{
  constructor(){
    super();
  }


  render(){
    let borderAround = {alignSelf:"center", flex:"0 0 auto", width:"20%"};

    return(
      <div style={borderAround}>
      <h4 id="display" style={{fontFamily:"Verdana"}}>{this.props.audioName}</h4>
      </div>
    )
  }
}

export default Display;
