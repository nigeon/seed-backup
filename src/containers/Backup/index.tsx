import React from "react";
import { connect } from 'react-redux';
import appActions from '../../redux/app/actions'

import { FormattedMessage } from "react-intl";
import Form from 'react-bootstrap/Form';

class Backup extends React.Component<any,any> {
  backup = (e:any) => {
    this.props.dispatch(appActions.setSecret(e.target.value));
  }

  render() {
    console.log('PROPS: ', this.props);
    return (
      <div>
        <h1><FormattedMessage id="backup.title" defaultMessage="Backup" /></h1>
        <Form>
          <Form.Group>
            <Form.Label><FormattedMessage id="backup.from.seed_phrase.label" defaultMessage="Seed phrase" /></Form.Label>
            <Form.Control type="password" onChange={this.backup} />
          </Form.Group>

          {this.props.app.shares.length > 0 && 
            <Form.Group>
              <Form.Label><FormattedMessage id="backup.from.shares.label" defaultMessage="Seed Shares" /></Form.Label>

              {this.props.app.shares.map((s: any, i: number) => {
                return <Form.Control type="input" key={i} value={new TextDecoder("utf-8").decode(s)} readOnly={true} />
              })}
            </Form.Group>
          }
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  app: state.App,
});

export default connect(mapStateToProps)(Backup);