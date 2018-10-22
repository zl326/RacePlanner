import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ErrorBoundary from './Misc/ErrorBoundary.jsx';

import GLInstance from './GoldenLayout/GLInstance.jsx'
import AppBarTabs from './AppBar/AppBarTabs.jsx'

class App extends TrackerReact(React.Component) {

  constructor() {
    super();
  };

  componentDidMount() {

  }

  render() {

    return (
      <div style={{
        width : '100%',
        height : '100%',
        display : 'flex',
      }}>
        <ErrorBoundary>
          <AppBarTabs />
        </ErrorBoundary>
      </div>
    )
  }
};

export default App;
