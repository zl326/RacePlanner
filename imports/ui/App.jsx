import React from 'react';
import Hello from './Hello.jsx';
import Info from './Info.jsx';
import GoldenLayout from 'golden-layout'
import jquery from 'jquery'
import StartupScripts from '/imports/ui/startup/StartupScripts'


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
      }]
    };

    // var myLayout = new GoldenLayout( config );
    //
    // myLayout.init();
    //
    // console.log($('#react-target'))
  }

  render() {

    return (
      <div>
        <StartupScripts />
        <div>
          <h1>Welcome to Meteor!</h1>
          <Hello />
          <Info />
        </div>
      </div>
    )
  }
};

export default App;
