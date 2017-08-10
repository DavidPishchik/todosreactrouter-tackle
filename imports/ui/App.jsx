import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Tasks } from '../api/tasks.js';
import Task from './Task.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import Papa from 'papaparse';
import DropboxChooser from 'react-dropbox-chooser';
import Index from './Index.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// App component - represents the whole app
const App = props => (
  <Router>
    {!props.loading ? <div className="App">
      <div>
        <Switch>
          <Route exact name="index" path="/" component={Index} />
        </Switch>
      </div>
    </div> : ''}
  </Router>
);

App.propTypes = {
  tasks: PropTypes.array.isRequired,
  incompleteCount: PropTypes.number.isRequired,
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  Meteor.subscribe('tasks');

  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user(),
  };
}, App);
