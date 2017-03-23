import React, {Component, PropTypes} from 'react';

const propTypes = {
    results: PropTypes.object.isRequired,
};

class Results extends Component {
    render() {
        console.log('RESULTS COMPONENT', this.props);

        return (
            <div>
                <h1> RESULTS COMPONENT </h1>
            </div>
        );
    }
}

Results.propTypes = propTypes;

export default Results;
