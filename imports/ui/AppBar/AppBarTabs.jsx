import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ErrorBoundary from '../Misc/ErrorBoundary.jsx';

import PropTypes from 'prop-types';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import GLInstance from '../GoldenLayout/GLInstance.jsx'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class AppBarTabs extends TrackerReact(React.Component) {
  constructor() {
    super();
  };

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    console.log(this.props)

    return (
      <div className={classes.root} style={{
        display : 'flex',
        flexDirection : 'column',
      }}>
        <MuiThemeProvider theme={this.props.theme}>
          <AppBar position="static" color="default" style={{
            flexGrow : 0,
            flexShrink : 1,
          }}>
            <Tabs
              value={value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              scrollable
              scrollButtons="auto"
            >
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
              <Tab label="Item Four" />
            </Tabs>
          </AppBar>
          <div style={{
            height : '100%',
            display : 'flex',
          }}>
            {value === 0 && <ErrorBoundary><GLInstance /></ErrorBoundary>}
            {value === 1 && <TabContainer>Item Two</TabContainer>}
            {value === 2 && <TabContainer>Item Three</TabContainer>}
            {value === 3 && <TabContainer>Item Four</TabContainer>}
            {value === 4 && <TabContainer>Item Five</TabContainer>}
            {value === 5 && <TabContainer>Item Six</TabContainer>}
            {value === 6 && <TabContainer>Item Seven</TabContainer>}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

AppBarTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBarTabs);
