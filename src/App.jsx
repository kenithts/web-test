import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Authenticated from './Layouts/Authenticated';

function App() {
  return (
    <Router>
      <Switch>
        <Authenticated>
          <Route path="/dashboard/quick-ops/current" />
        </Authenticated>
      </Switch>
    </Router>
  );
}

export default App;
