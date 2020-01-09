import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Backup from './containers/Backup';
import Recover from './containers/Recover';

import {IntlProvider, FormattedMessage} from 'react-intl';
import locales from './locales/lang';
const locale = 'en';


const App: React.FC = () => {
  return (
    <Router>
      <IntlProvider locale={locale} messages={locales[locale]}>
        <Container>
          <Row>
            <Col>
              <ul>
                <li><Link to="/"><FormattedMessage id="app.menu.backup" defaultMessage="Backup" /></Link></li>
                <li><Link to="/recover"><FormattedMessage id="app.menu.recover" defaultMessage="Recover" /></Link></li>
              </ul>
            </Col>
          </Row>
          
          <Row className="justify-content-md-center">
            <Col xs={8}>
              <Switch>
                <Route exact path="/">
                  <Backup />
                </Route>
                <Route path="/recover">
                  <Recover />
                </Route>
              </Switch>
            </Col>
          </Row>

          </Container>
      </IntlProvider>
    </Router>
  );
}

export default App;
