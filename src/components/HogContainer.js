import React, { Component } from "react";
import HogCard from "./HogCard";

class HogContainer extends Component {  

  createCards = () => {
    return this.props.hogsData.map(
         hog => <HogCard hog = {hog}/> 
    ) 
  }

  render() {
    console.log(this.props.hogsData);
    
    return (
        <div className = 'ui grid container'>
            <h1>HogContainer</h1>  
            {this.createCards()}
        </div>

    );
  }
}

export default HogContainer;