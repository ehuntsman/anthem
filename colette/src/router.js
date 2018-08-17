import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Comic from './components/Comics/Comic';
import Comics from './components/Comics/Comics';

export default(
  <Switch>
      <Route exact component={Home} path='/' />
      <Route exact component={Comics} path="/comics" />
      <Route component={Comic} path='/comics/:id' /> 
  </Switch>
)