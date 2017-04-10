import React, {Component, PropTypes} from 'react';
import {SelectField, MenuItem, Divider} from 'material-ui';

import Result from './Result';
import {getResultsForMatchday} from '../utils/Results';

const propTypes = {
    results: PropTypes.array.isRequired,
    currentMatchday: PropTypes.number.isRequired,
};

const selectFieldStyle = {
    width: '80px',
    textAlign: 'center',
    margin: '0 20px',
};

const SelectMatchday = (props) => (
    <div className='select-matchday'>
        <h5> Select matchday </h5>
        <SelectField
            value={props.value}
            onChange={props.onChange}
            style={selectFieldStyle}
        >
            {props.matchDays.map((value) => (
                <MenuItem value={value} primaryText={value} />
            ))}
        </SelectField>
    </div>
);

class Results extends Component {
    state = {selectedMatchday: this.props.currentMatchday};

    handleChange = (event, index, value) => {
        this.setState({selectedMatchday: value});
    }

    render() {
        const {currentMatchday} = this.props;
        const results = getResultsForMatchday(this.props.results, this.state.selectedMatchday);
        let matchDays = Array.from(new Array(currentMatchday), ((value, index) => index+1));

        return (
            <div className='results'>
                <SelectMatchday
                    value={this.state.selectedMatchday}
                    onChange={this.handleChange}
                    matchDays={matchDays}
                />
                <Divider />
                {results.map((result, index) => (
                    <Result {...result} key={index} />
                ))}
            </div>
        );
    }
}

Results.propTypes = propTypes;

export default Results;
