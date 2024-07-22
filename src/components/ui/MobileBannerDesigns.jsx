import React from 'react'
import { Modal } from 'react-bootstrap';
import bannerMobilePng from '../../assets/bannerMobile.png';
import bannerMobileSliderPng from '../../assets/bannerMobileSlider.png';
import bannerWeb1Png from '../../assets/full_1.jpg';
import bannerWeb2Png from '../../assets/full_2.jpg';
import bannerWeb3Png from '../../assets/full_3.png';
import bannerWeb4Png from '../../assets/full_4.jpg';
import { BannerIds } from '../../constants/contents/BannerContent';

const MobileBannerDesigns = (props) => {
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='MobileBannerDesigns'
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Banner Preview
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="inner">
            {
              props.templateType === 'Mobile' ? (
                <>
                  <div className="MobileBannerDesignCard" onClick={() => props.onLayout(BannerIds.MOBILE_BANNER_1)}>
                    <div className="singleImg" >
                      <img src={bannerMobilePng} alt="" />
                    </div>
                    <div className="hoverBox">
                      <p className="title">Use this layout</p>
                    </div>
                  </div>

                  <div className="MobileBannerDesignCard" onClick={() => {console.log(BannerIds.MOBILE_SLIDER);props.onLayout(BannerIds.MOBILE_SLIDER);}}>
                    <div className="singleImg">
                      <img src={bannerMobileSliderPng} alt="" />
                    </div>
                    <div className="hoverBox">
                      <p className="title">Use this carousel</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="MobileBannerDesignCard" onClick={() => props.onLayout(BannerIds.WEB_BANNER_1)}>
                    <div className="singleImg">
                      <img src={bannerWeb1Png} alt="" />
                    </div>
                    <div className="hoverBox">
                      <p className="title">Use this layout</p>
                    </div>
                  </div>

                  <div className="MobileBannerDesignCard" onClick={() => props.onLayout(BannerIds.WEB_BANNER_2)}>
                    <div className="singleImg">
                      <img src={bannerWeb2Png} alt="" />
                    </div>
                    <div className="hoverBox">
                      <p className="title">Use this layout</p>
                    </div>
                  </div>

                  <div className="MobileBannerDesignCard" onClick={() => props.onLayout(BannerIds.WEB_BANNER_3)}>
                    <div className="singleImg">
                      <img src={bannerWeb3Png} alt="" />
                    </div>
                    <div className="hoverBox">
                      <p className="title">Use this layout</p>
                    </div>
                  </div>

                  <div className="MobileBannerDesignCard" onClick={() => props.onLayout(BannerIds.WEB_BANNER_4)}>
                    <div className="singleImg">
                      <img src={bannerWeb4Png} alt="" />
                    </div>
                    <div className="hoverBox">
                      <p className="title">Use this layout</p>
                    </div>
                  </div>
                </>
              )
            }
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default MobileBannerDesigns;
