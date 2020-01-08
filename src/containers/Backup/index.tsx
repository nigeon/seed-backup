import React, { Component } from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class extends Component {
  render() {
    return (
      <div>
        <h1>Backup</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Seed phrase</Form.Label>
            <Form.Control type="password" />
          </Form.Group>

          <Button variant="primary" type="submit">Backup</Button>
        </Form>
      </div>
    );
  }
}