import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './Misc/ErrorBoundary.jsx';

import SideBar from './SideBar.jsx'

export default class App extends React.Component {

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
