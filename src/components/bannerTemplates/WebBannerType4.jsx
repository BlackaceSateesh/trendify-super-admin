import React from 'react';
import '../../styles/bannerTemplates/WebBannerType4.css'

const WebBannerType4 = (props) => {
  return (
    <>
      <div className="WebBannerType4 webBanTemMain">
        <div className="left">
            <img src={props.images[0]} alt="" />
        </div>
        <div className="right">
            <img src={props.images[1]} alt="" />
        </div>
      </div>
    </>
  )
}

export default WebBannerType4
