import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Dashboard from 'routes/Dashboard';
import { NotificationContainer } from 'react-notifications';

function App() {
  return (
    <Router>
      <NotificationContainer />
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route>
          <Redirect to="/dashboard/quick-ops/current" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
