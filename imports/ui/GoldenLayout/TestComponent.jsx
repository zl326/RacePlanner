import React from 'react';
import ReactDOM from 'react-dom';

class TestComponent extends React.Component {

  constructor(props) {
    super(props);
  };

  componentDidMount() {}

  render() {

    return (
      <div>
        <h1>{this.props.label}</h1>
      </div>
    )
  }
};

export default TestComponent;
