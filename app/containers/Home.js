import React, {Component,PropTypes} from 'react';
import {Provider} from 'react-redux'
import {WeatherReport} from './WeatherReport'
import {storeX} from '../Store';

const store = storeX;

export default class Home extends Component {
  render() {
    return (
      <section className="container home">
      <Provider store={storeX}>
        <WeatherReport />
      </Provider>

      </section>
    );
  }
}

