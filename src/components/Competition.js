import React, {Component, PropTypes} from 'react';
// import {Tabs, Tab} from 'material-ui';

import LeagueTable from './LeagueTable';
import Results from './Results';

const propTypes = {
    competitionName: PropTypes.string.isRequired,
    table: PropTypes.object.isRequired,
    results: PropTypes.array.isRequired,
};

const containerStyles = {
    width: '70%',
    margin: 'auto',
    textAlign: 'center',
};

const contentStyles = {
    display: 'flex',
    justifyContent: 'center',
};

class Competition extends Component {
    render() {
        const {competitionName} = this.props;

        return (
            <div style={containerStyles}>
                <h3> {competitionName} </h3>

                <div style={contentStyles}>
                    {(Object.keys(this.props.table).length > 0) ? <LeagueTable {...this.props.table} isShort={true} /> : null}
                    {(Object.keys(this.props.results).length > 0) ? <Results results={this.props.results} isShort={true} /> : null}
                </div>
            </div>
        );
    }
}

Competition.propTypes = propTypes;

export default Competition;
