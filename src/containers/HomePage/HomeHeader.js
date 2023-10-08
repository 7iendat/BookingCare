import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import "./HomeHeader.scss";

class HomeHeader extends Component {
  render() {
    return (
      <Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-header">
              <i class="fas fa-bars"></i>
              <div className="logo-header"></div>
            </div>
            <div className="center-header">
              <div className="child-content">
                <div>
                  <b>Chuyên khoa</b>
                </div>
                <div className="sub-title">Tìm bác sĩ theo chuyên khoa</div>
              </div>

              <div className="child-content">
                <div>
                  <b>Cơ sở y tế</b>
                </div>
                <div className="sub-title">Chọn bệnh viện phòng khám</div>
              </div>

              <div className="child-content">
                <div>
                  <b>Bác sĩ</b>
                </div>
                <div className="sub-title">Chọn bác sĩ giỏi</div>
              </div>
              <div className="child-content">
                <div>
                  <b>Gói khám</b>
                </div>
                <div className="sub-title">Khám sức khỏe tổng quát</div>
              </div>
            </div>
            <div className="right-header">
              <div className="support">
                <i class="fas fa-question-circle"></i>
                <b>Hỗ trợ</b>
              </div>
              <div className="translate">
                <div className="vietnamese">Vietnamese</div> |
                <div className="english">English</div>
              </div>
            </div>
          </div>
        </div>

        <div className="banner">
          <div className="up-banner">
            <div className="title1">NỀN TẢNG Y TẾ</div>
            <div className="title2">CHĂM SÓC SỨC KHỎE TOÀN DIỆN</div>
            <div className="search">
              <i class="fas fa-search"></i>
              <input type="text" placeholder="Tìm bác sĩ" />
            </div>
          </div>
          <div className="down-banner">
            <div className="options">
              <div className="option">
                <div className="icon-option">
                  <i class="far fa-hospital"></i>
                </div>
                <div className="text-option">Khám Chuyên khoa</div>
              </div>
              <div className="option">
                <div className="icon-option">
                  <i class="fas fa-mobile-alt"></i>
                </div>
                <div className="text-option">Khám từ xa</div>
              </div>{" "}
              <div className="option">
                <div className="icon-option">
                  <i class="fas fa-money-check"></i>
                </div>
                <div className="text-option">Khám Tổng quát</div>
              </div>{" "}
              <div className="option">
                <div className="icon-option">
                  <i class="fas fa-vial"></i>
                </div>
                <div className="text-option">Xét nghiệm y học</div>
              </div>{" "}
              <div className="option">
                <div className="icon-option">
                  <i class="fas fa-head-side-virus"></i>
                </div>
                <div className="text-option">Sức khỏe tinh thần</div>
              </div>{" "}
              <div className="option">
                <div className="icon-option">
                  <i class="fas fa-tooth"></i>
                </div>
                <div className="text-option">Khám nha khoa</div>
              </div>{" "}
              <div className="option">
                <div className="icon-option">
                  <i class="fas fa-tasks"></i>
                </div>
                <div className="text-option">Bài Test sức khỏe</div>
              </div>{" "}
              <div className="option">
                <div className="icon-option">
                  <i class="fas fa-home"></i>
                </div>
                <div className="text-option">Y tế gần bạn</div>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
