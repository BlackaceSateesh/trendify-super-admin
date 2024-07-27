import React from "react";
import "../../styles/bannerTemplates/WebBannerTypePrimary.css";

const WebBannerTypePrimary = (props) => {
  return (
    <>
      <div className="WebBannerTypePrimary webBanTemMain">
        <div className="left">
          <img src={props?.images?.[0]} alt="" />
        </div>
        <div className="center">
          <div className="centerTop">
            <img src={props?.images?.[1]} alt="" />
          </div>
          <div className="centerCenter">
            <img src={props?.images?.[2]} alt="" />
          </div>
          <div className="centerBtm">
            <img src={props?.images?.[3]} alt="" />
          </div>
        </div>
        <div className="right">
            <img src={props?.images?.[4]} alt="" />
        </div>
      </div>
    </>
  );
};

export default WebBannerTypePrimary;
