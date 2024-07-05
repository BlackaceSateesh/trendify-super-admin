import React from "react";
import { Modal } from "react-bootstrap";
import ButtonMain from "../ButtonMain";

const PreviewFaq = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable
        className="PreviewFaq"
      >
        <Modal.Body>
          <div className="inner">
            <h6 className="heading">
              Find a missing package that shows as "Delivered"
            </h6>
            <p className="para">
              Organize your data in familiar spreadsheets and workbooks, with
              all changes saved automatically. Create modern visuals that turn
              numbers into valuable insights. Work together in real time knowing
              that everyone is on the same page.Organize your data in familiar
              spreadsheets and workbooks, with all changes saved automatically.
              Create modern visuals that turn numbers into valuable insights.
              Work together in real time knowing that everyone is on the same
              page.
              <br />
              <br />
              Organize your data in familiar spreadsheets and workbooks, with
              all changes saved automatically. Create modern visuals that turn
              numbers into valuable insights. Work together in real time knowing
              that everyone is on the same page.
            </p>
            <div className="centerBtns">
              <ButtonMain btnColor="red" name="Delete" />
              <ButtonMain name="Cancel" onClick={props.onHide} />
              <ButtonMain btnColor="green" name="Save" />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PreviewFaq;
