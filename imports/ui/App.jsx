import React from 'react';
import Hello from './Hello.jsx';
import Info from './Info.jsx';
import TestComponent from './TestComponent.jsx'
import GoldenLayout from 'golden-layout'

import '../../node_modules/golden-layout/src/css/goldenlayout-base.css'
import '../../node_modules/golden-layout/src/css/goldenlayout-dark-theme.css'

class App extends React.Component {

  constructor() {
    super();
  };

  componentDidMount() {
    var config = {
      content: [{
        type: 'row',
        content:[{
          type: 'component',
          componentName: 'testComponent',
          componentState: { label: 'A' }
        },{
          type: 'column',
          content:[{
            type: 'component',
            componentName: 'testComponent',
            componentState: { label: 'B' }
          },{
            type: 'component',
            componentName: 'testComponent',
            componentState: { label: 'C' }
          }]
        }]
      }],
      height : '100px',
    };

    var myLayout = new GoldenLayout( config , $('#gl-target'));

    myLayout.registerComponent( 'testComponent', TestComponent );

    myLayout.init();
    myLayout.updateSize($('#gl-target').width(), $('#gl-target').height());

    $(window).resize(function () {
      myLayout.updateSize($('#gl-target').width(), $('#gl-target').height());
    });

    console.log($('#react-target'))
  }

  render() {

    return (
      <div>
        {
          // <div>
          //   <h1>Welcome to Meteor!</h1>
          //   <Hello />
          //   <Info />
          // </div>
        }
      </div>
    )
  }
};

export default App;
