import React, { Component } from "react";

import { connect } from "react-redux";

class Media extends Component {
  render() {
    return (
      <div className="media-section">
        <div className="video-section">
          <h1>Truyền thông nói về BookingCare</h1>
          <iframe
            width="100%"
            height="300px"
            src="https://www.youtube.com/embed/zyfiwK6wvIg"
            title="Elephante - Come Back For You (feat. Matluck)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <br />
        </div>
        <div className="media-chanel">
          <a
            href="https://vtv.vn/video/ca-phe-khoi-nghiep-14-11-2018-334894.htm"
            target="_blank"
          >
            <div className="chanel"></div>
          </a>
          <a
            href="https://vtv.vn/video/ca-phe-khoi-nghiep-14-11-2018-334894.htm"
            target="_blank"
          >
            <div className="chanel"></div>
          </a>
          <a
            href="https://vtv.vn/video/ca-phe-khoi-nghiep-14-11-2018-334894.htm"
            target="_blank"
          >
            <div className="chanel"></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Media);
