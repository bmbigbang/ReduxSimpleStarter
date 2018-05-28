import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateComments} from "../actions"
import {bindActionCreators} from "redux"


class WordTable extends Component {
    constructor(props) {
        super(props);

        this.state = {'init': true};

        this.renderTable = this.renderTable.bind(this);
    }

    shouldComponentUpdate() {
        if (this.props.update.table) {
            this.props.updateComments({'table': false});
            return true
        } else {
            return this.props.post || ''
        }
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
        let sortable = [];
        let total = 0;
        for (let word in this.props.post) {
            sortable.push([word, this.props.post[word]]);
            total += this.props.post[word];
        }

        if (total === 0) {return null}

        sortable.sort(function(a, b) {
            return b[1] - a[1]
        });

        let data = [];
        let count = 1;
        for (let item of sortable) {
            data.push({'id': count, 'word': item[0],
                       'count': Number((item[1] * 100 / total).toFixed(1))});
            count += 1;
        }

        data = data.slice(0, 10);
        return data.map(this.renderRows)
    }

    render() {
        return (
            <div className='word-table-container'>
                <table id='word-table'
                       className="table-bordered table-condensed
                       table-hover table-striped thead-dark">
                    <thead>
                    <tr>
                        <td id='word' className='word-table-header'>Word</td>
                        <td id='frequency' className='word-table-header'>Frequency (%)</td>
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

function mapStateToProps({ post, update }) {
    return { post, update };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateComments }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WordTable);