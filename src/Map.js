import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react'

const mapStyles = {
    width: '45%',
    height: '100%'
};

class MapContainer extends Component {
    render() {
        return (
            <Map
            google={this.props.google}
            zoom = {2}
            style = {mapStyles}
            initialCenter={{
                lat: 37.78,
                lng: -122.44
            }}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg'})(MapContainer);
