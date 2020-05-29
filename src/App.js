import React, { Component } from 'react';
import MapContainer from './Map';
// import Quakes from './Quakes';
import QuakesContainer from './QuakesContainer';

class App extends Component {


  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          <MapContainer />
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
          <QuakesContainer />
        </div>
      </div>
    );
  }
}

export default App;
