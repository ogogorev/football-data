import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';
import {Tabs, Tab} from 'material-ui';

import Dropdown from './Dropdown';

const propTypes = {
    competitions: PropTypes.array.isRequired,
    competitionId: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
};

class CompetitionsBar extends Component {
    constructor(props) {
        super(props);
        let value = (props.competitionId) ? props.competitionId : null;
        this.state = {value: value};
    }

    handleChange = (value) => {
        this.setState({value: value});
        this.props.handleClick(value);
    }

    render() {
        const {competitions} = this.props;

        return (
            <Tabs
                value={this.state.value}
                onChange={this.handleChange}
            >
                {competitions.map(competition => (
                    <Tab label={competition.caption} value={competition.id}></Tab>
                ))}
            </Tabs>
        );
    }
}

CompetitionsBar.propTypes = propTypes;

export default CompetitionsBar;
