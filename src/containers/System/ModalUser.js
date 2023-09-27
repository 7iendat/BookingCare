import React, { Component } from "react";

import { connect } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Label,
  Col,
  Row,
  Form,
} from "reactstrap";
class ModalUser extends Component {
  state = {};

  componentDidMount() {}

  toggle = () => {
    this.props.toggle();
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => this.toggle()}
        className={"hunter"}
        size="lg"
      >
        <ModalHeader toggle={() => this.toggle()}>
          Create a new user
        </ModalHeader>
        <ModalBody>
          <Form>
            <Row style={{ marginBottom: 12 }}>
              <Col md={6}>
                <FormGroup>
                  <Label for="email">Email:</Label>
                  <Input
                    id="email"
                    className="email"
                    placeholder="Enter a email"
                    type="email"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="password">Password:</Label>
                  <Input
                    id="password"
                    className="password"
                    placeholder="Enter a password "
                    type="password"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row style={{ marginBottom: 12 }}>
              <Col md={6}>
                <FormGroup>
                  <Label for="firstName">FirstName</Label>
                  <Input
                    id="firstName"
                    className="firstName"
                    placeholder="Enter firstName"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="lastName">LastName</Label>
                  <Input
                    id="lastName"
                    className="lastName"
                    placeholder="Enter LastName "
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row style={{ marginBottom: 12 }}>
              <Col md={6}>
                <FormGroup>
                  <Label for="address">Address</Label>
                  <Input
                    id="address"
                    className="address"
                    placeholder="Enter address"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="numberPhone">Phone: </Label>
                  <Input
                    id="numPhone"
                    className="numberPhone"
                    placeholder="0708340225"
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => this.toggle()}
            style={{ height: 40, width: 60 }}
          >
            Create
          </Button>{" "}
          <Button
            color="secondary"
            onClick={() => this.toggle()}
            style={{ height: 40, width: 60 }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
