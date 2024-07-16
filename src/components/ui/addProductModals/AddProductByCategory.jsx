import React from 'react'
import ButtonMain from '../ButtonMain';
import TextInput from '../TextInput';
import TextareaInput from '../TextareaInput';
import FileInput from '../FileInput';
import { Modal } from 'react-bootstrap';

const AddProductByCategory = (props) => {
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
             Add Products - Category
            </h6>

            <div className="inputField">
            <TextInput labelName="Name" required="*" value="Electronics" />
            <TextareaInput required="*" labelName='Description' />
            <FileInput required="*" labelName='Image' />
            {/* <SelectInput labelName="City" required="*" option="Choose" /> */}
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


export default AddProductByCategory;
