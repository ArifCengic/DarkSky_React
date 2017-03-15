export const Position = function(state = { newLocation: false,
                                           lat: null,
                                           lng: null
                                         }, action){
  switch(action.type)
  {
    case "UPDATE_POSITION":  {
     return {...state, lat: action.payload.lat, lng: action.payload.lng, newLocation: true}
     break;
    }
    
    case "NOT_NEW_LOCATION":  {
     return {...state, newLocation: false}
     break;
    }
  }
    return state;
 }