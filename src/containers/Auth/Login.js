import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import { handleLoginApi } from "../../services/userService";

import * as actions from "../../store/actions";
// import { KeyCodeUtils, LanguageUtils } from "../utils";

// import userIcon from "../../src/assets/images/user.svg";
// import passIcon from "../../src/assets/images/pass.svg";
import "./Login.scss";
// import { FormattedMessage } from "react-intl";

// import adminService from "../services/adminService";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    // this.btnLogin = React.createRef();
  }

  // state = {
  //     ...this.initialState
  // };

  // refresh = () => {
  //     this.setState({
  //         ...this.initialState
  //     })
  // }

  onUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };

  onPasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleLogin = async () => {
    try {
      await handleLoginApi(this.state.username, this.state.password);
    } catch (error) {
      console.log(error);
    }
  };
  // redirectToSystemPage = () => {
  //     const { navigate } = this.props;
  //     const redirectPath = '/system/user-manage';
  //     navigate(`${redirectPath}`);
  // }

  // processLogin = () => {
  //     const { username, password } = this.state;

  //     const { adminLoginSuccess, adminLoginFail } = this.props;
  //     let loginBody = {
  //         username: 'admin',
  //         password: '123456'
  //     }
  //     //sucess
  //     let adminInfo = {
  //         "tlid": "0",
  //         "tlfullname": "Administrator",
  //         "custype": "A",
  //         "accessToken": "eyJhbGciOiJIU"
  //     }

  //     adminLoginSuccess(adminInfo);
  //     this.refresh();
  //     this.redirectToSystemPage();
  //     try {
  //         adminService.login(loginBody)
  //     } catch (e) {
  //         console.log('error login : ', e)
  //     }

  // }

  // handlerKeyDown = (event) => {
  //     const keyCode = event.which || event.keyCode;
  //     if (keyCode === KeyCodeUtils.ENTER) {
  //         event.preventDefault();
  //         if (!this.btnLogin.current || this.btnLogin.current.disabled) return;
  //         this.btnLogin.current.click();
  //     }
  // };

  // componentDidMount() {
  //     document.addEventListener('keydown', this.handlerKeyDown);
  // }

  // componentWillUnmount() {
  //     document.removeEventListener('keydown', this.handlerKeyDown);
  //     // fix Warning: Can't perform a React state update on an unmounted component
  //     this.setState = (state, callback) => {
  //         return;
  //     };
  // }

  render() {
    // const { username, password, loginError } = this.state;
    // const { lang } = this.props;

    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 text-center title">Login</div>
            <div className="col-12 form-group mb-3">
              <label>Username:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                value={this.state.username}
                onChange={(e) => this.onUsernameChange(e)}
              />
            </div>

            <div className="col-12 form-group mb-3">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={this.state.password}
                onChange={(e) => this.onPasswordChange(e)}
              />
            </div>

            <div className="col-12">
              <button className="btn-login" onClick={() => this.handleLogin()}>
                Login
              </button>
            </div>

            <div className="col-12 text-center mt-2 mb-3">
              <span className="forgot-password">Forgot your password?</span>
            </div>

            <div className="col-12 text-center">Or sign in with:</div>

            <div className="col-12 icon-social">
              <i className="fab fa-google-plus-g google"></i>
              <i className="fab fa-facebook-f facebook"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
