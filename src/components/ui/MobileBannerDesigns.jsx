import React from 'react'
import { Modal } from 'react-bootstrap';
import bannerMobilePng from '../../assets/bannerMobile.png';
import bannerMobileSliderPng from '../../assets/bannerMobileSlider.png';

const MobileBannerDesigns = (props) => {
  return (
    <>
      <Modal
        {...props}
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
            <div className="MobileBannerDesignCard">
              <div className="singleImg" onClick={props.onLayout}>
                <img src={bannerMobilePng} alt="" />
              </div>
              <p className="title">Use this layout</p>
            </div>
            <div className="MobileBannerDesignCard">
              <div className="singleImg" onClick={props.onSlider}>
                <img src={bannerMobileSliderPng} alt="" />
              </div>
              <p className="title">Use this carousel</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default MobileBannerDesigns;
