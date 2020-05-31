import React, { Component } from 'react';
import MapContainer from './Map';

import QuakesContainer from './QuakesContainer';
import { GEO_URL } from "./constants.js";
import axios from 'axios';


class App extends Component {
  state= {
    quakeData: [],
  }

  componentDidMount() {
    axios.get(GEO_URL)
    .then(response => {
        this.setState({ quakeData: response.data.features})
    })
    .catch(err => console.log(`Error: ${err}`))
  }


  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          <MapContainer quakeData={this.state.quakeData}/>
        </div>
        <div className="quakeContainer">
          <h1 className="title">Earthquakes from the past month: </h1>
          <QuakesContainer quakeData={this.state.quakeData}/>
        </div>
      </div>
    );
  }
}

export default App;
