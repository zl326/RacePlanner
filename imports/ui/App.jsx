import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ErrorBoundary from './Misc/ErrorBoundary.jsx';

import { MuiThemeProvider, createMuiTheme, withTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';

import AppBarTabs from './AppBar/AppBarTabs.jsx'

const theme = createMuiTheme({
  palette : {
    primary: pink,
    type: 'dark',
  },
  status : {
    danger: 'orange',
  }
});

class App extends TrackerReact(React.Component) {

  constructor() {
    super();
  };

  componentDidMount() {}

  render() {

    return (
      <div style={{
        width : '100%',
        height : '100%',
        display : 'flex',
      }}>
        <ErrorBoundary>
          <MuiThemeProvider theme={theme}>
            <AppBarTabs
              theme = {theme}
            />
          </MuiThemeProvider>
        </ErrorBoundary>
      </div>
    )
  }
};

export default withTheme()(App);
