import React, {Component, PropTypes} from 'react';

import LeagueTable from './LeagueTable';
import Results from './Results';

const propTypes = {
    competitionName: PropTypes.string.isRequired,
    table: PropTypes.object.isRequired,
    results: PropTypes.array.isRequired,
    currentMatchday: PropTypes.number.isRequired,
};

const CompetitionMenu = (props) => {
    return (
        <div className='competition-menu'>
            {props.items.map(item => (
                <span
                    key={item}
                    className={'item ' + ((item === props.selectedItem) ? 'selected-item' : '')}
                    onClick={() => props.onClick(item)}
                > {item.toUpperCase()} </span>
            ))}
        </div>
    );
};

class Competition extends Component {
    state = {selectedItem: 'table'};

    onMenuClick = (value) => this.setState({selectedItem: value});

    render() {
        const {competitionName, currentMatchday, results, table} = this.props;
        const items = ['table', 'results'];
        return (
            <div className='competition-container'>
                <h3> {competitionName} </h3>

                <div className='content'>
                    <div className='table'> {(Object.keys(table).length > 0) ? <LeagueTable {...table} isShort={true} /> : null} </div>
                    {(Object.keys(results).length > 0) ? <Results results={results} currentMatchday={currentMatchday} /> : null}
                </div>
            </div>
        );
    }
}

// <CompetitionMenu title={competitionName} items={items} selectedItem={this.state.selectedItem} onClick={this.onMenuClick} />

Competition.propTypes = propTypes;

export default Competition;
