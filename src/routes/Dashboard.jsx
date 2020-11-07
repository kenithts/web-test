import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Authenticated from 'layouts/Authenticated';
import Refund from 'pages/refund';

const Dashboard = () => (
  <Authenticated>
    <Switch>
      <Route path="/dashboard/quick-ops/current">
        <Refund />
      </Route>
      <Route>
        <Redirect to="/dashboard/quick-ops/current" />
      </Route>
    </Switch>
  </Authenticated>
);

export default Dashboard;
