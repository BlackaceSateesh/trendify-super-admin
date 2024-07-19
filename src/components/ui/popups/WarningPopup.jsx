import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import WarningPng from "../../../assests/dashboard/warningPng.png";
import TextInput from "../TextInput";

const WarningPopup = (props) => {
  const [reason, setReason] = useState("");
  const [error, setError] = useState("");

  const handleReject = () => {
    setError("");
    if (props.hasPrompt && !reason) {
      setError("Reason is required");
      console.log("Reason is required");
      return;
    }
    props.onReject(reason);
    props.onHide();
  }

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onHide}
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
            {
              props.hasPrompt && (
                <TextInput labelName="Reason" required="*" value={reason} onChange={(e) => setReason(e.target.value)} />
              )
            }

            {error && <p className="error">{error}</p>}

            <div className="centerBtns">
                <button onClick={props.onHide} className="popupBtn cancel">Cancel</button>
                <button className="popupBtn continuo" onClick={handleReject}>YES, REJECT</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default WarningPopup;
