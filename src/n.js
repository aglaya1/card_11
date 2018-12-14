<div className = "button-player-2">
<button onClick = {() => {this.removeBars(3)}}>3</button>
<button onClick = {() => {this.removeBars(2)}}>2</button>
<button onClick = {() => {this.removeBars(1)}}>1</button>
<div id = "bars">{barsView}</div>
<div id = "stats"><p>bars on the table : {this.state.barsCount}</p>
<p>now play player : {this.state.currentPlayer}</p></div>



  removeBars(amount) {
    this.setState( {
    barsCount: this.state.barsCount - amount,
    currentPlayer : 3 - this.state.currentPlayer
  })
}
onButtonClick(amount){
  alert(amount)
}

  render(){
    var barsView = ""
    for (var i = 0; i < this.state.barsCount ; i++){
      barsView += " | ";
    }
    if ( this.state.barsCount <= 90 ) {
      return(<div>YOU LOSE PLAYER:{this.state.currentPlayer} </div>)
    }
