import React, {Component, PropTypes} from 'react';

import Result from './Result';

const propTypes = {
    results: PropTypes.array.isRequired,
};

const styles = {
    margin: '0 30px',
    fontFamily: 'Roboto',
};

class Results extends Component {
    render() {
        // console.log('RESULTS COMPONENT', this.props);
        const {results} = this.props;
        return (
            <div style={styles}>
                {results.map((result, index) => (
                    <Result {...result} key={index} />
                ))}
            </div>
        );
    }
}

Results.propTypes = propTypes;

export default Results;
