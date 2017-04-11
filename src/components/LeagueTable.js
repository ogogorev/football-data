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
