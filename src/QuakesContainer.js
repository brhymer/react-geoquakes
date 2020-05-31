import React, { Component } from 'react';


class QuakesContainer extends Component {

    render() {
        let quakes = this.props.quakeData
        let featMap = quakes.map(function(item,index,array){
            let facts = `${item.properties.title} / ${((Date.now() - item.properties.time)/3600000).toFixed()} hours ago`
            return <li className="quake">{facts}</li>
        });
        let disp = "Loading...";

        if (featMap) {
            disp = featMap
        }
        return (
            <div className="info">
                <ul>
                    {disp}
                </ul>
            </div>
        );
    }
}

export default QuakesContainer;
