import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ErrorBoundary from './Misc/ErrorBoundary.jsx';

class TemplateComponent extends TrackerReact(React.Component) {

  constructor() {
    super();
  };

  componentDidMount() {}

  shouldComponentUpdate() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  componentDidCatch() {}

  render() {

    return (
      <div>

      </div>
    )
  }
};

export default TemplateComponent;
