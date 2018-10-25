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

    // Ensure the Golden Layout is always resized correctly when the div size changes
    var resizeGL = new ResizeObserver( entries => {
      layout.updateSize(layout.container.width(), layout.container.height());
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
