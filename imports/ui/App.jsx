import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import GLComponent from './GLComponent/GLComponent.jsx'

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
          <GLComponent style="flex: 1;" />
        </div>
      </div>
    )
  }
};

export default App;
