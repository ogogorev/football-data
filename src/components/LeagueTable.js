import React, {Component, PropTypes} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import {headers, shortTableHeaders} from '../constants/LeagueTable';

const propTypes = {
    leagueCaption: PropTypes.string.isRequired,
    standing: PropTypes.array.isRequired,
    isShort: PropTypes.bool.isRequired,
};

const styles = {
    teamNameColumn: {
        width: '170px',
        textAlign: 'center',
    },
    column: {
        textAlign: 'center',
    }
};

class LeagueTable extends Component {
    render() {
        const {leagueCaption, standing, isShort} = this.props;
        const headers = (isShort) ? shortTableHeaders : headers;
        return (
            <div>
                <Table>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            {headers.map(header => (
                                <TableHeaderColumn
                                    style={(header === 'teamName') ? styles.teamNameColumn : styles.column}
                                > {header} </TableHeaderColumn>
                            ))}
                        </TableRow>
                    </TableHeader>

                    <TableBody displayRowCheckbox={false}>
                        {standing.map(row => {
                            return (
                                <TableRow key={row.teamName}>
                                    {headers.map(header => (
                                        <TableRowColumn
                                            style={(header === 'teamName') ? styles.teamNameColumn : styles.column}
                                        > {row[header]} </TableRowColumn>
                                    ))}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

LeagueTable.propTypes = propTypes;

export default LeagueTable;


// return (
//     <div>
//         <table>
//             <caption> {leagueCaption} </caption>
//             <tbody>
//                 <tr>
//                     {headers.map(header => (
//                         <th key={header}> {header} </th>
//                     ))}
//                 </tr>
//                 {standing.map(row => {
//                     return (
//                         <tr key={row.teamName}>
//                             {headers.map(header => (
//                                 <td key={row[header]}> {row[header]} </td>
//                             ))}
//                         </tr>
//                     );
//                 })}
//             </tbody>
//         </table>
//     </div>
// );
