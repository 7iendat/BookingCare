import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import { createNewUser, getAllUsers } from "../../services/userService";
import ModalUser from "./ModalUser";

class UserManage extends Component {
  constructor(pros) {
    super(pros);
    this.state = {
      arrUsers: [],
      isOpenModal: false,
    };
  }

  handleCreateNewUser = async (data) => {
    try {
      let result = await createNewUser(data);

      if (result && result !== 0) {
        alert(result.message);
      } else {
        alert(result.message);
        await this.getAllUsers();
        this.setState({
          isOpenModal: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  async componentDidMount() {
    await this.getAllUsers();
  }

  getAllUsers = async () => {
    let response = await getAllUsers("ALL");

    if (response && response.errCode === 0) {
      this.setState({
        arrUsers: response.usersList,
      });
    }
  };

  handleNewUser = () => {
    this.setState({
      isOpenModal: true,
    });
  };

  toggleUserModal = () => {
    this.setState({
      isOpenModal: !this.state.isOpenModal,
    });
  };
  render() {
    let arrUsers = this.state.arrUsers;
    return (
      <div className="users-container">
        <ModalUser
          isOpen={this.state.isOpenModal}
          toggle={this.toggleUserModal}
          createNewUser={this.handleCreateNewUser}
        />
        <div className="title text-center">MANAGE USERS</div>

        <div className="mx-3">
          <button
            className="btn btn-primary px-3"
            onClick={(e) => this.handleNewUser(e)}
          >
            <i className="fas fa-plus"></i>Add new user
          </button>
        </div>

        <div className="table-users mt-3 mx-2">
          <table id="customers">
            <tr>
              <th>Index</th>
              <th>First Name</th>
              <th>Second Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
            {arrUsers &&
              arrUsers.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.phoneNumber}</td>
                    <td>{item.roleId}</td>
                    <td>
                      <button className="btn-edit">
                        <i className="fas fa-pencil-alt"></i>
                      </button>
                      <button className="btn-delete">
                        <i class="fas fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
