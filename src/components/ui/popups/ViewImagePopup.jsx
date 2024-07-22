import React from "react";
import { Modal } from "react-bootstrap";
import ViewImageAadhar from "../../../assests/dashboard/viewImageAadhar.png";

const ViewImagePopup = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='PreviewBanner'
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.heading}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="ViewImagePopupIMG"><img src={props.image} alt="" /></div>
            </Modal.Body>
      </Modal>

      {/* import and call */}
      {/* onClick={() => setModalShow(true)} //button */}
      {/* <ModalScreen
                show={modalShow}
                size="lg"
                className=""
                   scrollable
                onHide={() => setModalShow(false)}
            /> */}
    </>
  );
};

export default ViewImagePopup;
