import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Paper} from 'material-ui';

import {fetchCompetitionLeagueTable} from '../actions/competitions';
import {fetchCompetitionResults} from '../actions/results';
import Competition from '../components/Competition';
import {getResultsForMatchday} from '../utils/Results';

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    table: PropTypes.object.isRequired,
    results: PropTypes.object.isRequired,
    competition: PropTypes.object.isRequired,
};

class CompetitionContainer extends Component {
    componentWillReceiveProps(nextProps) {
        const {dispatch, competition, match} = nextProps;
        const {competitionId} = match.params;
        // const {currentMatchday} = competition;
        if (Object.keys(nextProps.table).length < 1) dispatch(fetchCompetitionLeagueTable(competitionId));
        if (Object.keys(nextProps.results).length < 1) dispatch(fetchCompetitionResults(competitionId));
    }

    render() {
        return (
            <div>
                <Competition
                    table={this.props.table}
                    results={this.props.results}
                    currentMatchday={this.props.competition.currentMatchday}
                    competitionName={this.props.competition.caption}
                />
            </div>
        );
    }
}
// results={getResultsForMatchday(this.props.results, this.props.competition.currentMatchday - 1)}

CompetitionContainer.propTypes = propTypes;

function mapStateToProps(state, ownProps) {
    const {competitionId} = ownProps.match.params;
    const table = (state.competitions.tables[competitionId]) ? state.competitions.tables[competitionId] : {};
    const results = (state.results[competitionId]) ? state.results[competitionId] : {};
    const competition = getCompetitionById(state.competitions.competitions, competitionId);

    return {
        table: table,
        results: results,
        competition: competition,
    };
}

export default connect(mapStateToProps)(CompetitionContainer);

function getCompetitionById(competitions, competitionId) { // FIXME Move to utils
    for (let i = 0; i < competitions.length; i++) {
        if (competitions[i].id == competitionId) return competitions[i];
    }
    return {};
}
