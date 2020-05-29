import React, { Component } from 'react';
import axios from 'axios';
import Quake from './Quake';
import { GEO_URL } from "./constants.js"

class QuakesContainer extends Component {
    state= {
        quakeData: [],
    }


    componentDidMount() {
        axios.get(GEO_URL)
        .then(response => {
            // console.log(response.data.features[0].properties.title)
            this.setState({ quakeData: response.data.features})
            console.log(this.state.quakeData)
        })
    .catch(err => console.log(`Error: ${err}`))
    
    }

    render() {
        let quakes = this.state.quakeData
        let featMap = quakes.map(function(item,index,array){
            let facts = `${item.properties.title} / ${((Date.now() - item.properties.time)/3600000).toFixed()} hours ago`
            return <li id={`quake${index}`}>{facts}</li>
        });
        let disp = "Loading...";

        if (featMap) {
            disp = featMap
            // <Quake quakesList={quakesList} />
        }
        return (
            <div class="info">
                <ul>
                    {disp}
                </ul>
            </div>
        );
    }
}

export default QuakesContainer;
