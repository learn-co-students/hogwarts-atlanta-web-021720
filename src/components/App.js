import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";
// import Sort from "./Sort"

class App extends Component {

  state =
  {
    hogs: hogs,
    filtered : false,
    sort: ''
  }

  handleFiltered = () =>
  {
    this.setState({filtered: !this.state.filtered})
  }

  handleSort = (event) =>
  {
    //debugger
    //console.log('handleSort', event)
    this.setState({sort: event.target.value})
  }

  selectHogs = () =>
  {
    let retVal = [];
    let hogs = this.state.hogs;

    if(this.state.sort === 'Name')
    {
      hogs = hogs.sort((a,b)=>{
        return (a.name > b.name ? 1 : -1)
      })
    }else if(this.state.sort === 'Weight')
    {
      hogs = hogs.sort((a,b)=>{
        return (a.weight > b.weight ? 1 : -1)
      })
    }
    //list.sort((a, b) => (a.color > b.color) ? 1 : -1

    if( this.state.filtered ) 
    {
      // retVal
      retVal = hogs.filter(hog => hog.greased ===true);
    }
    else 
    {
      retVal = hogs;
    }

    // retVal.sort

    return retVal;
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Nav handleFiltered = {this.handleFiltered} filtered = {this.state.filtered} handleSort = {this.handleSort}/>
        <HogContainer hogsData = {this.selectHogs()} />
      </div>
    );
  }

  // render() {
  //   console.log(this.state)
  //   return (
  //     <div className="App">
  //       <Nav handleFiltered = {this.handleFiltered}/>
  //       <HogContainer hogsData = {this.state.hogs} />
  //     </div>
  //   );
  // }
}

export default App;
