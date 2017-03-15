export const Weather = function(state = {
                                        fetching: false,
                                        fetched: false,
                                        timezone: null,
                                        data: null,
                                        error: null
                                        },action){
  switch(action.type)
  {
      
   case "FETCH_WEATHER_START":  {
     return {...state, fetching: true}
     break;
   }

   case "FETCH_WEATHER_ERROR":  {  
          return {...state, 
                    fetching: false, 
                    error: action.payload}
     break;
    }

    case "RECEIVE_WEATHER":  {  
      return {...state, 
              fetching: false, 
              data: action.payload}
      break;
    }  
    
    case "UPDATE_TIMEZONE":  {
      return {...state, 
              timezone: action.payload.timezone,
              fetching: false}
      break;
    }
  
  }
return state;
}

