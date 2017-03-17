import 'babel-polyfill';
import 'fastclick';
import 'isomorphic-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route} from 'react-router';
import {createHashHistory} from 'history';
import {routerMiddleware} from 'react-router-redux';

import '../styles/main.scss';
import App from './containers/App';
import TeamsContainer from './containers/TeamsContainer';
import configureStore from './store/configureStore';

const history = createHashHistory();
const middleware = routerMiddleware(history);
const store = configureStore(middleware);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route path='/' component={App} />
                <Route path='/competitions/:competitionId' component={TeamsContainer} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('main')
);
