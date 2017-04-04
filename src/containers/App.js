import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {fetchCompetitions} from '../actions/competitions';
import CompetitionsBar from '../components/CompetitionsBar';

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    competitions: PropTypes.array.isRequired,
    competitionId: PropTypes.string
};

class App extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchCompetitions());
    }

    handleClick = (value) => {
        this.props.history.push('/competitions/' + value);
    }

    render() {
        const {competitions, competitionId} = this.props;
        return (
            <div className='app-container'>
                <CompetitionsBar competitions={competitions} competitionId={competitionId} handleClick={this.handleClick}/>
            </div>
        );
    }
}

App.propTypes = propTypes;

function mapStateToProps(state, ownProps) {
    return {
        competitionId: ownProps.match.params.competitionId,
        competitions: state.competitions.competitions,
    }
}

export default connect(mapStateToProps)(App);
