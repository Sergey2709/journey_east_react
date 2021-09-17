import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

function FormToBeOne() {
  return (
    <Form style={{ margin: '80px 20px' }}>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>
          Email
        </Label>
        <Col sm={8}>
          <Input type="email" name="email" id="exampleEmail" placeholder="Введіть свій e-mail" />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="exampleText" sm={2}>
          Text Area
        </Label>
        <Col sm={8}>
          <Input type="textarea" name="text" id="exampleText" rows="10" placeholder="Введіть прохання про вступ, в довільній формі" />
        </Col>
      </FormGroup>

      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }} style={{marginTop: '50px'}}>
          <Button>Відправити</Button>
        </Col>
      </FormGroup>
    </Form>
  );
};

export default FormToBeOne;
