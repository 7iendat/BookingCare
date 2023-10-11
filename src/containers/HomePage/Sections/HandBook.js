import React, { Component } from "react";

import { connect } from "react-redux";
import Slider from "react-slick";

class HandBook extends Component {
  render() {
    return (
      <div className="section-share section-handbook">
        <div className="section-container">
          <div className="section-header">
            <span>Cẩm nang</span>
            <button>TẤT CẢ BÀI VIẾT</button>
          </div>

          <div className="section-body">
            <Slider {...this.props.setting}>
              <div className="img-customize ">
                <div className="bg-img section-handbook" />
                <div className="title-detail ">
                  Đặt lịch chăm sóc sức khỏe tại nhà, tại viện cho người cao
                  tuổi, người bệnh
                </div>
              </div>
              <div className="img-customize ">
                <div className="bg-img section-handbook" />
                <div className="title-detail">
                  Đặt lịch chăm sóc sức khỏe tại nhà, tại viện cho người cao
                  tuổi, người bệnh
                </div>
              </div>
              <div className="img-customize ">
                <div className="bg-img section-handbook" />
                <div className="title-detail">
                  Đặt lịch chăm sóc sức khỏe tại nhà, tại viện cho người cao
                  tuổi, người bệnh
                </div>
              </div>
              <div className="img-customize ">
                <div className="bg-img section-handbook" />
                <div className="title-detail">
                  Đặt lịch chăm sóc sức khỏe tại nhà, tại viện cho người cao
                  tuổi, người bệnh
                </div>
              </div>
              <div className="img-customize ">
                <div className="bg-img section-handbook" />
                <div className="title-detail">
                  Đặt lịch chăm sóc sức khỏe tại nhà, tại viện cho người cao
                  tuổi, người bệnh
                </div>
              </div>
              <div className="img-customize ">
                <div className="bg-img section-handbook" />
                <div className="title-detail">
                  Đặt lịch chăm sóc sức khỏe tại nhà, tại viện cho người cao
                  tuổi, người bệnh
                </div>
              </div>
            </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
