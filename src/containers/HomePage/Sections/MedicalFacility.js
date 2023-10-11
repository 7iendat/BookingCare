import React, { Component } from "react";

import { connect } from "react-redux";
import "./MedicalFacility.scss";
import Slider from "react-slick";

class MedicalFacility extends Component {
  render() {
    return (
      <div className="section-share section-medical-facility">
        <div className="section-container">
          <div className="section-header">
            <span>Cơ sở y tế nổi bật</span>
            <button>XEM THÊM</button>
          </div>

          <div className="section-body ">
            <Slider {...this.props.setting}>
              <div className="img-customize ">
                <div className="bg-img section-medical-facility" />
                <div className="title-detail ">Bệnh viện Hữu nghị Việt Đức</div>
              </div>
              <div className="img-customize ">
                <div className="bg-img section-medical-facility" />
                <div className="title-detail">Bệnh viện Hữu nghị Việt Đức</div>
              </div>
              <div className="img-customize ">
                <div className="bg-img section-medical-facility" />
                <div className="title-detail">Bệnh viện Hữu nghị Việt Đức</div>
              </div>
              <div className="img-customize ">
                <div className="bg-img section-medical-facility" />
                <div className="title-detail">Bệnh viện Hữu nghị Việt Đức</div>
              </div>
              <div className="img-customize ">
                <div className="bg-img section-medical-facility" />
                <div className="title-detail">Bệnh viện Hữu nghị Việt Đức</div>
              </div>
              <div className="img-customize ">
                <div className="bg-img section-medical-facility" />
                <div className="title-detail">Bệnh viện Hữu nghị Việt Đức</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
