import React, { Component } from "react";

import { connect } from "react-redux";
import "./Specialty.scss";
import Slider from "react-slick";

class Specialty extends Component {
  render() {
    return (
      <div className="section-share section-specialty">
        <div className="section-container">
          <div className="section-header">
            <span>Chuyên khoa phổ biến</span>
            <button>XEM THÊM</button>
          </div>

          <div className="section-body">
            <Slider {...this.props.setting}>
              <div className="img-customize ">
                <div className="bg-img section-specialty" />
                <div className="title-detail">Thần kinh 1</div>
              </div>
              <div className="img-customize ">
                <div className="bg-img section-specialty" />
                <div className="title-detail">Thần kinh 1</div>
              </div>
              <div className="img-customize ">
                <div className="bg-img section-specialty" />
                <div className="title-detail">Thần kinh 1</div>
              </div>
              <div className="img-customize ">
                <div className="bg-img section-specialty" />
                <div className="title-detail">Thần kinh 1</div>
              </div>
              <div className="img-customize ">
                <div className="bg-img section-specialty" />
                <div className="title-detail">Thần kinh 1</div>
              </div>
              <div className="img-customize ">
                <div className="bg-img section-specialty" />
                <div className="title-detail">Thần kinh 1</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
