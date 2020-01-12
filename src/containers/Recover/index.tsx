import React from "react";
import { connect } from 'react-redux';

import appActions from '../../redux/app/actions'

import { FormattedMessage } from "react-intl";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Recover extends React.Component<any,any> {
  componentDidMount = () => {
    this.props.dispatch(appActions.resetAppState());
    this.props.dispatch(appActions.setSharesNumber(3));
  }

  onChangeSharesAmount = (e:any) => {
    this.props.dispatch(appActions.setSharesNumber(+e.target.value));
  }

  onIncreaseSharesAmount = (e:any) => {
    this.props.dispatch(appActions.setSharesNumber(this.props.app.sharesNumber+1));
  }

  onDecreaseSharesAmount = (e:any) => {
    this.props.dispatch(appActions.setSharesNumber(this.props.app.sharesNumber-1));
  }
   
  handleSubmit = (e:any) => {
    e.preventDefault();

    const shares: string[] = [];
    for(const s of e.target.elements.share){
      if(s.value){
        shares.push(s.value);
      }
    }

    this.props.dispatch(appActions.setShares(shares));
    this.props.dispatch(appActions.recoverSecret());
  }

  render() {
    const sharesFields = [];
    for (let a = 0; a < this.props.app.sharesNumber; a++){
      sharesFields.push(<InputGroup className="mb-3" key={a}><Form.Control name="share" type="input" /></InputGroup>);
    }

    return (
      <div>
        <h1><FormattedMessage id="recover.title" defaultMessage="Recover" /></h1>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label><FormattedMessage id="recover.form.shares.label" defaultMessage="Shares Amount" /></Form.Label>
                <InputGroup>
                  <Form.Control type="text" value={this.props.app.sharesNumber} onChange={this.onChangeSharesAmount} />
                  <InputGroup.Append>
                    <Button onClick={this.onIncreaseSharesAmount} variant="outline-secondary">+</Button>
                    <Button onClick={this.onDecreaseSharesAmount} variant="outline-secondary">-</Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form.Group>

              <Form.Group>
                <Form.Label><FormattedMessage id="recover.form.shares.label" defaultMessage="Shares" /></Form.Label>
                { sharesFields }
              </Form.Group>

              <Button type="submit"><FormattedMessage id="recover.form.recover" defaultMessage="Recover" /></Button>
            </Col>
          </Row>

          {this.props.app.secret &&
            <Row className="mt-4">
              <Col>
                <h3><FormattedMessage id="recover.form.seed_phrase.label" defaultMessage="Seed phrase" /></h3>
                <Form.Group>
                  <Form.Control type="text" readOnly={true} value={this.props.app.secret} />
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

export default connect(mapStateToProps)(Recover);