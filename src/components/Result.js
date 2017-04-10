import React, {Component, PropTypes} from 'react';

import {clearDataString} from '../utils/Results';

const propTypes = {
    date: PropTypes.string.isRequired,
    homeTeamName: PropTypes.string.isRequired,
    awayTeamName: PropTypes.string.isRequired,
    result: PropTypes.object,
    status: PropTypes.string.isRequired,
}

class Result extends Component {
    render() {
        const { date, homeTeamName, awayTeamName, result, status } = this.props;
        const {goalsHomeTeam, goalsAwayTeam} = (result) ? result: [null, null];
        // const {goalsHomeTeam, goalsAwayTeam} = [null, null];

        return (
            // <div style={styles.container}>
            <div className='result-container'>
                <span className='date'> {clearDataString(date)} </span> <br/>
                <span className='status'> {status} </span>
                <div className='result-row'>
                    <div className='home-team-row'> {homeTeamName} </div>
                    <div className='score-row'> {goalsHomeTeam} - {goalsAwayTeam} </div>
                    <div className='away-team-row'> {awayTeamName} </div> <br/>
                </div>
            </div>
        );
    }
}

Result.propTypes = propTypes;

export default Result;
