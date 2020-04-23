import piggy from "../porco.png";
import React, { Component } from "react"
class Nav extends Component {

  render() {
    return (
      <div className="navWrapper">
        <button id="greaseFilterBtn" onClick={this.props.handleGreaseFilter}>Grease Filter: OFF</button>
        <button id="sortByNameBtn" onClick={this.props.handleSortByName}>Sort By Name</button>
        <button id="sortByWeightBtn" onClick={this.props.handleSortByWeight}>Sort By Weight</button>
        <span className="headerText">Hogwarts</span>
        <div className="TwirlyPig">
          <img src={piggy} className="App-logo" alt="piggy" />
        </div>
        <span className="normalText">A React App for County Fair Hog Fans</span>
      </div>
    )
  }
}


export default Nav;
