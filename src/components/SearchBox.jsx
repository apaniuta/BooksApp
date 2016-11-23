import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import styles from './SearchBox.less';

export default class SearchBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.search
        };
    }

    handleTextChange = e => {
        this.setState({
            text: e.target.value
        });
    }

    handleSearch = () => {
        const { text } = this.state;

        this.props.onSearch(text);
    }

    render() {
        const { text } = this.state;

        return (
            <Paper className={styles.container}>
                <TextField
                    fullWidth
                    underlineShow={false}
                    className={styles.field}
                    hintText="Search"
                    value={text}
                    onChange={this.handleTextChange}
                />
                <RaisedButton
                    primary
                    disabled={!text}
                    label="Search"
                    className={styles.button}
                    onClick={this.handleSearch}
                />
            </Paper>
        );
    }
}