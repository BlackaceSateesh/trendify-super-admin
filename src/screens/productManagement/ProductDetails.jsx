import React from "react";
import TextInput from "../../components/ui/TextInput";
import DashboardInnerTitle from "../../components/dashboard/DashboardInnerTitle";
import TextareaInput from "../../components/ui/TextareaInput";
import "../../styles/dashboard/ProductDetails.css";
import CheckboxWithoutLable from "../../components/ui/CheckboxWithoutLable";
import ButtonMain from "../../components/ui/ButtonMain";

const ProductDetails = () => {
  // product image dummy data
  const productImage = [
    { img: require("../../assests/dashboard/Iphon12.png") },
    { img: require("../../assests/dashboard/Iphon12High.png") },
    { img: require("../../assests/dashboard/iphone12back.png") },
    { img: require("../../assests/dashboard/iphone12backside.png") },
    { img: require("../../assests/dashboard/iphone12rear.png") },
  ];
  return (
    <>
      <div className="ProductDetails sectionContainer">
        <h6 className="productName">
          Product ID - ATP15PM <span>( Samsung Galaxy S22 Ultra )</span>
        </h6>
        <div className="inputField">
          <TextInput labelName="Product Category" value="Electronics" />
          <TextInput labelName="Product Type" value="Mobile " />
          <TextInput labelName="Brand" value="Apple (iPhone)" />
          <TextInput
            labelName="Product Name or Model"
            value="Apple iPhone 15 Pro Max"
          />
          <TextInput labelName="Product ID" value="A15PM" />
          <TextInput labelName="Product Price" value="1,10,000.00/-" />
          <TextInput labelName="Product Color" value="Bhagwa" />
          <TextInput labelName="Product Material" value="Metal" />
          <TextInput
            labelName="Product Variant"
            value="6 GB RAM / 512 GB ROM="
          />
          <TextInput labelName="Product Unit Per Items" value="2 Unit" />
          <TextInput labelName="Unit Price Per Items" value="19,18,000.00/-" />
          <TextInput labelName="Product Stock" value="18 Piece" />
          <TextInput
            labelName="Discount on Product"
            optional="(if available)"
            value="0.00/-"
          />
          <TextInput
            labelName="Manufacturer by"
            value="Visikol Private Limited"
          />
          <TextInput labelName="Upload Product Barcode" value="NA" />
        </div>
        <div className="productDetail_container">
          <DashboardInnerTitle
            name="Detailed Description"
            optional="(Words Limit 1000)"
          />
          <div className="inputField">
            <TextareaInput value="Organize your data in familiar spreadsheets and workbooks, with all changes saved automatically. Create modern visuals that turn numbers into valuable insights. Work together in real time knowing that everyone is on the same page.Organize your data in familiar spreadsheets and workbooks, with all changes saved automatically. Create modern visuals that turn numbers into valuable insights. Work together in real time knowing that everyone is on the same page. Organize your data in familiar spreadsheets and workbooks, with all changes saved automatically. Create modern visuals that turn numbers into valuable insights. Work together in real time knowing that everyone is on the same page." />
          </div>
        </div>
        <div className="productDetail_container">
          <DashboardInnerTitle
            name="Product Key Feature"
            optional=" (Words Limit 500)"
          />
          <div className="inputField">
            <TextareaInput value="Organize your data in familiar spreadsheets and workbooks, with all changes saved automatically. Create modern visuals that turn numbers into valuable insights. Work together in real time knowing that everyone is on the same page.Organize your data in familiar spreadsheets and workbooks, with all changes saved automatically. Create modern visuals that turn numbers into valuable insights. Work together in real time knowing that everyone is on the same page. Organize your data in familiar spreadsheets and workbooks, with all changes saved automatically. Create modern visuals that turn numbers into valuable insights. Work together in real time knowing that everyone is on the same page." />
          </div>
        </div>
        <div className="productDetail_container">
          <DashboardInnerTitle
            name="Manufacturer Details"
            optional=" (Words Limit 500)"
          />
          <div className="inputField">
            <TextareaInput value="Organize your data in familiar spreadsheets and workbooks, with all changes saved automatically. Create modern visuals that turn numbers into valuable insights. Work together in real time knowing that everyone is on the same page.Organize your data in familiar spreadsheets and workbooks, with all changes saved automatically. Create modern visuals that turn numbers into valuable insights. Work together in real time knowing that everyone is on the same page. Organize your data in familiar spreadsheets and workbooks, with all changes saved automatically. Create modern visuals that turn numbers into valuable insights. Work together in real time knowing that everyone is on the same page." />
          </div>
        </div>
        <div className="productDetail_container">
          <DashboardInnerTitle
            name="Product Images"
            optional=" (Words Limit 500)"
          />
          <div className="productImages">
            {productImage.map((e, i) => {
              return (
                <>
                  <div key={i} className="image">
                    <img src={e.img} alt="" />
                  </div>
                </>
              );
            })}
          </div>
         
        </div>
        <div className="productDetail_container">
        <div className="product_options">
            <div className="box">
              <CheckboxWithoutLable />
              <h6 className="inputLabel">This product has multi variant</h6>
            </div>
            <div className="box">
              <CheckboxWithoutLable />
              <h6 className="inputLabel">This product has IMEI Code</h6>
            </div>
          </div>
        </div>
        <div className="centerBtns">
          <ButtonMain btnColor='red'  name='Delete Product' />
          <ButtonMain name='Edit Product' />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
