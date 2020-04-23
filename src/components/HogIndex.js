import React, { Component } from "react"
import Hog from "./Hog"
export default class HogIndex extends Component {



    renderHogs = () => {
        const allHogs = this.props.allHogs
        this.props.sortByName && allHogs.sort(this.compareName)
        this.props.sortByWeight && allHogs.sort(this.compareWeight)
        return allHogs.map(hog =>
            this.props.greaseFilter ? hog.greased && <Hog hog={hog} /> : <Hog hog={hog} />
        )

    }

    compareName = (a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }

    compareWeight = (a, b) => {
        if (a.weight < b.weight) {
            return -1;
        }
        if (a.weight > b.weight) {
            return 1;
        }
        return 0;
    }

    render() {
        const returnHogs = this.renderHogs()
        return (
            <div className="ui grid container">
                {returnHogs}
            </div>
        )
    }
}