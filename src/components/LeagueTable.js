import React, {Component, PropTypes} from 'react';
import {headers, shortTableHeaders} from '../constants/LeagueTable';

const propTypes = {
    leagueCaption: PropTypes.string.isRequired,
    standing: PropTypes.array.isRequired,
    isShort: PropTypes.bool.isRequired,
};

class LeagueTable extends Component {
    render() {
        const {leagueCaption, standing, isShort} = this.props;
        const headers = (isShort) ? shortTableHeaders : headers;
        return (
            <div>
                <table>
                    <caption> {leagueCaption} </caption>
                    <tbody>
                        <tr>
                            {headers.map(header => (
                                <th key={header}> {header} </th>
                            ))}
                        </tr>
                        {standing.map(row => {
                            return (
                                <tr key={row.teamName}>
                                    {headers.map(header => (
                                        <td key={row[header]}> {row[header]} </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

LeagueTable.propTypes = propTypes;

export default LeagueTable;
