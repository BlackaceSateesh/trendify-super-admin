import React, { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import ButtonMain from "../ButtonMain";
import AppLogo from "../../../assests/app/appLogo.png";
import { getVendorDetailsApi } from "../../../api/vendor-api";
import { toCanvas } from 'html-to-image';
import jsPDF from 'jspdf';
import QRCode from 'qrcode.react';
import SpinnerLoader from "../SpinnerLoader";

const PreviewInvoicePopup = ({ order, onHide, show }) => {
  const [vendorDetails, setVendorDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const invoiceRef = useRef();

  useEffect(() => {
    const fetchVendorDetails = async () => {
      const vendorDetails = await getVendorDetailsApi(order?.productRes?.vendorId);
      setVendorDetails(vendorDetails);
    };
    fetchVendorDetails();
  }, []);

  const downloadPdf = () => {
    if (loading) return;
    setLoading(true);
    const input = invoiceRef.current;
    toCanvas(input, {
      width: input.clientWidth * 2,
      height: input.clientHeight * 2,
      style: { transform: 'scale(2)', transformOrigin: 'top left' },
      quality: 1,
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('invoice.pdf');
    }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable
        className="PreviewInvoicePopup"
      >
        <Modal.Body>
          <div className="inner">
            <p className="heading">Preview Invoice</p>
            <div className="inner_box" ref={invoiceRef} style={{ paddingTop: 20 }}>
              <div className="head">
                <div className="left">
                  <div className="logo">
                    <img src={AppLogo} alt="App Logo" />
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
                  <p>{order?.userName}</p>
                  <p>{order?.addressResponse?.address}</p>
                </div>
                <div className="right">
                  <h6 className="heading">FROM</h6>
                  <p>{vendorDetails?.companyName}</p>
                  <p>{vendorDetails?.companyPrimaryContactNumber}</p>
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
                      <td>{order?.productRes?.title}</td>
                      <td>{order?.productRes?.sellingPrice}</td>
                      <td>{order?.quantity}</td>
                      <td>{order?.price * order?.quantity}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="subTotal">
                  <div className="item">
                    <p className="name">Sub-Total</p>
                    <p className="value">{order?.price * order?.quantity}</p>
                  </div>
                  <div className="item">
                    <p className="name">Tax</p>
                    <p className="value">{order?.productRes?.tax}%</p>
                  </div>
                </div>
                <div className="total">
                  <div className="item">
                    <p className="name">Total</p>
                    <p className="value">{order?.price * order?.quantity + (order?.price * order?.quantity * order?.productRes?.tax) / 100}</p>
                  </div>
                </div>
              </div>

              <div className="payment_detail">
                <div className="detailBox">
                  <h6 className="heading">PAYMENT METHOD</h6>
                  <div className="detail">
                    <div className="detail1">
                      <p className="key">{order?.paymentType}</p>
                    </div>
                  </div>
                  <QRCode value={order?.orderCode} size={64} />
                </div>
                <div className="sign">
                  <div className="signBox">
                  </div>
                  <div className="name">
                    <h6>{vendorDetails?.vendorName}</h6>
                    <p>{vendorDetails?.city}, {vendorDetails?.state}</p>
                  </div>
                </div>
              </div>
              <div className="support">
                <div className="box1">
                  <h6 className="heading">Email Address</h6>
                  <p>{vendorDetails?.email}</p>
                </div>
                <div className="box1">
                  <h6 className="heading">Call Center</h6>
                  <p>{vendorDetails?.companyPrimaryContactNumber}</p>
                </div>
                <div className="box1">
                  <h6 className="heading">Official Website</h6>
                  <p>www.trendify.com</p>
                </div>
              </div>
            </div>

            <div className="centerBtns">
              <ButtonMain
                btnColor="green"
                name={loading ? <SpinnerLoader /> : "Download Invoice"}
                onClick={downloadPdf}
              />
              <ButtonMain name="Cancel" onClick={onHide} />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PreviewInvoicePopup;
