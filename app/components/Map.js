import React, {Component, PropTypes} from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import {connect} from 'react-redux'
import {update_position} from '../actions/Actions'

export class Map extends Component {
  constructor(props) {
    super(props)
    this.coords = {
        lat: 51.5258541,
        lng: -0.0804066
    };

    this.params = {v: '3.exp', key: 'AIzaSyCKH7XeJZRZvHcaE8xi9rl0LRGzCJyjfDU'};
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
        onClick={this.props.updatePosition}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={this.props.lat}
          lng={this.props.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
      </Gmaps>
      <p> {this.props.lat} * {this.props.lng}</p>
      </section>
    );
  }
}

 Map.propTypes = {
    lat: PropTypes.number,
    lng: PropTypes.number
 }
 
const mapStateToProps = (state) => {
  return {
    lat: state.Position.lat,
    lng: state.Position.lng
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePosition: (e) => { dispatch(update_position(e.latLng.lat(), e.latLng.lng()));
    }
  }
}
export var VisibleMap = connect(mapStateToProps,mapDispatchToProps) (Map)

