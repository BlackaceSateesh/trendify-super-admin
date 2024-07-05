import React from 'react'
import { Modal } from 'react-bootstrap';

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
            <img src={require('../../../assests/dashboard/bannerPreviewImg.png')} alt="" />
            </div>
            </Modal.Body>
      </Modal>
    </>
  )
}

export default PreviewBanner;
