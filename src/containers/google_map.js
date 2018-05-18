import React, {Component} from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
    render() {
        return (<div>
            <Map google={this.props.google} zoom={12}
                 initialCenter={{
                     lat: this.props.lat,
                     lng: this.props.lon
                 }}
                 style={{width: '240px', height: '240px', position: 'relative'}}>

            </Map>
        </div>);
    }
}

export default GoogleApiWrapper({
    apiKey: ''
})(MapContainer)