import * as types from '../constants/ActionTypes';

const initialState = {
    names: [],
    tables: {},
};

export default function competitions(state = initialState, action) {
    switch (action.type) {
        case types.RECEIVE_COMPETITIONS:
            return Object.assign({}, state, {
                names: action.competitions,
            });

        case types.RECEIVE_COMPETITION_LEAGUE_TABLE:
            return Object.assign({}, state, {
                tables[action.competitionId]: action.leagueTable,
            });

        default:
            return state;
    }
}
