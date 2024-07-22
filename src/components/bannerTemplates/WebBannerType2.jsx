import React from 'react';
import '../../styles/bannerTemplates/WebBannerType2.css'

const WebBannerType2 = (props) => {
  return (
    <>
      <div className="WebBannerType2 webBanTemMain">
        <div className="left">
          <img src={props.images[0]} alt="" />
        </div>
        <div className="center">
          <div className="centerTop">
            <div className="centerTopLeft"><img src={props.images[1]} alt="" /></div>
            <div className="centerTopRight"><img src={props.images[2]} alt="" /></div>
          </div>
          <div className="centerBtm"><img src={props.images[3]} alt="" /></div>
        </div>
        <div className="right">
            <img src={props.images[4]} alt="" />
        </div>
      </div>
    </>
  )
}

export default WebBannerType2
