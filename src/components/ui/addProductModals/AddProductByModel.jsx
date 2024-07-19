import React, { useState, useEffect } from "react";
import ButtonMain from "../ButtonMain";
import TextInput from "../TextInput";
import { Modal } from "react-bootstrap";
import SelectInput from "../SelectInput";
import { MdDeleteOutline } from "react-icons/md";
import { fetchBrandsByType, fetchProductTypesByCategory, fetchProductCategories } from '../../../utils/dataFetchers';
import { addProduct } from '../../../api/product-api';
import SpinnerLoader from '../SpinnerLoader';

const dataColumn = [
  { name: "SL" },
  { name: "Name" },
  { name: "Brand" },
  { name: "Action" },
];
const dataRow = [
  {
    name: "Iphone 15",
    brand: "Apple",
  },
];

const AddProductByModel = (props) => {
  const [productCategory, setProductCategory] = useState();
  const [productType, setProductType] = useState();
  const [brand, setBrand] = useState();
  const [productDetails, setProductDetails] = useState({});
  const [modelDetails, setModelDetails] = useState([]);
  const [name, setName] = useState("");
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

  useEffect(() => {
    fetchProductTypesByCategory(productCategory)
      .then((data) => {
        setProductDetails((prev) => ({
          ...prev,
          productTypes: data
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productCategory]);

  useEffect(() => {
    fetchBrandsByType(productType)
      .then((data) => {
        setProductDetails((prev) => ({
          ...prev,
          brands: data
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productType]);

  const loadMoreTypes = (filter) => {
    if (filter === "CATEGORY") {
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
    } else if (filter === "TYPES") {
      fetchProductTypesByCategory(productCategory, productDetails.productTypes?.page + 1).then(
        (data) => {
          setProductDetails((prev) => ({
            ...prev,
            productTypes: {
              ...data,
              content: [
                ...prev.productTypes.content,
                ...data.content
              ]
            }
          }));
        }
      );
    } else if (filter === "BRANDS") {
      fetchBrandsByType(productType, productDetails.brands?.page + 1).then(
        (data) => {
          setProductDetails((prev) => ({
            ...prev,
            brands: {
              ...data,
              content: [
                ...prev.brands.content,
                ...data.content
              ]
            }
          }));
        }
      );
    }
  };

  const addModel = () => {
    if (!name || !productCategory || !productType || !brand) {
      setError("All fields are required");
      return;
    }

    const rowData = {
      name: name,
      brand: productDetails.brands?.content.find((e) => e.id === brand)?.name,
      brandId: brand
    }
    setModelDetails([...modelDetails, rowData]);
  }

  const deleteModel = (index) => {
    const newData = modelDetails.filter((e, i) => i !== index);
    setModelDetails(newData);
  }

  const addModelHandler = async () => {
    if (modelDetails.length === 0) {
      setError("Add atleast one model name");
      return;
    }

    let newModelDetails = modelDetails.map((e) => {
      delete e.brand;
      return e;
    });

    if (loading) return;
    setLoading(true);

    try {
      await addProduct({
        brandProductNameReqList: newModelDetails
      });
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
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable
        className="addProduct_modal model modelName"
      >
        <Modal.Body>
          <div className="inner">
            <h6 className="heading">Add Products - Model Name</h6>
            <SelectInput
              labelName="Product Category"
              default="Select Category"
              options={productDetails.productCategories?.content}
              onChange={(e) => setProductCategory(e.target.value)}
              value={productCategory}
              isPaginated={true}
              pages={{ total: productDetails.productCategories?.totalPages, current: productDetails.productCategories?.page }}
              loadMoreOptions={() => loadMoreCategories("CATEGORIES")}
            />
            <SelectInput
              labelName="Product Type"
              default="Select Type"
              options={productDetails.productTypes?.content}
              onChange={(e) => setProductType(e.target.value)}
              value={productType}
              isPaginated={true}
              pages={{ total: productDetails.productTypes?.totalPages, current: productDetails.productTypes?.page }}
              loadMoreOptions={() => loadMoreTypes("TYPES")}
            />
            <SelectInput
              labelName="Brand"
              default="Select Brand"
              options={productDetails.brands?.content}
              onChange={(e) => setBrand(e.target.value)}
              value={brand}
              isPaginated={true}
              pages={{ total: productDetails.brands?.totalPages, current: productDetails.brands?.page }}
              loadMoreOptions={() => loadMoreTypes()}
            />
            <div className="inputField">
              <TextInput labelName="Name" required="*" onChange={(e) => setName(e.target.value)} />
              <ButtonMain btnColor="green" name="Add" onClick={addModel} />
            </div>
            <div className="inner_table">
              <div className="tableBox">
                <div className="ListTable">
                  <table>
                    <thead>
                      <tr>
                        {dataColumn.map((e, i) => {
                          return <th>{e.name}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {modelDetails.map((e, i) => {
                        return (
                          <tr>
                            <td>{i + 1}</td>
                            <td>{e.name}</td>
                            <td>{e.brand}</td>
                            <td className="action">
                              <div className="actionBtns">
                                <button className="delete" onClick={() => deleteModel(i)}>
                                  <MdDeleteOutline />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {error && <p className="error">{error}</p>}

            <div className="centerBtns">
              <ButtonMain name="Cancel" onClick={props.onHide} />
              <ButtonMain btnColor="green" name={loading ? <SpinnerLoader /> : "Save"} onClick={addModelHandler} />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddProductByModel;
