import React from 'react';
import ReactDOM from 'react-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h1>
            Something went wrong.
          </h1>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
