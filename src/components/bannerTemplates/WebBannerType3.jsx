import React from 'react';
import '../../styles/bannerTemplates/WebBannerType3.css'

const WebBannerType3 = (props) => {
  return (
    <>
      <div className="WebBannerType3 webBanTemMain">
        <div className="left">
            <div className="top">
                <div className="topLeft"><img src={props.images[0]} alt="" /></div>
                <div className="topRight"><img src={props.images[1]} alt="" /></div>
            </div>
            <div className="btm"><img src={props.images[2]} alt="" /></div>
        </div>
        <div className="right">
            <img src={props.images[3]} alt="" />
        </div>
      </div>
    </>
  )
}

export default WebBannerType3
