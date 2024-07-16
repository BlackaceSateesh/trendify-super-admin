import React, { useState } from "react";
import DashboardInnerTitle from "../../components/dashboard/DashboardInnerTitle";
import TextInput from "../../components/ui/TextInput";
import TextareaInput from "../../components/ui/TextareaInput";
import "../../styles/dashboard/PendingApprovalProduct.css";
import CheckboxWithoutLable from "../../components/ui/CheckboxWithoutLable";
import ButtonMain from "../../components/ui/ButtonMain";
import WarningPopup from "../../components/ui/popups/WarningPopup";
import PendingPopup from "../../components/ui/popups/PendingPopup";
import ApprovePopup from "../../components/ui/popups/ApprovePopup";
import ModifyPopup from "../../components/ui/popups/ModifyPopup";
import Iphone12 from "../../assests/dashboard/Iphon12.png";
import Iphone12Back from "../../assests/dashboard/iphone12back.png";
import Iphone12Rear from "../../assests/dashboard/iphone12rear.png";
import Iphone12High from "../../assests/dashboard/Iphon12High.png";
import Iphone12BackSide from "../../assests/dashboard/iphone12backside.png";

const PendingApprovalProduct = () => {
  // dummy data product details

  const productImage = [
    {
      img: Iphone12,
      name: "Cover Image",
    },
    {
      img: Iphone12Back,
      name: " Left Side Image",
    },
    {
      img: Iphone12Rear,
      name: " Right Side Image",
    },
    {
      img: Iphone12,
      name: " Top View Image",
    },
    {
      img: Iphone12,
      name: " Bottom View Image",
    },
    {
      img:Iphone12BackSide,
      name: "Back Image",
    },
    {
      img: Iphone12High,
      name: " Highlight Image",
    },
    {
      img: Iphone12High,
      name: "Benefit Image",
    },
  ];

  // show popup 
  const [showWarning, setShowWarning] = useState(false);
  const [showApprove, setShowApprove] = useState(false);
  const [showModify, setShowModify] = useState(false);
  const [showPending, setShowPending] = useState(false);

  return (
    <>
      <div className="PendingApprovalProduct sectionGap">
        {/* select product */}
        <div className="sectionContainer">
          <div className="head">
            <DashboardInnerTitle name="Select Product" />
          </div>
          <div className="inputField">
            <TextInput labelName="Product Category" value="Electronics" />
            <TextInput labelName="Product Type" value="Mobile" />
            <TextInput labelName="Brand" value="Apple (iPhone)" />
            <TextInput
              labelName="Product Name or Model"
              value="Apple iPhone 15 Pro Max"
            />
          </div>
        </div>
        {/* Product Specifications */}
        <div className="sectionContainer">
          <div className="head">
            <DashboardInnerTitle name="Product Specifications" />
          </div>
          <div className="inputField">
            <TextInput labelName="Internal Storage" value="256 GB" />
            <TextInput labelName="RAM" value="12 GB" />
            <TextInput labelName="Color" value="Phantom Gray" />
            <TextInput labelName="Color Code" value="#383838" />
            <TextInput labelName="Front Camera" value="10MP" />
            <TextInput labelName="Back Camera" value="64MP + 12MP + 12MP" />
          </div>
        </div>

        {/* Product Specifications */}
        <div className="sectionContainer">
          <div className="head">
            <DashboardInnerTitle name="Product Specifications" />
          </div>
          <div className="inputField">
            <TextInput labelName="Sleeve Type" value="Full Sleeve" />
            <TextInput labelName="Fabric Type" value="Cotton" />
            <TextInput labelName="Color" value="Phantom Gray" />
            <TextInput labelName="Color Code" value="#383838" />
            <TextInput labelName="Size" value="XL" />
          </div>
        </div>

        {/* Pricing / Discount & Stock */}
        <div className="sectionContainer">
          <div className="head">
            <DashboardInnerTitle name="Pricing / Discount & Stock" />
          </div>
          <div className="inputField">
            <TextInput labelName="Product Price" value="1,10,000/-" />
            <TextInput
              labelName="Discount on Product"
              optional=" (if available)"
              value="15%"
            />
            <TextInput labelName="Stock" value="1000000" />
          </div>
        </div>

        {/* Manufacturer Details */}
        <div className="sectionContainer">
          <div className="head">
            <DashboardInnerTitle name="Manufacturer Details" />
          </div>
          <div className="inputField">
            <TextInput
              labelName="Manufacturer by"
              value="Vikisol Technologices Pvt Ltd"
            />
            <TextInput labelName="Country of Origin" value="India" />
            <TextareaInput
              labelName="Manufacturer Details"
              value="Organize your data in familiar spreadsheets and workbooks, with all changes saved automatically. Create modern visuals that turn numbers into valuable insights. Work together in real time knowing that everyone is on the same page.Organize your data in familiar spreadsheets and workbooks, with all changes saved automatically. Create modern visuals that turn numbers into valuable insights. Work together in real time knowing that everyone is on the same page. Organize your data in familiar spreadsheets and workbooks, with all changes saved automatically. Create modern visuals that turn numbers into valuable insights. Work together in real time knowing that everyone is on the same page."
            />
          </div>
        </div>

        {/* Detailed Description */}
        <div className="sectionContainer">
          <div className="head">
            <DashboardInnerTitle name="Detailed Description" />
          </div>
          <div className="inputField">
            <TextareaInput value="Organize your data in familiar spreadsheets and workbooks, with all changes saved automatically. Create modern visuals that turn numbers into valuable insights. Work together in real time knowing that everyone is on the same page.Organize your data in familiar spreadsheets and workbooks, with all changes saved automatically. Create modern visuals that turn numbers into valuable insights. Work together in real time knowing that everyone is on the same page. Organize your data in familiar spreadsheets and workbooks, with all changes saved automatically. Create modern visuals that turn numbers into valuable insights. Work together in real time knowing that everyone is on the same page." />
          </div>
        </div>

        {/* Product Key Feature  (Words Limit 500) */}
        <div className="sectionContainer">
          <div className="head">
            <DashboardInnerTitle
              name="Product Key Feature "
              optional=" (Words Limit 500)"
            />
          </div>
          <div className="inputField">
            <TextareaInput value="Organize your data in familiar spreadsheets and workbooks, with all changes saved automatically. Create modern visuals that turn numbers into valuable insights. Work together in real time knowing that everyone is on the same page.Organize your data in familiar spreadsheets and workbooks, with all changes saved automatically. Create modern visuals that turn numbers into valuable insights. Work together in real time knowing that everyone is on the same page. Organize your data in familiar spreadsheets and workbooks, with all changes saved automatically. Create modern visuals that turn numbers into valuable insights. Work together in real time knowing that everyone is on the same page." />
          </div>
        </div>
        {/* Tags / Keywords*/}
        <div className="sectionContainer">
          <div className="head">
            <DashboardInnerTitle name="Tags / Keywords" />
          </div>
          <div className="tagBox">
            <span className="tag">Mobile</span>
            <span className="tag">Earphones</span>
            <span className="tag">Dishwasher</span>
            <span className="tag">Game controller</span>
            <span className="tag">Hair straightening machine</span>
            <span className="tag">Scanner</span>
            <span className="tag">Smart television</span>
            <span className="tag">Washing machine</span>
            <span className="tag">Wifi modem</span>
            <span className="tag">Vacuum cleaner</span>
          </div>
        </div>
        {/* Product Image */}
        <div className="sectionContainer">
          <div className="head">
            <DashboardInnerTitle name="Product Image " />
          </div>
          <div className="productImgs">
            {productImage.map((e, i) => {
              return (
                <>
                  {" "}
                  <div key={i} className="productImgBox">
                    <div className="image">
                      <img src={e.img} alt="" />
                    </div>
                    <span className="name">{e.name}</span>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        {/* Warranty */}
        <div className="sectionContainer">
          <div className="head">
            <DashboardInnerTitle name="Warranty" />
          </div>
          <div className="inputField">
            <TextInput
              labelName="Manufacturer Warranty for Device"
              value="1 Year"
            />
            <TextInput
              labelName="Covered in Warranty"
              value="Manufacturing Defect Only"
            />
            <TextInput labelName="Domestic Warranty" value="1 Year" />
          </div>
        </div>

        {/* You're Details */}
        <div className="sectionContainer">
          <div className="head">
            <DashboardInnerTitle name="You're Details" />
          </div>
          <div className="inputField">
            <TextInput
              labelName="Company / Shop Name"
              required='*'
              value="Har Har Mahadev Electronics"
            />
            <TextInput
              labelName="Covered in Warranty"
              value="Manufacturing Defect Only"
            />
            <TextInput labelName="Contact Mobile Number" value="+91 7024393158" />
            <TextInput labelName="Contact E-mail Address" value="HarHarMahadevElectronics@gmail.com" />
          </div>
        </div>

        {/* You're Details */}
        <div className="sectionContainer">
          <div className="head">
            <DashboardInnerTitle name="You're Details" />
          </div>
          <div className="inputField">
            <TextInput
              labelName="Company / Shop Name"
              required='*'
              value="Har Har Mahadev Electronics"
            />
            <TextInput
              labelName="Covered in Warranty"
              value="Manufacturing Defect Only"
            />
            <TextInput labelName="Contact Mobile Number" value="+91 7024393158" />
            <TextInput labelName="Contact E-mail Address" value="HarHarMahadevElectronics@gmail.com" />
          </div>
        </div>
        <div className="sectionContainer">
          <div className="head">
            <DashboardInnerTitle name="You're Details" />
          </div>
         
        <div className="declaration">
            <p>
              I /We declare and confirm that all information and attachments
              submitted in this application are true and correct. I/We are aware
              that any false information provided herein will result in the
              rejection of my/our application and cancellation of any
              registration granted.
            </p>

            <span className="agree">
              <CheckboxWithoutLable idName="agree" />
              <label className="inputLabel" htmlFor="">I Agree</label>
            </span>
          </div>
        </div>

        <div className="centerBtns">
          <ButtonMain onClick={()=> setShowWarning(true)} name='Reject Seller' />
          <ButtonMain onClick={()=> setShowPending(true)} name='Make as Pending' />
          <ButtonMain onClick={()=> setShowModify(true)} name='Requires to Modify Product Details' />
          <ButtonMain onClick={()=> setShowApprove(true)} btnColor='green' name='Approve Product' />
        </div>

        {/* popup here */}
        {/* warning */}
        <WarningPopup
        show={showWarning}
        onHide={() => setShowWarning(false)}
         />
        {/* pending */}
        <PendingPopup
        show={showPending}
        onHide={() => setShowPending(false)}
         />
        {/* approve */}
        <ApprovePopup
        show={showApprove}
        onHide={() => setShowApprove(false)}
         />
        {/* modify */}
        <ModifyPopup
        show={showModify}
        onHide={() => setShowModify(false)}
         />


      </div>
    </>
  );
};

export default PendingApprovalProduct;
