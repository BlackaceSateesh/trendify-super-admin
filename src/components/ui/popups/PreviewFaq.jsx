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
              {props.faq.question ? props.faq.question : "Title"}
            </h6>
            <p className="para">
              {props.faq.answer ? props.faq.answer : "Description"}
              <br />
              <br />
              {
                props.steps &&
                props.steps.map((step, index) => (
                  <div key={index}>
                    <span>{index + 1}.  </span>
                    <span className="para">{step}</span>
                  </div>
                ))
              }
            </p>
            <div className="centerBtns">
              <ButtonMain name="Done" onClick={props.onHide} />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PreviewFaq;
