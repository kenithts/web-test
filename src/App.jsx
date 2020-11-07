import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Dashboard from 'routes/Dashboard';

function App() {
  return (
    <Router>
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
