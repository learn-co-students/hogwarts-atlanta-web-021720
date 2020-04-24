import piggy from "../porco.png";
import React from "react";

class Nav extends React.Component {

  render() {
    return (
      <div className="navWrapper">
        <button onClick={this.props.greeseFilter}>{this.props.isGreesy ? "Greese Filter: ON" : "Greese Filter: OFF"}</button>
        <span className="headerText">Hogwarts</span>
        <div className="TwirlyPig">
          <img src={piggy} className="App-logo" alt="piggy" />
        </div>
        <span className="normalText">A React App for County Fair Hog Fans</span>
          <button onClick={this.props.nameSort}>{this.props.isSortedByName ? "Name Sorted: ON" : "Name Sorted: OFF"}</button>
        <button onClick={this.props.weightSort}>{this.props.isSortedByWeight ? "Weight Sorted: ON" : "Weight Sorted: OFF"}</button>
      </div>
    );
  }
};

export default Nav;
