import React, {Component, PropTypes} from 'react';
import {Tabs, Tab, Paper, FlatButton, Popover, Menu, MenuItem} from 'material-ui';

const propTypes = {
    competitions: PropTypes.array.isRequired,
    competitionId: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
};

class AppBar extends Component {
    state = {open: false};

    handleCompetitionsButtonClick = (event) => {
        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    }

    handleCompetitionClick = (value) => {
        this.props.handleClick(value);
        this.setState({open: false});
    }

    handleRequestClose = () => {
        this.setState({open: false});
    }

    render() {
        const {competitions} = this.props;

        return (
            <div>
                <Paper className='app-bar-container'>
                    <FlatButton
                        label='competitions'
                        onClick={this.handleCompetitionsButtonClick}
                        style={{width: '200px', height: '40px'}}
                    />
                    <Popover
                        open={this.state.open}
                        anchorEl={this.state.anchorEl}
                        anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
                        targetOrigin={{horizontal: 'middle', vertical: 'top'}}
                        onRequestClose={this.handleRequestClose}
                        style={{height: '75%'}}
                    >
                        <Menu>
                            {competitions.map(competition => (
                                <MenuItem
                                    primaryText={competition.caption}
                                    value={competition.id}
                                    onClick={() => this.handleCompetitionClick(competition.id)}
                                    className='competitions-menu-item'
                                    style={{fontSize: '10pt'}}
                                />
                            ))}
                        </Menu>
                    </Popover>
                </Paper>
            </div>
        );
    }
}

AppBar.propTypes = propTypes;

export default AppBar;
