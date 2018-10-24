import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import TestComponent from './TestComponent.jsx'
import GoldenLayout from 'golden-layout'

import '../../../node_modules/golden-layout/src/css/goldenlayout-base.css'
import '../../../node_modules/golden-layout/src/css/goldenlayout-dark-theme.css'

class GLInstance extends TrackerReact(React.Component) {

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


    var parentElement = document.getElementById(`GLElement`);

    var layout = new GoldenLayout( config , parentElement);

    layout.registerComponent( 'testComponent', TestComponent );
    layout._isFullPage = true;

    layout.init();
    // layout.updateSize();

    // layout.updateSize(parentElement.style.width, parentElement.style.height);
    // $(window).resize(function () {
    //   layout.updateSize(parentElement.style.width, parentElement.style.height);
    // });
  }

  shouldComponentUpdate() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  componentDidCatch() {}

  render() {

    return (
      <div id="GLElement" style={{
        width : '100%',
        height : '100%',
        margin : '0px',
        padding : '0px',
        // flexGrow : 1,
      }}>

      </div>
    )
  }
};

export default GLInstance;
