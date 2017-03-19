import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {fetchCompetitions} from '../actions/competitions';
import AppBar from '../components/AppBar';

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    competitions: PropTypes.array.isRequired,
};

class App extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchCompetitions());
    }

    render() {
        const {competitions} = this.props;
        return (
            <div className='app-container'>
                <AppBar competitions={competitions} />
            </div>
        );
    }
}

App.propTypes = propTypes;

function mapStateToProps(state) {
    return {
        competitions: state.competitions.names,
    }
}

export default connect(mapStateToProps)(App);
