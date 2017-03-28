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
            <div>
                {clearDataString(date)} <br/>
                {homeTeamName} {goalsHomeTeam} <br/>
                {awayTeamName} {goalsAwayTeam} <br/>
                {status} <br/>
                <br/> <br/> <br/> <br/>
            </div>
        );
    }
}

Result.propTypes = propTypes;

export default Result;
