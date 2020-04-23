import React, { Component } from "react";

export default class Hog extends Component {

    constructor() {
        super();
        this.state = {
            detailsShow: false
        }
    }

    handleClick = () => {
        this.setState({ detailsShow: !this.state.detailsShow })
    }

    render() {
        const hog = this.props.hog
        return (
            <div className="ui eight wide column" className="pigTile">
                <h1>{hog.name}</h1>
                <img src={hog.image} alt={hog.name} onClick={this.handleClick}></img>
                {this.state.detailsShow &&
                    <div>
                        <h3>Speciality: {hog.specialty}</h3>
                        <h3>Piggy Greased?</h3>
                        {hog.greased ? <p>This piggy is greasy!</p> : <p>No grease here!</p>}
                        <h3>Weight: {hog.weight}</h3>
                        <h3>Highest Medal Achieved: </h3>
                        <p>{hog["highest medal achieved"]}</p>
                    </div>
                }
            </div>
        )

    }
}