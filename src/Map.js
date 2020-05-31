import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'
import image from './images/earthquake.png'

const mapStyles = {
    width: '45%',
    height: '100%'
};

export class MapContainer extends Component {
    state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,
    });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null,
            });
        }
    };


    render() {
      return (
        <Map
          google={this.props.google}
          zoom={3}
          style={mapStyles}
          initialCenter={{
           lat: 37.78,
           lng: -122.44
          }}
        >
            {this.props.quakeData.map(el =>
            <Marker
            position={{lat: el.geometry.coordinates[1], lng: el.geometry.coordinates[0]}}
            icon={image}
            // onClick={this.onMarkerClick}
            name={el.properties.title}
            />)}
            <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
            >
                <div>
                    <h4>{this.state.selectedPlace.name}</h4>
                </div>
            </InfoWindow>
        </Map>
      );
    }
  }


export default GoogleApiWrapper({
    apiKey: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg'})(MapContainer);
