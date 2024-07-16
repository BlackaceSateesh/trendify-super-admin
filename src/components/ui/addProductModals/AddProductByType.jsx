import React from 'react'
import ButtonMain from '../ButtonMain';
import TextInput from '../TextInput';
import FileInput from '../FileInput';
import { Modal } from 'react-bootstrap';
import SelectInput from '../SelectInput';

const AddProductByType = (props) => {
  return (
    <>
       <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable
        className="addProduct_modal"
      >
        <Modal.Body>
          <div className="inner">
            <h6 className="heading">
             Add Products - Type
            </h6>

            <div className="inputField">
            <TextInput labelName="Name" required="*" value="Electronics" />
            <SelectInput labelName="Category" required="*" option="Choose" />
            <FileInput required="*" labelName='Image' />
          </div>

          
            <div className="centerBtns">
              <ButtonMain btnColor="red" name="Reset" />
              <ButtonMain name="Cancel" onClick={props.onHide} />
              <ButtonMain btnColor="green" name="Save" />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}


export default AddProductByType;
