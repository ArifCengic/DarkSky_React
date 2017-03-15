//import fetch from 'isomorphic-fetch'
import {storeX} from '../Store'

//for now keep all Actions in one file
export function inc(i){ return {type: "INC", payload: i};}
export function update_position(lat, lng) { return {type: "UPDATE_POSITION", 
                            payload: {
                                lat: lat,
                                lng: lng
                            }
                          };}

export function fetch_weather() {

  return function(dispatch){
        
  dispatch({type: "FETCH_WEATHER_START"});

  const BASE_URL = 'https://api.darksky.net/forecast/';
  const KEY = 'c57f7284ecdf0e3ef8309aa87e5cbc4d';
  var {lat,lng} = storeX.getState().Position;
  console.log( lat + " -- " + lng);
  
  var promises = [];
     try {
       
      for (var i = 1; i < 7+1; i++) {
              var d = new Date();
              d.setDate(d.getDate() - i);
              var ts = Math.floor(d.valueOf()/1000);

        let url = `${BASE_URL}${KEY}/${lat},${lng},${ts}`;
        console.log(url);
        promises.push( $.ajax({
             url: url,
             dataType: 'jsonp'
            }));  
      }
    } catch (error) {
          //console.log("REST " + error);
          dispatch({type: "FETCH_WEATHER_ERROR", payload: error });
          return;
     }

      let restData = []
      $.when.apply($, promises).then(function() {
          // returned data is in arguments[0][0], arguments[1][0], ... arguments[9][0]
          dispatch({type: "UPDATE_TIMEZONE", payload: {timezone: (arguments[0][0]).timezone } });
          
          for(let j=0; j<7; j++) {
            console.log(arguments[j][0]);
            
          let dd = (arguments[j][0]).daily.data[0];
          restData.push({
                 min: dd.temperatureMin,
                 max: dd.temperatureMax,
                 time: dd.time});
              }

          restData.sort(function(a, b){return b.time-a.time});

          var values = [[],[]]; 

          var days = restData.map((x) => { 
            let d = new Date(x.time*1000); //convert timestamp to date
            return ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d.getDay()];
          });

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
        console.log("REST " + error);
        dispatch({type: "FETCH_WEATHER_ERROR", payload: error });
        return;
      });
 
  }
}
