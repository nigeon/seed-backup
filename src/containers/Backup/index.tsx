import React from "react";
import { connect } from 'react-redux';
import appActions from '../../redux/app/actions'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormattedMessage } from "react-intl";

class Backup extends React.Component<any,any> {
  backup = () => {
    this.props.dispatch(appActions.sayHello());
  }

  render() {
    console.log('Hello is:', this.props.app.hello);
    return (
      <div>
        <h1><FormattedMessage id="backup.title" defaultMessage="Backup" /></h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label><FormattedMessage id="backup.from.seed_phrase.label" defaultMessage="Seed phrase" /></Form.Label>
            <Form.Control type="password" />
          </Form.Group>

          <Button variant="primary" onClick={this.backup}>
            <FormattedMessage id="backup.from.submit" defaultMessage="Backup" />
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  app: state.App,
});

export default connect(mapStateToProps)(Backup);