import React from "react";
import { Modal } from "react-bootstrap";
import PendingPng from "../../../assests/dashboard/pendingPng.png";

const PendingPopup = (props) => {
  return (
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="pending alertModal"
      >
        <Modal.Body>
          <div className="inner">
            <div className="head">
              <div className="icon">
                <img
                  src={PendingPng}
                  alt=""
                />
              </div>
            </div>
            <h6 className="msg">
              Are you sure to pending <b>Product ID - A15PM ? </b>
            </h6>
            <h6 className="msgDetail">
            By make as pending this order, you are able to see data in 
            Product Management.
            </h6>
            <div className="centerBtns">
                <button onClick={props.onHide} className="popupBtn cancel" >Cancel</button>
                <button className="popupBtn continuo">YES , PENDING</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PendingPopup;
