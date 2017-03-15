import React, {Component,PropTypes} from 'react';
import {VisibleMap} from '../components/Map';
import {VisibleChart} from '../components/Chart';

export class WeatherReport extends Component {
  render() {
    return (
      <section className="container home">
        <VisibleMap />
        <VisibleChart name="Weather Report" />
      </section>
    );
  }
}