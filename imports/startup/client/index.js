import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../accounts-config.js';

import App from '../../ui/App.jsx';
import Index from '../../ui/Index.jsx';


import '../../ui/stylesheets/app.css';

Meteor.startup(() => {
  render(<App />,
      document.getElementById('render-target'));
});
