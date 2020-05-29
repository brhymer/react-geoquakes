import React, { Component } from 'react';

class Quake extends Component {
    render() {
        // console.log(this.props.quakesList)
        // const {title} = this.props.quakesList
        return (
            <div className ="card">
                <h3>{this.props.quakesList}</h3>
            </div>
        );
    }
}

export default Quake;
