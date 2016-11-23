import React, { Component } from 'react';
import { teal500 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: teal500,
    },

});

export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}