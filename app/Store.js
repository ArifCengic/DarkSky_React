//import React, {Component, PropTypes} from 'react';
//import ReactDOM from 'react-dom';
//import configureStore from '../../utils/configureStore'
//import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
//import { selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit } from '../../utils/actions'
//import promise from 'redux-promise-middleware'
//import { Provider } from 'react-redux'
//import { connect } from 'react-redux'
//import axios from 'axios'
//import {rootReducer} from './XXXReducers';

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from './reducers';

const middleware = applyMiddleware(thunk, logger());
export const storeX = createStore(rootReducer, middleware);
                                 

