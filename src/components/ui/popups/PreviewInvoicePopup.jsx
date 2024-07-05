import React from "react";
import { Modal } from "react-bootstrap";
import ButtonMain from "../ButtonMain";

const PreviewInvoicePopup = (props ) => {
  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable
        className="PreviewInvoicePopup"
      >
        <Modal.Body>
          <div className="inner">
            <p className="heading">Preview Invoice</p>
            <div className="inner_box">
              <div className="head">
                <div className="left">
                  <div className="logo">
                    <img
                      src={require("../../../assests/app/appLogo.png")}
                      alt=""
                    />
                  </div>
                  <h6 className="name">Trendify</h6>
                </div>
                <div className="right">
                  <p>INVOICE</p>
                </div>
              </div>

              <div className="billto">
                <div className="left">
                  <h6 className="heading">BILLED TO</h6>
                  <p>Shyam Seeli</p>
                  <p>Telengana, India</p>
                </div>
                <div className="right">
                  <h6 className="heading">FROM</h6>
                  <p>Vimal Pandey</p>
                  <p>Uttar Pradesh, India</p>
                </div>
              </div>

              <div className="bill_table">
                <table>
                  <thead>
                    <tr>
                      <th>DESCRIPTION</th>
                      <th>PRICE</th>
                      <th>QUANTITY</th>
                      <th>AMOUNT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Laptop</td>
                      <td>200</td>
                      <td>1</td>
                      <td>200</td>
                    </tr>
                    <tr>
                      <td>Laptop</td>
                      <td>200</td>
                      <td>1</td>
                      <td>200</td>
                    </tr>
                    <tr>
                      <td>Laptop</td>
                      <td>200</td>
                      <td>1</td>
                      <td>200</td>
                    </tr>
                    <tr>
                      <td>Laptop</td>
                      <td>200</td>
                      <td>1</td>
                      <td>200</td>
                    </tr>
                  </tbody>
                </table>
                <div className="subTotal">
                  <div className="item">
                    <p className="name">Sub-Total</p>
                    <p className="value">800</p>
                  </div>
                  <div className="item">
                    <p className="name">Tax(10%)</p>
                    <p className="value">80</p>
                  </div>
                </div>
                <div className="total">
                  <div className="item">
                    <p className="name">Total</p>
                    <p className="value">880</p>
                  </div>
                </div>
              </div>

              <div className="payment_detail">
                <div className="detailBox">
                  <h6 className="heading">PAYMENT METHOD</h6>
                  <div className="detail">
                    <div className="detail1">
                      <p className="key">Bank Name</p>
                      <p className="value">State Bank of India</p>
                    </div>
                    <div className="detail1">
                      <p className="key">Bank Account</p>
                      <p className="value">3256422 442225</p>
                    </div>
                  </div>
                  <p className="msg">Lorem ipsum dolor sit amet.</p>
                  <p className="msg">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="sign">
                  <div className="signBox">
                    <img src="" alt="" />
                  </div>
                  <div className="name">
                    <h6>Rajat Pradhan</h6>
                    <p>Vendor Bhopal</p>
                  </div>
                </div>
              </div>
              <div className="support">
                <div className="box1">
                  <h6 className="heading">Email Address</h6>
                  <p>rajat.pradhan@vikisol.in</p>
                </div>
                <div className="box1">
                  <h6 className="heading">Call Center</h6>
                  <p>+91 9524624521</p>
                </div>
                <div className="box1">
                  <h6 className="heading">Official Website</h6>
                  <p>www.vikisol.in</p>
                </div>
              </div>
            </div>

            <div className="centerBtns">
              <ButtonMain btnColor='green' name="Download Invoice" />
              <ButtonMain name="Cancel" onClick={props.onHide}  />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PreviewInvoicePopup;
