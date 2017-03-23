import * as types from '../constants/ActionTypes';

const initialState = {};

export default function results(state = initialState, action) {
    switch (action.type) {
        case types.RECEIVE_COMPETITION_RESULTS:
            console.log('RECEIVE_COMPETITION_RESULTS', action);

            return Object.assign({}, state, {
                [action.competitionId]: action.results,
            });

        default:
            return state;

    }
}
