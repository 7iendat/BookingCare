import React, { Component, Fragment } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import { LANGUAGE } from "../../utils/constant";
import { handleChangeLanguage } from "../../store/actions";

class HomeHeader extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguageApp(language);
  };

  render() {
    let language = this.props.language;
    return (
      <Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-header">
              <i className="fas fa-bars"></i>
              <div className="logo-header"></div>
            </div>
            <div className="center-header">
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="headerhome.specialty" />
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="headerhome.search-doctor-by-specialty" />
                </div>
              </div>

              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="headerhome.medical-facility" />
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="headerhome.select-hospital-clinic" />
                </div>
              </div>

              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="headerhome.doctor" />
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="headerhome.select-doctor" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="headerhome.examination-package" />
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="headerhome.general-health-examination" />
                </div>
              </div>
            </div>
            <div className="right-header">
              <div className="support">
                <i className="fas fa-question-circle"></i>
                <b>
                  <FormattedMessage id="headerhome.support" />
                </b>
              </div>
              <div className="translate">
                <div
                  className={
                    language === LANGUAGE.VI
                      ? "vietnamese active"
                      : "vietnamese"
                  }
                  onClick={() => {
                    this.changeLanguage(LANGUAGE.VI);
                  }}
                >
                  Vietnamese
                </div>{" "}
                |
                <div
                  className={
                    language === LANGUAGE.EN ? "english active" : "english"
                  }
                  onClick={() => {
                    this.changeLanguage(LANGUAGE.EN);
                  }}
                >
                  English
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="banner">
          <div className="up-banner">
            <div className="title1">
              <FormattedMessage id="headerhome.medical-foundation" />
            </div>
            <div className="title2">
              <FormattedMessage id="headerhome.holistic-health-care" />
            </div>
            <div className="search">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Tìm bác sĩ" />
            </div>
          </div>
          <div className="down-banner">
            <div className="options">
              <div className="option">
                <div className="icon-option">
                  <i className="far fa-hospital"></i>
                </div>
                <div className="text-option">
                  <FormattedMessage id="headerhome.specialty-examination" />
                </div>
              </div>
              <div className="option">
                <div className="icon-option">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="text-option">
                  <FormattedMessage id="headerhome.telemedicine" />
                </div>
              </div>{" "}
              <div className="option">
                <div className="icon-option">
                  <i className="fas fa-money-check"></i>
                </div>
                <div className="text-option">
                  <FormattedMessage id="headerhome.general-examination" />
                </div>
              </div>{" "}
              <div className="option">
                <div className="icon-option">
                  <i className="fas fa-vial"></i>
                </div>
                <div className="text-option">
                  <FormattedMessage id="headerhome.medical-tests" />
                </div>
              </div>{" "}
              <div className="option">
                <div className="icon-option">
                  <i className="fas fa-tasks"></i>
                </div>
                <div className="text-option">
                  <FormattedMessage id="headerhome.health-tests" />
                </div>
              </div>{" "}
              <div className="option">
                <div className="icon-option">
                  <i className="fas fa-home"></i>
                </div>
                <div className="text-option">
                  <FormattedMessage id="headerhome.medical-close-home" />
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </Fragment>
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
  return {
    changeLanguageApp: (lang) => dispatch(handleChangeLanguage(lang)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
