import React, { Component } from "react";

import { connect } from "react-redux";
import Slider from "react-slick";

class OutStandingDoctor extends Component {
  render() {
    return (
      <div className="section-share section-doctor">
        <div className="section-container">
          <div className="section-header">
            <span>Bác sĩ nổi bật tuần qua</span>
            <button>TÌM KIẾM</button>
          </div>

          <div className="section-body">
            <Slider {...this.props.setting}>
              <div className="img-customize ">
                <div className="bg-img section-doctor" />
                <div className="title-detail ">
                  Khám Nam học tại Trung tâm sức khỏe Nam Giới Men's Health
                </div>
              </div>
              <div className="img-customize ">
                <div className="bg-img section-doctor" />
                <div className="title-detail">
                  Khám Nam học tại Trung tâm sức khỏe Nam Giới Men's Health
                </div>
              </div>
              <div className="img-customize ">
                <div className="bg-img section-doctor" />
                <div className="title-detail">
                  Khám Nam học tại Trung tâm sức khỏe Nam Giới Men's Health
                </div>
              </div>
              <div className="img-customize ">
                <div className="bg-img section-doctor" />
                <div className="title-detail">
                  Khám Nam học tại Trung tâm sức khỏe Nam Giới Men's Health
                </div>
              </div>
              <div className="img-customize ">
                <div className="bg-img section-doctor" />
                <div className="title-detail">
                  Khám Nam học tại Trung tâm sức khỏe Nam Giới Men's Health
                </div>
              </div>
              <div className="img-customize ">
                <div className="bg-img section-doctor" />
                <div className="title-detail">
                  Khám Nam học tại Trung tâm sức khỏe Nam Giới Men's Health
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

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
