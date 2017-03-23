import * as types from '../constants/ActionTypes';
import token from '../constants/Token';

function receiveCompetitonResults(competitionId, results) {
    return {
        type: types.RECEIVE_COMPETITION_RESULTS,
        competitionId,
        results
    }
}

export function fetchCompetitionResults(competitionId) {
    return dispatch =>
    fetch(`http://api.football-data.org/v1/competitions/${competitionId}/fixtures`, {
        headers: {
            'X-Auth-Token': token,
        }
    })
    .then(response => response.json())
    .then(json => {
        dispatch(receiveCompetitonResults(competitionId, json));
    });
}
