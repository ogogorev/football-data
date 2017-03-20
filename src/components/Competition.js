import React, {Component, PropTypes} from 'react';

import LeagueTable from './LeagueTable';

const propTypes = {
    table: PropTypes.object.isRequired,
};

class Competition extends Component {
    render() {
        console.log('COMPETITION PROPS', this.props);
        return (
            <div>
                {(Object.keys(this.props.table).length > 0) ? <LeagueTable {...this.props.table} isShort={true} /> : null}
            </div>
        );
    }
}

Competition.propTypes = propTypes;

export default Competition;
