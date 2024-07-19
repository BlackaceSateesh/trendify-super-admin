import React, { useState, useEffect } from 'react'
import ButtonMain from '../ButtonMain';
import TextInput from '../TextInput';
import FileInput from '../FileInput';
import { Modal } from 'react-bootstrap';
import SelectInput from '../SelectInput';
import { fetchProductCategories } from '../../../utils/dataFetchers';
import { addType } from '../../../api/product-api';
import SpinnerLoader from '../SpinnerLoader';

const AddProductByType = (props) => {
  const [productCategory, setProductCategory] = useState();
  const [productDetails, setProductDetails] = useState({});
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProductCategories()
      .then((data) => {
        setProductDetails((prev) => ({
          ...prev,
          productCategories: data
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const loadMoreCategories = () => {
    fetchProductCategories(productDetails.productCategories?.page + 1).then(
      (data) => {
        setProductDetails((prev) => ({
          ...prev,
          productCategories: {
            ...data,
            content: [
              ...prev.productCategories.content,
              ...data.content
            ]
          }
        }));
      }
    );
  };

  const addTypeHandler = async () => {
    const payload = {
      name,
      imageBase64Url: image,
      productCategoryId: productCategory
    }

    if (!name || !image || !productCategory) {
      setError("All fields are required");
      return;
    }
    if (loading) return;
    setLoading(true);
    try {
      await addType(payload);
      props.onSuccessfullyAdded();
      props.onHide();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

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
              <TextInput labelName="Name" required="*" value={name} onChange={(e) => setName(e.target.value)} />
              <SelectInput
                labelName="Product Category"
                default="Select Category"
                options={productDetails.productCategories?.content}
                onChange={(e) => setProductCategory(e.target.value)}
                value={productCategory}
                isPaginated={true}
                pages={{ total: productDetails.productCategories?.totalPages, current: productDetails.productCategories?.page }}
                loadMoreOptions={() => loadMoreCategories()}
              />
              <FileInput required="*" labelName='Image' value={image} onChange={handleImageChange} />
            </div>

            {error && <p className="error">{error}</p>}
            
            <div className="centerBtns">
              <ButtonMain name="Cancel" onClick={props.onHide} />
              <ButtonMain btnColor="green" name={loading ? <SpinnerLoader /> : "Save"} onClick={addTypeHandler} />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}


export default AddProductByType;
