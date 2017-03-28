import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';

import Dropdown from './Dropdown';

const propTypes = {
    // dispatch: PropTypes.func.isRequired,
    competitions: PropTypes.array.isRequired,
};

const Competitions = (props) => {
    return (
        <div>
            {props.competitions.map(competition => (
                <div className='dropdown-content-item' key={competition.id}>
                    <Link to={'/competitions/' + competition.id}> {competition.caption} </Link>
                </div>
            ))}
        </div>
    );
}

class AppBar extends Component {
    render() {
        const {competitions} = this.props;

        return (
            <div className='app-bar'>
                football data

                <div className='bar-menu'>
                    <Dropdown title='competitions'>
                        <Competitions competitions={competitions}/>
                    </Dropdown>
                </div>
            </div>
        );
    }
}

AppBar.propTypes = propTypes;

export default AppBar;
