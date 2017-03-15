import React, {Component, PropTypes} from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import {connect} from 'react-redux'
import {inc, update_position} from '../actions/Actions'

export class Map extends Component {
  constructor(props) {
    super(props)
    this.coords = {
        lat: 51.5258541,
        lng: -0.0804066
    };

    this.params = {v: '3.exp', key: 'AIzaSyCKH7XeJZRZvHcaE8xi9rl0LRGzCJyjfDU'};
  }

onClick(e) {
      console.log('onClick', e);
      this.props.dispatch(inc(1));
      this.props.dispatch(update_position(e.latLng.lat(), e.latLng.lng()));
}

  render() {
    console.log(this);

    return (
      <section  className="container home">
      <Gmaps 
        height={'600px'}
        lat={this.coords.lat}
        lng={this.coords.lng}
        zoom={12}
        loadingMessage={'Loading'}
        params={this.params}
        onClick={this.onClick.bind(this)}
        onMapCreated={this.onMapCreated}>
      </Gmaps>
      </section>
    );
  }
}

export var VisibleMap = connect((state)=> { return {state: state} }) (Map)

