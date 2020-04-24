import React, { Component } from 'react';

class Hog extends Component {
    state = {  
        isSelected: false
    }

    handleSelectToggle = () => {
        this.setState({
            isSelected: !this.state.isSelected
        })
    }
    render() { 
        const {name, specialty, greased, weight, image} = this.props.hogs
        return (  
            <div className="ui eight wide column" className="pigTile" onClick={this.handleSelectToggle}>
                <h1>{name}</h1>
                <img src={image} alt={name}></img>
                {this.state.isSelected &&
                    <div>
                        <h4>{specialty}</h4>
                        {greased ? <p>This piggy is Greesy</p> : <p>This piggy is NOT Greesy</p>}
                        <h4>{weight}</h4>
                        <p>Highest Metal Achieved: {this.props.hogs['highest medal achieved']}</p>
                    </div>
                }
            </div>
        );
    }
}

export default Hog;