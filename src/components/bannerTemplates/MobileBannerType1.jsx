import React from 'react';
import '../../styles/bannerTemplates/MobileBannerType1.css'

const MobileBannerType1 = (props) => {
  return (
    <>
      <div className="MobileBannerType1">
        <div className="top">
            {/* <img src={require('../../assests/dashboard/bannerTemplate/MobileBannerType1/mobType1Top.png')} alt="" /> */}
            {
              props?.images[0] && <img src={props.images[0]} alt="" />
            }
        </div>
        <div className="btm">
            <div className="left">
                <div className="left_top">
            {/* <img src={require('../../assests/dashboard/bannerTemplate/MobileBannerType1/mobType1BtmLeftTop.png')} alt="" /> */}
                  {
                    props?.images[1] && <img src={props.images[1]} alt="" />
                  }
                </div>
                <div className="left_btm">
            {/* <img src={require('../../assests/dashboard/bannerTemplate/MobileBannerType1/mobType1BtmLeftbtm.png')} alt="" /> */}
                  {
                    props?.images[2] && <img src={props.images[2]} alt="" />
                  }
                </div>
            </div>
            <div className="right">
            {/* <img src={require('../../assests/dashboard/bannerTemplate/MobileBannerType1/mobType1BtmRight.png')} alt="" /> */}
              {
                props?.images[3] && <img src={props.images[3]} alt="" />
              }
            </div>
        </div>
      </div>
    </>
  )
}

export default MobileBannerType1;
