import React, {Component, PropTypes} from 'react';

import LeagueTable from './LeagueTable';
import Results from './Results';

const propTypes = {
    table: PropTypes.object.isRequired,
    results: PropTypes.array.isRequired,
};

class Competition extends Component {
    render() {
        console.log('COMPETITION PROPS', this.props);
        return (
            <div>
                {(Object.keys(this.props.table).length > 0) ? <LeagueTable {...this.props.table} isShort={true} /> : null}
                {(Object.keys(this.props.results).length > 0) ? <Results results={this.props.results} isShort={true} /> : null}
            </div>
        );
    }
}

Competition.propTypes = propTypes;

export default Competition;
