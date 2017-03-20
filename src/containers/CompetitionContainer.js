import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {fetchCompetitionLeagueTable} from '../actions/competitions';
import Competition from '../components/Competition';

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    table: PropTypes.object.isRequired,
};

class CompetitionContainer extends Component {
    componentWillReceiveProps(nextProps) {
        const {dispatch, match} = nextProps;
        const {competitionId} = match.params;
        if (Object.keys(nextProps.table).length < 1) dispatch(fetchCompetitionLeagueTable(competitionId));
    }

    render() {
        return (
            <div>
                <h1> COMPETITION CONTAINER </h1>
                <Competition table={this.props.table}/>
            </div>
        );
    }
}

CompetitionContainer.propTypes = propTypes;

function mapStateToProps(state, ownProps) {
    const {competitionId} = ownProps.match.params;
    const table = (state.competitions.tables[competitionId]) ? state.competitions.tables[competitionId] : {};

    return {
        table: table,
    };
}

export default connect(mapStateToProps)(CompetitionContainer);
