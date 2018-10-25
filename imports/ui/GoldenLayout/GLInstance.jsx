import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ErrorBoundary from '../Misc/ErrorBoundary.jsx';

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

    console.log(parentElement)

    // $(window).resize(function () {
    //   layout.updateSize(layout.container.width(), layout.container.height());
    // });
    // parentElement.onresize = function() {
    //   console.log(parentElement.style.width)
    // }
    // parentElement.addEventListener("resize", this.resizeGL);
    // resizeGL() {
    //   console.log('Hi')
    // }

    var resizeGL = new ResizeObserver( entries => {
      layout.updateSize(layout.container.width(), layout.container.height());
      console.log(layout.container.width())
    });

    resizeGL.observe(parentElement)

  }



  // shouldComponentUpdate(nextProps, nextState) {}

  // componentDidUpdate() {}

  // componentWillUnmount() {}

  // componentDidCatch() {}

  render() {

    return (
      <ErrorBoundary>
        <div id="GLElement" style={{
          // width : '100%',
          // height : '100%',
          margin : '0px',
          padding : '0px',
          flex : 'auto',
        }}>
        </div>
      </ErrorBoundary>
    )
  }
};

export default GLInstance;
