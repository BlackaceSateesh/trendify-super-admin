import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import WarningPng from "../../../assests/dashboard/warningPng.png";
import TextInput from "../TextInput";
import SpinnerLoader from "../SpinnerLoader";

const WarningPopup = (props) => {
  const [reason, setReason] = useState("");
  const [error, setError] = useState("");

  const handleReject = () => {
    setError("");
    if (props.hasPrompt && !reason) {
      setError("Reason is required");
      return;
    }
    props.onReject(reason);
    props.onHide();
  }

  useEffect(() => {
    if (props.error) {
      setError(props.error);
    }
  }, [props.error]);

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
              {props.title ? props.title : "Are you sure you want to reject this product?"}
            </h6>
            <h6 className="msgDetail">
              {props.message ? props.message : "By rejecting this product, you are able to see data in Product Management."}
            </h6>
            {
              props.hasPrompt && (
                <TextInput labelName="Reason" required="*" value={reason} onChange={(e) => setReason(e.target.value)} />
              )
            }

            {error && <p className="error">{error}</p>}

            <div className="centerBtns">
                <button onClick={props.onHide} className="popupBtn cancel" disabled={props.loading}>
                  Cancel
                </button>
                <button className="popupBtn continuo" onClick={handleReject}>
                  {props.loading ? <SpinnerLoader /> : "Yes"}
                </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default WarningPopup;
