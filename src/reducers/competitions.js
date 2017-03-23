import * as types from '../constants/ActionTypes';

const initialState = {
    competitions: [],
    tables: {},
};

export default function competitions(state = initialState, action) {
    switch (action.type) {
        case types.RECEIVE_COMPETITIONS:
            return Object.assign({}, state, {
                competitions: filterCompetitions(action.competitions),
            });

        case types.RECEIVE_COMPETITION_LEAGUE_TABLE:
            return Object.assign({}, state, {
                tables: {
                    [action.competitionId]: action.leagueTable,
                },
            });

        default:
            return state;
    }
}

function filterCompetitions(competitions) { // Excludes European championships France 2016 and DFB-Pokal league
    return competitions.filter(competition => ((competition.id !== 432) && (competition.id !== 424)));
}
