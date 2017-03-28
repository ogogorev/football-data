import React, {Component, PropTypes} from 'react';

import Result from './Result';

const propTypes = {
    results: PropTypes.array.isRequired,
};

class Results extends Component {
    render() {
        console.log('RESULTS COMPONENT', this.props);
        const {results} = this.props;
        return (
            <div>
                <h1> RESULTS COMPONENT </h1>
                {results.map((result, index) => (
                    <Result {...result} key={index} />
                ))}
            </div>
        );
    }
}

Results.propTypes = propTypes;

export default Results;
