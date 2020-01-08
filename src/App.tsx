import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Backup from './containers/Backup';
import Recover from './containers/Recover';

const App: React.FC = () => {
  return (
    <Router>
      <ul>
        <li><Link to="/">Backup</Link></li>
        <li><Link to="/recover">Recover</Link></li>
      </ul>

      <hr />

      <Switch>
        <Route exact path="/">
          <Backup />
        </Route>
        <Route path="/recover">
          <Recover />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
