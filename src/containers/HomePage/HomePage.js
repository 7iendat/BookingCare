import React, { Component } from "react";

import { connect } from "react-redux";
import HomeHeader from "./HomeHeader";
import Specialty from "./Sections/Specialty";
import "./HomePage.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MedicalFacility from "./Sections/MedicalFacility";
import OutStandingDoctor from "./Sections/OutStandingDoctor";
import HandBook from "./Sections/HandBook";
import About from "./Sections/About";
import HomeFooter from "./HomeFooter";
import Media from "./Sections/Media";

class HomePage extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div>
        <HomeHeader />
        <Specialty setting={settings} />
        <MedicalFacility setting={settings} />
        <OutStandingDoctor setting={settings} />
        <HandBook setting={settings} />
        <Media />
        <About />
        <HomeFooter />
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
