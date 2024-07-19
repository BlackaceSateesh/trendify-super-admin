import React, { useState } from 'react'
import ButtonMain from '../ButtonMain';
import TextInput from '../TextInput';
import TextareaInput from '../TextareaInput';
import FileInput from '../FileInput';
import { Modal } from 'react-bootstrap';
import { addCategory } from '../../../api/product-api';
import SpinnerLoader from '../SpinnerLoader';
import SelectInput from '../SelectInput';
import { ProductCategoryOptions } from '../../../constants/contents/Product';

const AddProductByCategory = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [categoryType, setCategoryType] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      setError("");
      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => {
          if (img.width !== 532 || img.height !== 532) {
            setError("Images should be 532x532");
            return;
          }
          const base64 = e.target.result.split("base64,")[1];
          setImage(base64);
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const addCategoryHandler = async () => {
    const payload = {
      name,
      description,
      imageBase64Url: image,
      productCategoryEnum: categoryType,
      active: true,
      available: true
    }
    if (!name || !description || !image) {
      setError("All fields are required");
      return;
    }
    if (loading) return;
    setLoading(true);
    try {
      await addCategory(payload);
      props.onSuccessfullyAdded();
      props.onHide();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onHide}
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
              <SelectInput required="*" labelName="Category Type" options={ProductCategoryOptions} customKey={"label"} onChange={(e) => setCategoryType(e.target.value)} value={categoryType} />
              <FileInput required="*" labelName='Image' value={image} onChange={handleImageChange} />
            </div>

            {error && <p className="error">{error}</p>}

            <div className="centerBtns">
              <ButtonMain name="Cancel" onClick={props.onHide} />
              <ButtonMain 
                btnColor="green" 
                name={loading ? <SpinnerLoader /> : "Save"}
                onClick={addCategoryHandler} 
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}


export default AddProductByCategory;
