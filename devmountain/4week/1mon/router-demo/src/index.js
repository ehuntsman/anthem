import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Link} from 'react-router-dom';
import App from './App';
import About from './About';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
    <HashRouter>
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
            </nav>
            <Route exact path='/' component={App}/>
            <Route path='/about/:personId' component={About} />
        </div>
    </HashRouter>,
    document.getElementById('root'));
registerServiceWorker();
