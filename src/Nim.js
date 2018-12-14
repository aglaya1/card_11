import React, { Component } from 'react';
class Nim extends Component{

    constructor (props) {
      super(props)
      this.state = {
        barsCount: this.props.count,
        currentPlayer : 1
      }

    }
  render(){



    return(
      <div>
        <div>
          <stats currentPlayer = {this.state.currentPlayer}/>
        </div>
        <div>
          <bars initBars = "100" barsLeft = {this.state.barsCount}/>
        </div>
        <div>
          <buttons clickMethod = {this.onButtonClick} forPLayer = "1" currentPlayer = {this.state.currentPlayer}/>

        </div>
        <div>
          <buttons forPLayer = "2" currentPlayer = {this.state.currentPlayer}/>
        </div>
      </div>

    )
  }


}
export default Nim;
