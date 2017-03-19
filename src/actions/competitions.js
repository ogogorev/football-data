import * as types from '../constants/ActionTypes';
import token from '../constants/Token';

function receiveCompetitions(competitions) {
    return {
        type: types.RECEIVE_COMPETITIONS,
        competitions,
    }
}

function receiveCompetitonLeagueTable(competitionId, leagueTable) {
    return {
        type: types.RECEIVE_COMPETITION_LEAGUE_TABLE,
        competitionId,
        leagueTable
    }
}

function receiveCompetitionTeams(competitionId, teams) { // TODO Move to own file
    return {
        type: types.RECEIVE_COMPETITION_TEAMS,
        competitionId,
        teams,
    }
}

export function fetchCompetitionLeagueTable(competitionId) {
    return dispatch =>
    fetch(`http://api.football-data.org/v1/competitions/${competitionId}/leagueTable`, {
        headers: {
            'X-Auth-Token': token,
        }
    })
    .then(response => response.json())
    .then(json => {
        dispatch(receiveCompetitonLeagueTable(competitionId, json));
    });
}

export function fetchCompetitionTeams(competitionId) {
    return dispatch =>
    fetch(`http://api.football-data.org/v1/competitions/${competitionId}/teams`, {
        headers: {
            'X-Auth-Token': token,
        }
    })
    .then(response => response.json())
    .then(json => {
        dispatch(receiveCompetitionTeams(competitionId, json.teams));
    });
}

export function fetchCompetitions() {
    return dispatch =>
    fetch(`http://api.football-data.org/v1/competitions`, {
        headers: {
            'X-Auth-Token': token,
        }
    })
    .then(response => response.json())
    .then(json => {
        dispatch(receiveCompetitions(json));
    });
}
