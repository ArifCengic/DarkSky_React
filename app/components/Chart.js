import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import {fetch_weather} from '../actions/Actions'


export  class Chart extends Component {

  constructor(props) {
    super(props)
    
    // this.handleChange = this.handleChange.bind(this)
    // this.handleRefreshClick = this.handleRefreshClick.bind(this)

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

incremental() {
    this.props.dispatch(fetch_weather());
} 

IncrementalXXX(){
this.props.dispatch((dispatch)=>{
        dispatch({type: "FETCH_WEATHER_START"});

   console.log(this.props.lat + "-" + this.props.lng);
    const BASE_URL = 'https://api.darksky.net/forecast/';
    const KEY = 'c57f7284ecdf0e3ef8309aa87e5cbc4d';

     var promises = [];
     try {
       
      for (var i = 1; i < this.DAYS+1; i++) {
              var d = new Date();
              d.setDate(d.getDate() - i);
              var ts = Math.floor(d.valueOf()/1000);
             console.log(`URL: ${BASE_URL}${KEY}/${this.props.lat},${this.props.lng},${ts}`);

             promises.push( $.ajax({
             url: `${BASE_URL}${KEY}/${this.props.lat},${this.props.lng},${ts}`,
             dataType: 'jsonp'
            }));  
      }
      } catch (error) {
        //ARR to deal wih 403 error
          console.log("START API error:" +  error);      
          return;
     }

      let restData = []
      $.when.apply($, promises).then(function() {
          // returned data is in arguments[0][0], arguments[1][0], ... arguments[9][0]
          this.setState({timezone: (arguments[0][0]).timezone });
            dispatch({type: "UPDATE_TIMEZONE", payload: {timezone: (arguments[0][0]).timezone } });
          for(let j=0; j<this.DAYS; j++) {
            console.log(arguments[j][0]);
            
            let dd = (arguments[j][0]).daily.data[0];
              restData.push({
                 min: dd.temperatureMin,
                 max: dd.temperatureMax,
                 time: dd.time});
              }

          restData.sort(function(a, b){return a.time-b.time});

          var values = [[],[]]; 

          var days = restData.map((x) => { 
            let d = new Date(x.time*1000); //convert timestamp to date
            return ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d.getDay()];
          });

          console.log("DAYS " + days);

          for(let j=0; j<7; j++) {
              values[0].push(restData[j].min);
              values[1].push(restData[j].max);
           }
           console.log(values);
          
          dispatch({type: "RECEIVE_WEATHER", 
                    payload: { 
                              series: values,
                              labels: days
                            }
                          });

      }.bind(this), function(error) {
        console.log("API error:" +  error);    
        dispatch({type: "FETCH_WEATHER_ERROR", payload: err });
        return;
      });
 
      });
}
  

 getAPI() {
   console.log(this.props.lat + "-" + this.props.lng);
    const BASE_URL = 'https://api.darksky.net/forecast/';
    const KEY = 'c57f7284ecdf0e3ef8309aa87e5cbc4d';

     var promises = [];
     try {
       
      for (var i = 1; i < this.DAYS+1; i++) {
              var d = new Date();
              d.setDate(d.getDate() - i);
              var ts = Math.floor(d.valueOf()/1000);
             console.log(`URL: ${BASE_URL}${KEY}/${this.props.lat},${this.props.lng},${ts}`);

             promises.push( $.ajax({
             url: `${BASE_URL}${KEY}/${this.props.lat},${this.props.lng},${ts}`,
             dataType: 'jsonp'
            }));  
      }
      } catch (error) {
        //ARR to deal wih 403 error
          console.log("START API error:" +  error);      
          return;
     }

      let restData = []
      $.when.apply($, promises).then(function() {
          // returned data is in arguments[0][0], arguments[1][0], ... arguments[9][0]
          this.setState({timezone: (arguments[0][0]).timezone });
          for(let j=0; j<this.DAYS; j++) {
            console.log(arguments[j][0]);
            
            let dd = (arguments[j][0]).daily.data[0];
              restData.push({
                 min: dd.temperatureMin,
                 max: dd.temperatureMax,
                 time: dd.time});
              }

          restData.sort(function(a, b){return a.time-b.time});

          var values = [[],[]]; 
          for(let j=0; j<7; j++) {
              values[0].push(restData[j].min);
              values[1].push(restData[j].max);
           }
           console.log(values);
          
          dispatch({type: "RECEIVE_WEATHER", payload: { 
                          data: 
                            { series: values,
                              labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                            }}});

          //  this.setState({ 
          //                 data: 
          //                   { series: values,
          //                     labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          //                   }
          //               });

      }.bind(this), function(error) {
        console.log("API error:" +  error);    
        dispatch({type: "FETCH_WEATHER_ERROR", payload: err });
        return;
      });
 }

  render() {
    console.log(this);
    if(this.props && this.props.data) new Chartist.Bar('.ct-chart', this.props.data, this.state.options, this.state.responsiveOptions);
    
    let button = null;
    let message = null;
    let fetching = null;
    if(this.props.fetching)
    {
        fetching = <h2> Fetching Data </h2>
    }
    if(this.props.newLocation)
    {
        button = <button onClick={this.incremental.bind(this)} className="btn btn-primary"> Get Data </button>;
    }
    else
    {
      if(!this.props.lat) message = <h1> Click on map to select location </h1>
    }
    
    return (
      <section  className="container home">
        {message}
        {button}
        {fetching}
        <div className="ct-chart"> </div>
        <h2>  {this.props.timezone} </h2>      
        <h1>  {this.props.count} {this.props.name}  </h1> 
      </section>
    );
  }
}

 Chart.propTypes = {
    lat: PropTypes.number,
    lng: PropTypes.number,
    count: PropTypes.number,
 }

function mapStateToProps(state) {
  return {
    count: state.Count.count,
    lat: state.Position.lat,
    lng: state.Position.lng,
    newLocation: state.Position.newLocation,
    timezone: state.Weather.timezone,
    fetching: state.Weather.fetching,
    data: state.Weather.data
  };
}

export var VisibleChart = connect(mapStateToProps)(Chart)

