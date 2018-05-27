import React, {Component} from 'react'
import {connect} from 'react-redux'


class WordTable extends Component {
    constructor(props) {
        super(props);

        this.state = {'init': true};

        this.renderTable = this.renderTable.bind(this);
    }

    shouldComponentUpdate() {
        return this.props.post || '';
    }

    renderRows(row) {
        return (
            <tr key={ row.id }>
                <td className='word-table-rows'>{ row.word }</td>
                <td className='word-table-rows'>{ row.count }</td>
            </tr>
        );
    }

    renderTable() {
        return this.props.post.map(this.renderRows)
    }

    render() {
        return (
            <div className='word-table-container'>
                <table id='word-table'
                       className="table-bordered table-condensed
                       table-hover table-striped thead-dark">
                    <thead>
                    <tr>
                        <td key='word' className='word-table-header'>Word</td>
                        <td key='frequency' className='word-table-header'>Frequency</td>
                    </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps({ post }) {
    return { post };
}

export default connect(mapStateToProps)(WordTable);