import React, { Component } from "react";

class CardDetail extends Component {  

  render() {
    
    return (
        // console.log(this.props)
        //debugger;
        <div>
            <p>{this.props.hog.specialty}</p>
            <p>{this.props.hog.greased? 'Greased' : 'Not Greased'}</p>
            <p>{this.props.hog.weight}</p>
            <p>{this.props.hog['highest medal achieved']}</p>
        </div>

    );
  }
}

export default CardDetail;