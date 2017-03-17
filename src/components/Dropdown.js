import React from 'react';

const Dropdown = (props) => {
    return (
        <div className='dropdown'>
            {props.title}
            <div className='dropdown-content'>
                {props.children}
            </div>
        </div>
    );
}

export default Dropdown;
