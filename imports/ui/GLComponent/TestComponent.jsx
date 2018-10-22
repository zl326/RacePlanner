import React from 'react';

class TestComponent extends React.Component {

  constructor() {
    super();
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
