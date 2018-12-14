import React, { Component } from 'react';
class Buttons extends Component(){
  constructor (props) {
    super(props)}

  render(){
    return(
      <div id = "buttons">
        //<button onClick = {()=>{this.props.clickMethod("hello")}}>
        <button>3</button>
        <button>2</button>
        <button>1</button>
      </div>
    )
  }

}
export default Buttons;
