import React from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import ErrorBoundary from '../Misc/ErrorBoundary.jsx';

import GoldenLayout from 'golden-layout'
import TestComponent from './TestComponent.jsx'
import WeatherSnapshotContainer from './WeatherSnapshot/WeatherSnapshot.jsx'

import '../../../node_modules/golden-layout/src/css/goldenlayout-base.css'
import '../../../node_modules/golden-layout/src/css/goldenlayout-dark-theme.css'

class GLInstance extends React.Component {

  constructor(props) {
    super(props);
  };

  componentDidMount() {
    var config = {
      content: [{
        type: 'row',
        content:[{
          type: 'react-component',
          component: 'testComponent',
          props: { label: 'A' }
        },{
          type: 'column',
          content:[{
            type: 'react-component',
            component: 'WeatherSnapshot',
            props: { label: 'B' }
          },{
            type: 'react-component',
            component: 'testComponent',
            props: { label: 'C' }
          }]
        }]
      }],
      height : '100px',
    };


    var parentElement = document.getElementById(`GLElement`);

    // Golden layout initialisation wrapped in a setTimeout to get around a bug
    // explained in https://github.com/golden-layout/golden-layout/pull/348
    setTimeout(() => {
      var layout = new GoldenLayout( config , parentElement);

      layout.registerComponent( 'testComponent', TestComponent );
      layout.registerComponent( 'WeatherSnapshot', WeatherSnapshotContainer );
      layout._isFullPage = true;

      layout.init();

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
    }, 0);
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
          flex : '1 1 0',
          minHeight: 0,
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
