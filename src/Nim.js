import React, { Component } from 'react';
class Nim extends Component{

    constructor (props) {
      super(props)
      this.state = {
        barsCount: this.props.count,
        currentPlayer : 1
      }

    }


  removeBars(amount) {
    this.setState( {
    barsCount: this.state.barsCount - amount,
    currentPlayer : 3 - this.state.currentPlayer
  })
}


  render(){
    var barsView = ""
    for (var i = 0; i < this.state.barsCount ; i++){
      barsView += " | ";
    }
    if ( this.state.barsCount <= 90 ) {
      return(<div>YOU LOSE PLAYER:{this.state.currentPlayer} </div>)
    }


    return(
      <div>
        <div id = "stats"><p>bars on the table : {this.state.barsCount}</p>
        <p>now play player : {this.state.currentPlayer}</p></div>
        <div id = "bars">{barsView}</div>
        <div id = "buttons">
          <div className = "button-player-1">
          <button onClick = {() => {this.removeBars(3)}}>3</button>
          <button onClick = {() => {this.removeBars(2)}}>2</button>
          <button onClick = {() => {this.removeBars(1)}}>1</button>
          </div>
          <div className = "button-player-2">
          <button onClick = {() => {this.removeBars(3)}}>3</button>
          <button onClick = {() => {this.removeBars(2)}}>2</button>
          <button onClick = {() => {this.removeBars(1)}}>1</button>
          </div>
        </div>





      </div>
    )
  }


}
export default Nim;
