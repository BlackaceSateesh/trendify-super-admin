import React from "react";
import { Modal } from "react-bootstrap";
import WarningPng from "../../../assests/dashboard/warningPng.png";

const WarningPopup = (props) => {
  return (
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="warning alertModal"
      >
        <Modal.Body>
          <div className="inner">
            <div className="head">
              <div className="icon">
                <img
                  src={WarningPng}
                  alt=""
                />
              </div>
              <p>Warning</p>
            </div>
            <h6 className="msg">
              Are you sure to reject <b>Product ID - A15PM ? </b>
            </h6>
            <h6 className="msgDetail">
              By rejecting this product , you won't be able to see data in
              dashboard.
            </h6>
            <div className="centerBtns">
                <button onClick={props.onHide} className="popupBtn cancel" >Cancel</button>
                <button className="popupBtn continuo">YES , REJECT</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default WarningPopup;
