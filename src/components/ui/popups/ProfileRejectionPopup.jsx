import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import RadioInputBorder from "../RadioInputBorder";
import TextareaInput from "../TextareaInput";
import ButtonMain from "../ButtonMain";

const ProfileRejectionPopup = (props) => {
  const [reason, setReason] = useState("");

  const handleConfirm = () => {
    props.onConfirm(reason);
    props.onHide();
  }

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable
        className="ProfileRejectionPopup"
      >
        <Modal.Body>
          <div className="inner">
            <h6 className="heading">Select Reason for Rejection</h6>
            <div className="radioBox">
              <RadioInputBorder labelName="Lorem ipsum dolor sit amet." />
              <RadioInputBorder labelName="Lorem ipsum dolor sit amet." />
              <RadioInputBorder labelName="Lorem ipsum dolor sit amet." />
            </div>
            <TextareaInput
              labelName="Reason"
              placeholder="Enter Reason"
              onChange={(e) => setReason(e.target.value)}
            />
            <div className="centerBtns">
              <ButtonMain onClick={props.onHide} name="Cancel" />
              <ButtonMain onClick={handleConfirm} btnColor="green" name="Confirm" />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProfileRejectionPopup;
