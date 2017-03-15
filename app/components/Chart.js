import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'
import {fetch_weather, inc} from '../actions/Actions'


export  class Chart extends Component {

  constructor(props) {
    super(props)

    this.DAYS = 7
    this.state = {
       options: {
                  seriesBarDistance: 15
                },
      responsiveOptions: [
        ['screen and (min-width: 641px) and (max-width: 1024px)', {
          seriesBarDistance: 10,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value;
            }
          }
        }],
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ]

    }; 
  
  }

  getWeather() {
      this.props.dispatch(inc(1));
      this.props.dispatch(fetch_weather());
  } 

  render() {
    console.log(this);
    
    let button = null;
    let message = null;
    let chartDisplay = null;
    let error = null;
     if(this.props && this.props.data && !this.props.fetching) new Chartist.Bar('.ct-chart', this.props.data, this.state.options, this.state.responsiveOptions);

    if(this.props.fetching){
        chartDisplay = <h2> Fetching Data </h2> ;
    }
    else{
        if (this.props.error)   chartDisplay = <h2> Error getting data from server </h2>      

        else  chartDisplay = <h2>  {this.props.timezone} </h2>      

    }

    if(this.props.newLocation){
        button = <button onClick={this.getWeather.bind(this)} className="btn btn-primary"> Get Data </button>;
    }
    else{
      if(!this.props.lat) message = <h1> Click on map to select location </h1>
    }
    
    return (
      <section  className="container home">
        {message}
        {button}
        <div className="ct-chart"> </div>
        {chartDisplay}
        <h1>  {this.props.name}  {this.props.count} </h1> 
      </section>
    );
  }
}

 Chart.propTypes = {
    count: PropTypes.number,
    timezone: PropTypes.string,
    fetching: PropTypes.bool,
    data: PropTypes.object
 }

function mapStateToProps(state) {
  return {
    count: state.Count.count,
    newLocation: state.Position.newLocation,
    timezone: state.Weather.timezone,
    fetching: state.Weather.fetching,
    error: state.Weather.error,
    data: state.Weather.data
  };
}

export var VisibleChart = connect(mapStateToProps)(Chart)

