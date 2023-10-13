import React, { Component } from "react";

import { connect } from "react-redux";

class About extends Component {
  render() {
    return (
      <div className="about-section">
        <div className="information">
          <div className="logo"></div>
          <div className="infor-detail">
            <h4>Công ty Cổ phần Công nghệ BookingCare</h4>
            <span>
              <i className="fas fa-map-marker-alt"></i> Lô B4/D21, Khu đô thị
              mới Cầu Giấy, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành phố Hà
              Nội, Việt Nam
            </span>
            <br />
            <span>
              <i className="fas fa-check"></i> ĐKKD số: 0106790291. Sở KHĐT Hà
              Nội cấp ngày 16/03/2015
            </span>
          </div>
        </div>

        <div class="partner">
          <h4>Đối tác bảo trợ nội dung</h4>
          <div className="partner-infor">
            <div className="partner-detail">
              <div className="img-partner"></div>
              <div className="infor-partner">
                <h5>Hệ thống y khoa chuyên sâu quốc tế Bernard</h5>
                <span>Bảo trợ chuyên mục nội dung “y khoa chuyên sâu”</span>
              </div>
            </div>
            <div className="partner-detail">
              <div className="img-partner"></div>
              <div className="infor-partner">
                <h5>Hệ thống y khoa chuyên sâu quốc tế Bernard</h5>
                <span>Bảo trợ chuyên mục nội dung “y khoa chuyên sâu”</span>
              </div>
            </div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
