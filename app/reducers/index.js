import { combineReducers } from 'redux'
import {Position} from './Position'
import {Count} from './Count'
import {Weather} from './Weather'

export const rootReducer = combineReducers({
  Position,
  Count,
  Weather
})