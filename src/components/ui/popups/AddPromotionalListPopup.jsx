import React, { useState } from 'react'
import ButtonMain from '../ButtonMain';
import TextInput from '../TextInput';
import TextareaInput from '../TextareaInput';
import FileInput from '../FileInput';
import { Modal } from 'react-bootstrap';
import { createPromotion } from '../../../api/promotion-api';
import SpinnerLoader from '../SpinnerLoader';
import { MdDeleteOutline } from 'react-icons/md';

const AddPromotionalListPopup = (props) => {
  const [dataRow, setDataRow] = useState([]);
  const [itemCode, setItemCode] = useState(0);
  const [img, setImg] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const dataColumn = [
    { name: "SL" },
    { name: "Product Item Code" },
    { name: "Product Image" },
    { name: "Action" },
  ];
  // const dataRow = [
  //   {
  //     itemCode: "Iphone_15FJGN_132",
  //     img: ''
  //   },
  // ];

  const deleteModel = (index) => {
    let temp = [...dataRow];
    temp.splice(index, 1);
    setDataRow(temp);
  }

  const addModel = () => {
    let temp = [...dataRow];
    temp.push({
      itemCode,
      imageBase64Url: img
    });
    setDataRow(temp);
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => {
          setImg(e.target.result);
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (loading) return;
    setLoading(true);
    try {
      // remove "data:image/jpeg;base64," from all imageBase64Url
      let temp = [...dataRow];
      temp = temp.map((e) => {
        return {
          itemCode: parseInt(e.itemCode),
          imageBase64Url: e.imageBase64Url.split("base64,")[1]
        }
      });
      await createPromotion({
        promotionReqList: temp
      });
      props.onSuccess();
      props.onHide();
    } catch (error) {
      setError(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  }

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
              <TextInput labelName="Product Item Code" type='number' required="*" value={itemCode} onChange={(e) => setItemCode(e.target.value)} />
              <FileInput required="*" labelName='Upload Image' onChange={handleImageChange} />
            </div>

            {/* <div className="inputField"> */}
            {/* <TextInput labelName="Name" required="*" onChange={(e) => setName(e.target.value)} /> */}
            <ButtonMain btnColor="green" name="Add" onClick={addModel} />
            {/* </div> */}

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
                            <td>
                              <div className="productImg">
                                <img src={e.imageBase64Url} alt="" style={{ height: '100%', objectFit: 'cover' }} />
                              </div>
                            </td>
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
              <ButtonMain
                btnColor="green"
                name={loading ? <SpinnerLoader /> : "Save"}
                onClick={handleSubmit}
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}


export default AddPromotionalListPopup;
