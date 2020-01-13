import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Octicon, {MarkGithub} from '@primer/octicons-react'

import Backup from './containers/Backup';
import Recover from './containers/Recover';

import {IntlProvider, FormattedMessage} from 'react-intl';
import locales from './locales/lang';
const locale = 'en';


const App: React.FC = () => {
  return (
    <Router>
      <IntlProvider locale={locale} messages={locales[locale]}>
        <header>
          <Navbar variant="dark" bg="dark">
            <Container>
              <Navbar.Brand href="/">Seed Backup</Navbar.Brand>
              <Nav>
                <Link className="nav-link" to="/"><FormattedMessage id="app.menu.backup" defaultMessage="Backup" /></Link>
                <Link className="nav-link" to="/recover"><FormattedMessage id="app.menu.recover" defaultMessage="Recover" /></Link>
              </Nav>
              <Nav className="ml-auto">
                <Link className="nav-link" to="//github.com/nigeon/seed-backup" target="_blank"><Octicon icon={MarkGithub} /></Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        
        <Container>
          <Row className="justify-content-md-center mt-5">
            <Col xs={12}>
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
