import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/App'

window.React = React;
window.ReactDOM = ReactDOM;

Meteor.startup(() => {
  render(<App />, document.getElementById('react-target'));
});
