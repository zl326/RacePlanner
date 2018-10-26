import React from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import ErrorBoundary from '../Misc/ErrorBoundary.jsx';

import TestComponent from './TestComponent.jsx'
import GoldenLayout from 'golden-layout'

import '../../../node_modules/golden-layout/src/css/goldenlayout-base.css'
import '../../../node_modules/golden-layout/src/css/goldenlayout-dark-theme.css'

class GLInstance extends React.Component {

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
    // Check if the user is on Chrome
    if (navigator.vendor == 'Google Inc.') {
      // If Chrome, use ResizeObserver
      var resizeGL = new ResizeObserver( entries => {
        layout.updateSize(layout.container.width(), layout.container.height());
      });
      resizeGL.observe(parentElement)
    }
    else {
      // // If not Chrome, use MutationObserver
      // var resizeGL = new MutationObserver( (mutations) => {
      //   console.log(mutations)
      //   mutations.forEach(function(mutation){
      //     if (mutation.type === 'attributes' && mutation.attributeName === 'width') {
      //       layout.updateSize(layout.container.width(), layout.container.height());
      //     }
      //   })
      // });
      // resizeGL.observe(parentElement, { attributes: true});
    }

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

export default GLInstanceContainer = withTracker((props) => {
  return {

  };
})(GLInstance);
