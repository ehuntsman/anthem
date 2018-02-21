import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import World from './components/World/World';
import Map from './components/Map/Map';

export default(
    <Switch>
        <Route exact component={Home} path='/' />
        <Route component={World} path='/world' />
        <Route component={Map} path='/map' />
    </Switch>
)