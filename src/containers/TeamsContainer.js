import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import Teams from '../components/Teams';
import {fetchCompetitionTeams} from '../actions/competitions';

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    teams: PropTypes.array.isRequired,
};

class TeamsContainer extends Component {
    componentWillReceiveProps(nextProps) {
        const {dispatch, match, teams} = nextProps;
        const {competitionId} = match.params;
        if (teams.length < 1) dispatch(fetchCompetitionTeams(competitionId));
    }

    render() {
        return (
            <Teams teams={this.props.teams} />
        );
    }
}

TeamsContainer.propTypes = propTypes;

function mapStateToProps(state, ownProps) {
    const {competitionId} = ownProps.match.params;
    const teams = (state.teams[competitionId]) ? state.teams[competitionId] : [];

    return {
        teams: teams,
    };
}

export default connect(mapStateToProps)(TeamsContainer);
