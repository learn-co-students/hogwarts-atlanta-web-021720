import React, { Component } from "react";
import CardDetail from './CardDetail'

class HogCard extends Component {  

  state =
  {
      details: false
  }  

  getHogImageUrl(name)
  {
    // let retVal = 'http://localhost:3000/hog-imgs/'+name.toLowerCase().replace(" ", "_")+'.jpg';
    // let retVal = '/hog-imgs/'+name.toLowerCase().replace(" ", "_")+'.jpg';
    let retVal = '/hog-imgs/'+name.toLowerCase().split(' ').join('_')+'.jpg';
    // .split(' ').join('_')
    return retVal;
  }  

  toggleDetails = (event) =>
  {
    this.state.details ? this.setState({details: false}) : this.setState({details: true})      
  }

  render() {
    
    return (
        <div onClick = {this.toggleDetails} className = 'ui eight wide column'>
            <h1>{this.props.hog.name }</h1>
            <img src = {this.getHogImageUrl(this.props.hog.name)} />
            {this.state.details ? <CardDetail hog = {this.props.hog}/> : ''}
        </div>

    );
  }
}

export default HogCard;
