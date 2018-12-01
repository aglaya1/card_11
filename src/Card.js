import React, { Component } from 'react';
class Card extends Component{

    constructor () {
      super()
      this.state = {
        img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7W8lD4z59Stf1ZnC5OBArqxwknrVFmw4sZGgXkaBrIRBF1QPn5Q"
    }
      }


    aglaya () {
      this.setState( {
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTS1hevM-88hmiqyYOeeCeVUTzCS63jl31LEyLAIjY7AKWXDVe"
      })
    }

  render(){
    return(

      <div >
      {this.state.test}{this.props.children}

      <h1>{this.state.num}</h1>
      <div className="demo-card-square mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title mdl-card--expand">
          <h2 className="mdl-card__title-text"><b>hi</b></h2>
        </div>
        <div className="mdl-card__supporting-text">

        </div>
        <div className="mdl-card__actions mdl-card--border">
          <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            more cards
          </a>
        </div>
      </div>
      <button onClick={() => {this.aglaya()}}></button>
       </div>
    );
  }
}
export default Card;
