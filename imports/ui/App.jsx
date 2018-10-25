import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ErrorBoundary from './Misc/ErrorBoundary.jsx';

import SideBar from './SideBar.jsx'

class App extends TrackerReact(React.Component) {

  constructor() {
    super();
  };

  componentDidMount() {}

  render() {

    return (
      <ErrorBoundary>
        <SideBar />
      </ErrorBoundary>
    )
  }
};

export default App;
