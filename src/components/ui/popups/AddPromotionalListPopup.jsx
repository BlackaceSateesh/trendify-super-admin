import React, { useState } from 'react'
import ButtonMain from '../ButtonMain';
import TextInput from '../TextInput';
import TextareaInput from '../TextareaInput';
import FileInput from '../FileInput';
import { Modal } from 'react-bootstrap';
import { addCategory } from '../../../api/product-api';
import SpinnerLoader from '../SpinnerLoader';
import { ProductCategoryOptions } from '../../../constants/contents/Product';
import { MdDeleteOutline } from 'react-icons/md';

const AddPromotionalListPopup = (props) => {
  
const dataColumn = [
  { name: "SL" },
  { name: "Product Item Code" },
  { name: "Product Image" },
  { name: "Action" },
];
const dataRow = [
  {
    itemCode: "Iphone_15FJGN_132",
    img:''
  },
];

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable
        className="addProduct_modal AddPromotionalListPopup addProduct_modal model modelName"
      >
        <Modal.Body>
          <div className="inner">
            <h6 className="heading">
              Add Promotional List
            </h6>

            <div className="inputField">
              <TextInput labelName="Product Item Code" required="*" />
              <FileInput required="*" labelName='Upload Image'/>
            </div>

            {/* {error && <p className="error">{error}</p>} */}
            <div className="inputField">
              <TextInput labelName="Name" required="*" onChange={(e) => setName(e.target.value)} />
              <ButtonMain btnColor="green" name="Add" />
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
                      {dataRow.map((e, i) => {
                        return (
                          <tr>
                            <td>{i + 1}</td>
                            <td>{e.itemCode}</td>
                            <td><div className="productImg"><img src={e.img} alt="" /></div></td>
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

            <div className="centerBtns">
              <ButtonMain name="Cancel" onClick={props.onHide} />
              <ButtonMain 
                btnColor="green" 
                name="Save"
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}


export default AddPromotionalListPopup;
