import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ErrorBoundary from './Misc/ErrorBoundary.jsx';

import SiderDemo from './Layout.jsx'

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
        margin : '0px',
        padding : '0px',
        display : 'flex',
      }}>
        <ErrorBoundary>
          <SiderDemo />
        </ErrorBoundary>
      </div>
    )
  }
};

export default App;
