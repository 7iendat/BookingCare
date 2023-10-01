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
import _ from "lodash";

class ModalEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
    };
  }

  validInput = () => {
    let arrTag = [
      "email",
      "password",
      "firstName",
      "lastName",
      "address",
      "phoneNumber",
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

  handleChangeInput = (event, id) => {
    let copyState = { ...this.state };

    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };

  componentDidMount() {
    let currUser = this.props.currUser;

    if (currUser && !_.isEmpty(currUser)) {
      this.setState({
        id: currUser.id,
        email: currUser.email,
        firstName: currUser.firstName,
        lastName: currUser.lastName,
        address: currUser.address,
        phoneNumber: currUser.phoneNumber,
      });
    }
  }

  toggle = () => {
    this.props.toggle();
  };

  editUser = (data) => {
    this.props.editUser(data);
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
                    disabled
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row style={{ marginBottom: 12 }}>
              <Col md={6}>
                <FormGroup>
                  <Label for="firstName">firstName</Label>
                  <Input
                    id="firstName"
                    className="firstName"
                    placeholder="Enter firstName"
                    onChange={(event) =>
                      this.handleChangeInput(event, "firstName")
                    }
                    value={this.state.firstName}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="lastName">lastName</Label>
                  <Input
                    id="lastName"
                    className="lastName"
                    placeholder="Enter lastName "
                    onChange={(event) =>
                      this.handleChangeInput(event, "lastName")
                    }
                    value={this.state.lastName}
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
                    onChange={(event) =>
                      this.handleChangeInput(event, "phoneNumber")
                    }
                    value={this.state.phoneNumber}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => this.editUser(this.state)}
            style={{ height: 40, width: 60 }}
          >
            Edit
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
