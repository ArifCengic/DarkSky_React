import React from 'react';
import ReactDOM from 'react-dom';
//import { Router, Route, browserHistory } from 'react-router';
//import Home from './app/screens/Home';
//import User from './app/screens/User';
//import Root from './app/containers/Root';
import Home from './app/containers/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';

    
ReactDOM.render(<Home />,

  document.getElementById('container')
);

/*
ReactDOM.render(<Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/:username" component={User} />
  </Router>,
  document.getElementById('container')*/