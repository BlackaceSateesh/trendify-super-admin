import React from "react";
import "../../styles/bannerTemplates/WebBannerType1.css";

const WebBannerType1 = (props) => {
  return (
    <>
      <div className="WebBannerType1 webBanTemMain">
        <div className="left">
          <img src={props.images[0]} alt="" />
        </div>
        <div className="center">
          <div className="centerTop">
            <img src={props.images[1]} alt="" />
          </div>
          <div className="centerBtm">
            <img src={props.images[2]} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="rightTop">
            <img src={props.images[3]} alt="" />
          </div>
          <div className="rightBtm">
            <img src={props.images[4]} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WebBannerType1;
