import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react'

class MyTable extends Component {
    static defaultProps = {
        header: [
            "Timestamp",
            "Exercise",
            "Type of Weight",
            "Set 1: Weight", "Set 1: Reps",
            "Set 2: Weight", "Set 2: Reps",
            "Set 3: Weight", "Set 3: Reps",
            "Set 4: Weight", "Set 4: Reps",
            "Set 5: Weight", "Set 5: Reps"
        ],
        data: [
            [
                "11/9/2018 21:56:33",
                "Lat Pulldown",
                "Machine",
                "39",
                "13",
                "39",
                "5",
                "39",
                "6",
            ],
            [
                "11/9/2018 21:50:59",
                "Bench Press",
                "Machine",
                "39",
                "5",
                "39",
                "5",
                "39",
                "5",
                "41.3",
                "5",
                "39",
                "5",
            ]
        ]
    };

    render(){
        return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        {this.props.header.map(x => <Table.HeaderCell>{x}</Table.HeaderCell>)}
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {this.props.data.map(x =>
                        <Table.Row>
                            {x.map(y => <Table.Cell>{y}</Table.Cell>)}
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        )
    }
}

MyTable.propTypes = {
    header: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.arrayOf(PropTypes.array).isRequired
};

export default MyTable