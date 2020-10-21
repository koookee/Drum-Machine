import React from 'react';

class Display extends React.Component{
  constructor(){
    super();
  }


  render(){
    let borderAround = {borderStyle:"solid",borderRadius: "10px", alignSelf:"center"};

    return(
      <div style={borderAround}>
      <h1 id="display">{this.props.audioName}</h1>
      </div>
    )
  }
}

export default Display;
