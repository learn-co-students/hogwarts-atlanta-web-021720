import React, { Component } from 'react';
import Hog from './Hog';

class HogIndex extends Component {
    state = {  
        unsortedHogs: this.props.allHogs
    }

    sorted = () => {
        const hogs = this.props.allHogs
        if(this.props.isSortedByName) {
            hogs.sort((a, b) => {
                if(a.name < b.name) {
                    return -1
                }
                if(b.name > a.name) {
                    return 1
                }
                return 0
            })
        }else if(this.props.isSortedByWeight) {
            hogs.sort((a, b) => {
                if(a.weight > b.weight) {
                    return -1
                }
                if(b.weight < a.weight) {
                    return 1
                }
                return 0
            })
        }
        return hogs
    }

    filterHogData = () => {
        if(!this.props.greeseFilter) {
            return this.sorted()
        } else {
            return this.sorted().filter(hog => {
                return hog.greased === true
            })
        }
    }

    renderHogs = () => {
        return this.filterHogData().map(hog => 
            <Hog 
            key={hog.id}
            hogs={hog}/>
        )
    }

    render() { 
        //console.log(this.props.allHogs)
        const renderingHogs = this.renderHogs()
        return (  
            <div className="ui grid container">
                {renderingHogs}
            </div>
        );
    }
}

export default HogIndex;