import * as types from '../constants/ActionTypes';

const initialState = {};

export default function competitions(state = initialState, action) {
    switch (action.type) {
        case types.RECEIVE_COMPETITION_TEAMS:
            console.log('RECEIVE COMPETITION TEAMS', action);

            return Object.assign({}, state, {
                [action.competitionId]: action.teams,
            });

        default:
            return state;
    }
}
