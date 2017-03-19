import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {fetchCompetitionLeagueTable} from '../actions/competitions';

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    table: PropTypes.object.isRequired,
};

class CompetitionContainer extends Component {
    componentWillReceiveProps(nextProps) {
        const {dispatch, match} = nextProps;
        const {competitionId} = match.params;
        dispatch(fetchCompetitionLeagueTable(competitionId));
    }

    render() {
        return (
            <h1> COMPETITION CONTAINER </h1>
        );
    }
}

CompetitionContainer.propTypes = propTypes;

function mapStateToProps(state) {
    const {competitionId} = ownProps.match.params;
    const {table} = state.competitions.tables[competitionId];
    return {
        table
    };
}

export default connect(mapStateToProps)(CompetitionContainer);
