import React from "react";
import { Modal } from "react-bootstrap";
import TextInput from "../TextInput";
import ButtonWithIcon from "../ButtonWithIcon";
import { FaPlus } from "react-icons/fa6";
import ButtonMain from "../ButtonMain";


const AddProductPopup = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable
        className="AddProductPopup"
      >
        <Modal.Body>
          <div className="inner">
            <h6 className="heading">
              Product Category - <b>Electronics</b>
            </h6>
            <div className="center">
            <table>
              <thead>
              <tr>
                <th>Product Type</th>
                <th>Product Brand</th>
                <th>Product Name</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td><TextInput placeholder='Enter Type' /></td>
                <td><TextInput placeholder='Enter Type' /></td>
                <td><TextInput placeholder='Enter Type' /></td>
              </tr>
              </tbody>
            </table>
            <ButtonWithIcon icon={<FaPlus />} name='Add More' />
            </div>

            <div className="centerBtns">
              <ButtonMain name="Cancel" onClick={props.onHide} />
              <ButtonMain btnColor="green" name="Save" />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddProductPopup;
