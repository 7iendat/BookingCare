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

// import userService from "../services/userService";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errorMessage: "",
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
    this.setState({
      errorMessage: "",
    });
    try {
      let data = await handleLoginApi(this.state.username, this.state.password);
      if (data && data.errCode !== 0) {
        this.setState({
          errorMessage: data.message,
        });
      }

      if (data && data.errCode === 0) {
        this.props.userLoginSuccess(data.user);
        console.log("success", data.user);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.data) {
          this.setState({
            errorMessage: error.response.data.message,
          });
        }
      }
    }
  };
  // redirectToSystemPage = () => {
  //     const { navigate } = this.props;
  //     const redirectPath = '/system/user-manage';
  //     navigate(`${redirectPath}`);
  // }

  // processLogin = () => {
  //     const { username, password } = this.state;

  //     const { userLoginSuccess, userLoginFail } = this.props;
  //     let loginBody = {
  //         username: 'user',
  //         password: '123456'
  //     }
  //     //sucess
  //     let userInfo = {
  //         "tlid": "0",
  //         "tlfullname": "useristrator",
  //         "custype": "A",
  //         "accessToken": "eyJhbGciOiJIU"
  //     }

  //     userLoginSuccess(userInfo);
  //     this.refresh();
  //     this.redirectToSystemPage();
  //     try {
  //         userService.login(loginBody)
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
            <div className="col-12" style={{ color: "red" }}>
              <p> {this.state.errorMessage}</p>
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
    userLoginSuccess: (userInfo) =>
      dispatch(actions.userLoginSuccess(userInfo)),
    userLoginFail: () => dispatch(actions.userLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
