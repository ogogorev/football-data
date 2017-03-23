import React, {Component} from 'react';

const propTypes = {
    date: PropTypes.string.isRequired,
    homeTeam: PropTypes.string.isRequired,
    awayTeam: PropTypes.string.isRequired,
    result: PropTypes.object,
    status: PropTypes.string.isRequired,
}

class Result extends Component {
    render() {
        const { date, homeTeam, awayTeam, result, status } = this.props;
        return (
            <div>
                {date} <br/>
                {homeTeam} <br/>
                {awayTeam} <br/>
                {result} <br/>
                {status} <br/>
            </div>
        );
    }
}

Result.propTypes = propTypes;

export default Result;
