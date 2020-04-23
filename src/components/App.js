import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogIndex from "./HogIndex"


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      allHogs: hogs,
      greaseFilter: false,
      sortByName: false,
      sortByWeight: false
    }
  }

  //Handle Grease Filter
  handleGreaseFilter = () => {
    console.log("Before", this.state.greaseFilter)
    this.setState({ greaseFilter: !this.state.greaseFilter })
    this.state.greaseFilter ?
      document.querySelector("#greaseFilterBtn").innerHTML = "Grease Filter: OFF"
      :
      document.querySelector("#greaseFilterBtn").innerHTML = "Grease Filter: ON"
  }
  //Handle Sort By Name
  handleSortByName = () => {
    console.log("Before Name Sort:  ", this.state.sortByName)
    this.setState({ sortByName: !this.state.sortByName })
  }

  //Handle Sort By Weight
  handleSortByWeight = () => {
    console.log("Before Weight Sort: ", this.state.sortByWeight)
    this.setState({ sortByWeight: !this.state.sortByWeight })
  }

  render() {

    return (
      <div className="App">
        <Nav
          handleGreaseFilter={this.handleGreaseFilter}
          handleSortByName={this.handleSortByName}
          handleSortByWeight={this.handleSortByWeight}
        />
        <div>
          <HogIndex
            allHogs={this.state.allHogs}
            greaseFilter={this.state.greaseFilter}
            sortByName={this.state.sortByName}
            sortByWeight={this.state.sortByWeight}
          />
        </div>
      </div>


    );
  }
}
