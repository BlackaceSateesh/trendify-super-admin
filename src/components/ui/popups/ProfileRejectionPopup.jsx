import React from "react";
import { Modal } from "react-bootstrap";
import RadioInputBorder from "../RadioInputBorder";
import TextareaInput from "../TextareaInput";
import ButtonMain from "../ButtonMain";

const ProfileRejectionPopup = (props) => {
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
        {/* <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.heading}
                    </Modal.Title>
                </Modal.Header> */}
        <Modal.Body>
          <div className="inner">
            <h6 className="heading">Select Reason for Rejection</h6>
            <div className="radioBox">
              <RadioInputBorder labelName="Lorem ipsum dolor sit amet." />
              <RadioInputBorder labelName="Lorem ipsum dolor sit amet." />
              <RadioInputBorder labelName="Lorem ipsum dolor sit amet." />
            </div>
            <TextareaInput value="Organize your data in familiar spreadsheets and workbooks, with all changes saved automatically. Create modern visuals that turn numbers into valuable insights. Work together in real time knowing that everyone is on the same page.Organize your data in familiar spreadsheets and workbooks, with all changes saved automatically. Create modern visuals that turn numbers into valuable insights. Work together in real time knowing that everyone is on the same page. Organize your data in familiar spreadsheets and workbooks, with all changes saved automatically. Create modern visuals that turn numbers into valuable insights. Work together in real time knowing that everyone is on the same page." />
            <div className="radioBox">
              <RadioInputBorder labelName="Lorem ipsum dolor sit amet." />
              <RadioInputBorder labelName="Lorem ipsum dolor sit amet." />
              <RadioInputBorder labelName="Lorem ipsum dolor sit amet." />
              <RadioInputBorder labelName="Lorem ipsum dolor sit amet." />
              <RadioInputBorder labelName="Lorem ipsum dolor sit amet." />
              <RadioInputBorder labelName="Lorem ipsum dolor sit amet." />
              <RadioInputBorder labelName="Lorem ipsum dolor sit amet." />
              <RadioInputBorder labelName="Lorem ipsum dolor sit amet." />
              <RadioInputBorder labelName="Lorem ipsum dolor sit amet." />
            </div>
            <div className="centerBtns">
              <ButtonMain onClick={props.onHide} name="Cancel" />
              <ButtonMain btnColor="green" name="Confirm" />
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* import and call */}
      {/* onClick={() => setModalShow(true)} //button */}
      {/* <ModalScreen
                show={modalShow}
                size="lg"
                className=""
                onHide={() => setModalShow(false)}
            /> */}
    </>
  );
};

export default ProfileRejectionPopup;
