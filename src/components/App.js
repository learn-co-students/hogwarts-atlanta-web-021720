import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogIndex from "./HogIndex";

class App extends Component {

  state = {
    allHogs: hogs,
    greeseFilter: false,
    sortByName: false,
    sortByWeight: false
  }

  handleGreeseToggle = () =>{
    this.setState({
      greeseFilter: !this.state.greeseFilter
    })
  }

  handleNameToggle = () => {
    this.setState({
      sortByName: !this.state.sortByName
    })
  }

  handleWeightToggle = () => {
    this.setState({
      sortByWeight: !this.state.sortByWeight
    })
  }



  render() {
    return (
      <div className="App">
        <Nav 
        isGreesy={this.state.greeseFilter}
        greeseFilter={this.handleGreeseToggle}
        isSortedByName={this.state.sortByName}
        nameSort={this.handleNameToggle}
        isSortedByWeight={this.state.sortByWeight}
        weightSort={this.handleWeightToggle}/>
        <div>
        <HogIndex 
        allHogs={this.state.allHogs}
        greeseFilter={this.state.greeseFilter}
        isSortedByName={this.state.sortByName}
        isSortedByWeight={this.state.sortByWeight}/>
        </div>
      </div>
    );
  }
}

export default App;
