import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ErrorBoundary from './ErrorBoundary.jsx';

import GLInstance from './GLComponent/GLInstance.jsx'

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
        <div style={{
          width : '100%',
          height : '100%',
          display : 'flex',
          flexDirection : 'column',
        }}>
          <ErrorBoundary>
            <GLInstance style="flex: 1;" />
          </ErrorBoundary>
        </div>
      </div>
    )
  }
};

export default App;
