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
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      address: "",
      phone: "",
    };
  }

  validInput = () => {
    let arrTag = [
      "email",
      "password",
      "firstname",
      "lastname",
      "address",
      "phone",
    ];
    let isValid = true;

    for (let i = 0; i < arrTag.length; i++) {
      if (this.state[arrTag[i]] === "") {
        isValid = false;
        alert("Missing parameter", arrTag[i]);
        break;
      }
    }
    return isValid;
  };

  createNewUser = () => {
    let checkValid = this.validInput();
    if (checkValid) {
      this.props.createNewUser(this.state);
    }
  };

  handleChangeInput = (event, id) => {
    let copyState = { ...this.state };

    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };

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
                    onChange={(event) => this.handleChangeInput(event, "email")}
                    value={this.state.email}
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
                    onChange={(event) =>
                      this.handleChangeInput(event, "password")
                    }
                    value={this.state.password}
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
                    onChange={(event) =>
                      this.handleChangeInput(event, "firstname")
                    }
                    value={this.state.firstname}
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
                    onChange={(event) =>
                      this.handleChangeInput(event, "lastname")
                    }
                    value={this.state.lastname}
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
                    onChange={(event) =>
                      this.handleChangeInput(event, "address")
                    }
                    value={this.state.address}
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
                    onChange={(event) => this.handleChangeInput(event, "phone")}
                    value={this.state.phone}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => this.createNewUser()}
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
