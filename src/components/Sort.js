import React, { Component } from "react";

class Sort extends Component {  


  render() {
    
    return (
        <div >
            <select onChange = {this.props.handleSort} name="cars">
            <option value="">All</option>
            <option value="Name">Name</option>
            <option value="Weight">Weight</option>
            </select>
        </div>

    );
  }
}

export default Sort;
