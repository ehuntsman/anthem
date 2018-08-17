import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { HashRouter } from "react-router-dom";
import {Provider} from 'react-redux';
import store from './ducks/Store';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('root'));
// unregister()