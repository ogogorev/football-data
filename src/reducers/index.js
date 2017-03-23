import {combineReducers} from 'redux';
import competitions from './competitions';
import teams from './teams';
import results from './results';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
    competitions,
    teams,
    results,
    router: routerReducer,
});
