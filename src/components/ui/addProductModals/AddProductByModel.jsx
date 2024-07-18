import React from "react";
import ButtonMain from "../ButtonMain";
import TextInput from "../TextInput";
import { Modal } from "react-bootstrap";
import SelectInput from "../SelectInput";
import { MdDeleteOutline } from "react-icons/md";
const AddProductByModel = (props) => {
  //dummy data
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
            <SelectInput labelName="Brand" required="*" option="Choose" />
            <div className="inputField">
              <TextInput labelName="Name" required="*" value="Electronics" />
              <ButtonMain btnColor="green" name="Add" />
            </div>
            {/*  */}
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
                            <td>{e.name}</td>
                            <td>{e.brand}</td>
                            <td className="action">
                            <div className="actionBtns"><button className="delete"><MdDeleteOutline /></button></div>
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
              <ButtonMain btnColor="red" name="Reset" />
              <ButtonMain name="Cancel" onClick={props.onHide} />
              <ButtonMain btnColor="green" name="Save" />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddProductByModel;
