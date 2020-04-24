import piggy from "../porco.png";
import React from "react";
import Sort from "./Sort"
const Nav = (props) => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <button onClick = {props.handleFiltered}> {props.filtered ? 'Show All ‘dem Hogs' : 'Gimme Greased Hogs'}</button>
      <Sort handleSort = {props.handleSort}/>
    </div>
  );
};

export default Nav;
