import React, { useState } from 'react'
import ButtonMain from '../ButtonMain';
import TextInput from '../TextInput';
import TextareaInput from '../TextareaInput';
import FileInput from '../FileInput';
import { Modal } from 'react-bootstrap';
import { addCategory } from '../../../api/product-api';

const AddProductByCategory = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const toBase64 = (filePath) => {
    const base64 = () => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const base64 = reader.result.split("base64,")[1];
            resolve(base64);
        }
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(filePath);
    });

    base64().then((res) => {
        setImage(res);
    });
  }

  const addCategoryHandler = async () => {
    const payload = {
      name,
      description,
      imageBase64Url: image,
      active: true,
      available: true
    }
    try {
      await addCategory(payload);
      props.onHide();
    } catch (error) {
      console.log(error);
    }
  }

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
            <TextInput labelName="Name" required="*" value={name} onChange={(e) => setName(e.target.value)} />
            <TextareaInput required="*" labelName='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
            <FileInput required="*" labelName='Image' value={image} onChange={(e) => toBase64(e.target.files[0])} />
          </div>

          
            <div className="centerBtns">
              <ButtonMain name="Cancel" onClick={props.onHide} />
              <ButtonMain btnColor="green" name="Save" onClick={addCategoryHandler} />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}


export default AddProductByCategory;
