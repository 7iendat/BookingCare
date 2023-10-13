import React, { Component } from "react";

import { connect } from "react-redux";

class HomeFooter extends Component {
  render() {
    return (
      <div className="home-footer">
        <div className="copyright">&copy; 2023 Booking Care</div>

        <div className="icon-social">
          <a target="_blank" href="https://facebook.com">
            <i className="fab fa-facebook-square facebook"></i>
          </a>
          <a target="_blank" href="https://youtube.com">
            <i className="fab fa-youtube youtube"></i>
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
