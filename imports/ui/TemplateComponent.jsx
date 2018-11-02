import React from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import ErrorBoundary from './Misc/ErrorBoundary.jsx';

class TemplateComponent extends React.Component {

  constructor(props) {
    super(props);
  };

  // componentDidMount() {}

  // shouldComponentUpdate(nextProps, nextState) {}

  // componentDidUpdate() {}

  // componentWillUnmount() {}

  // componentDidCatch() {}

  render() {

    return (
      <div>

      </div>
    )
  }
};

export default TemplateComponentContainer = withTracker((props) => {
  return {

  };
})(TemplateComponent);
