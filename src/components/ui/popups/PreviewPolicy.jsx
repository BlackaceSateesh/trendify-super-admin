import React from "react";
import { Modal } from "react-bootstrap";
import ButtonMain from "../ButtonMain";

const PreviewPolicy = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable
        className="PreviewPolicy"
      >
        <Modal.Body>
          <div className="inner">
           <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo fuga, placeat ea quia deserunt unde ut aliquam hic harum quam libero asperiores voluptatibus quas repellendus odio suscipit explicabo eos?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo fuga, placeat ea quia deserunt unde ut aliquam hic harum quam libero asperiores voluptatibus quas repellendus odio suscipit explicabo eos?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo fuga, placeat ea quia deserunt unde ut aliquam hic harum quam libero asperiores voluptatibus quas repellendus odio suscipit explicabo eos?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo fuga, placeat ea quia deserunt unde ut aliquam hic harum quam libero asperiores voluptatibus quas repellendus odio suscipit explicabo eos?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo fuga, placeat ea quia deserunt unde ut aliquam hic harum quam libero asperiores voluptatibus quas repellendus odio suscipit explicabo eos?</li>
           </ol>
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

export default PreviewPolicy;
