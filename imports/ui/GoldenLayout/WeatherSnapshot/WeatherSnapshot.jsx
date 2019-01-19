import React from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import ErrorBoundary from '../../Misc/ErrorBoundary.jsx';

class WeatherSnapshot extends React.Component {

  constructor(props) {
    super(props);

    const weather = Meteor.subscribe('weather');

    console.log(weather.find({_distance:10}))

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

export default WeatherSnapshotContainer = withTracker((props) => {
  return {
    // DB_Weather: DB_Weather.find({_distance:10}).fetch(),
  };
})(WeatherSnapshot);
