import React from "react";
import { connect } from 'react-redux';
import appActions from '../../redux/app/actions'

import { FormattedMessage } from "react-intl";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


class Backup extends React.Component<any,any> {
  onChangeSecret = (e:any) => {
    this.props.dispatch(appActions.setSecret(e.target.value));
  }

  onChangeSharesAmount = (e:any) => {
    this.props.dispatch(appActions.setSharesNumber(+e.target.value));
  }

  onChangeThresholdAmount = (e:any) => {
    this.props.dispatch(appActions.setThresholdNumber(+e.target.value));
  }

  render() {
    return (
      <div>
        <h1><FormattedMessage id="backup.title" defaultMessage="Backup" /></h1>
        <Form>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label><FormattedMessage id="backup.from.seed_phrase.label" defaultMessage="Seed phrase" /></Form.Label>
                <Form.Control type="password" onChange={this.onChangeSecret} />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group>
                <Form.Label><FormattedMessage id="backup.from.shares_amount.label" defaultMessage="Shares amount:" /></Form.Label> {this.props.app.sharesNumber}
                <Form.Control type="range" min="2" max="20" value={this.props.app.sharesNumber} onChange={this.onChangeSharesAmount}  />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label><FormattedMessage id="backup.from.threshold_amount.label" defaultMessage="Threshold amount:" /></Form.Label> {this.props.app.thresholdNumber}
                <Form.Control type="range" min="2" max={this.props.app.sharesNumber} value={this.props.app.thresholdNumber} onChange={this.onChangeThresholdAmount}  />
              </Form.Group>
            </Col>
          </Row>

          {this.props.app.shares.length > 0 && 
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label><FormattedMessage id="backup.from.shares.label" defaultMessage="Shares" /></Form.Label>

                  {this.props.app.shares.map((s: any, i: number) => {
                    return <InputGroup className="mb-3" key={i}><Form.Control type="input" value={s.toString('hex')} readOnly={true} /></InputGroup>
                  })}
                </Form.Group>
              </Col>
            </Row>
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