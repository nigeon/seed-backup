import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import {IntlProvider, FormattedMessage} from 'react-intl';

import Backup from './containers/Backup';
import Recover from './containers/Recover';

const messages = {
  'menubackup': 'Backup',
  'menurecover': 'Recover',
};

const App: React.FC = () => {
  return (
    <Router>
      <IntlProvider locale="en" messages={messages}>
        <ul>
          <li><Link to="/"><FormattedMessage id="menu.backup" defaultMessage="Backup" /></Link></li>
          <li><Link to="/recover"><FormattedMessage id="menu.recover" defaultMessage="Recover" /></Link></li>
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
      </IntlProvider>
    </Router>
  );
}

export default App;
