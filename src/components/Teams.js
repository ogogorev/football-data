import React, {Component, PropTypes} from 'react';

const propTypes = {
    teams: PropTypes.array.isRequired,
};

class Teams extends Component {
    render() {
        return (
            <ul>
                {this.props.teams.map(team => (
                    <li> {team.name} </li>
                ))}
            </ul>
        );
    }
}

Teams.propTypes = propTypes;

export default Teams;
