import * as types from '../constants/ActionTypes';
import token from '../constants/Token';

function receiveCompetitonResults(competitionId, results) {
    return {
        type: types.RECEIVE_COMPETITION_RESULTS,
        competitionId,
        results
    }
}

export function fetchCompetitionResults(competitionId, matchDay) {
    return dispatch => {
        const matchDayQuery =  (matchDay) ?  `?matchday=${matchDay}` : '';
        fetch(`http://api.football-data.org/v1/competitions/${competitionId}/fixtures${matchDayQuery}`, {
            headers: {
                'X-Auth-Token': token,
            }
        })
        .then(response => response.json())
        .then(json => {
            dispatch(receiveCompetitonResults(competitionId, json));
        });
    }
}
