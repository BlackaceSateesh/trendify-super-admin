import React from 'react'
import { Modal } from 'react-bootstrap';
import BannerPreviewImage from '../../../assests/dashboard/bannerPreviewImg.png';

const PreviewBanner = (props) => {
  return (
    <>
        <Modal
        {...props}
        size="fullscreen"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='PreviewBanner'
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Banner Preview
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="inner">
            <img src={BannerPreviewImage} alt="" />
            </div>
            </Modal.Body>
      </Modal>
    </>
  )
}

export default PreviewBanner;
