import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { HashRouter } from "react-router-dom";
import {Provider} from "react-redux";
import store from './ducks/Store';

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('root'));
registerServiceWorker();
