import React from "react";
import { Modal } from "react-bootstrap";

const ModifyPopup = (props) => {
  return (
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modify alertModal"
      >
        <Modal.Body>
          <div className="inner">
            <div className="head">
              <div className="icon">
                <img
                  src={require("../../../assests/dashboard/modifyPng.png")}
                  alt=""
                />
              </div>
            </div>
            <h6 className="msg">
              Are you sure to modigy <b>Product ID - A15PM ? </b>
            </h6>
            <h6 className="msgDetail">
            By modifying this product, you are able to see update data
            in Product Management.
            </h6>
            <div className="centerBtns">
                <button onClick={props.onHide} className="popupBtn cancel" >Cancel</button>
                <button className="popupBtn continuo">YES , MODIFY</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModifyPopup;