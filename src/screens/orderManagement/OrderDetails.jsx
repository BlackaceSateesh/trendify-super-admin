import React from "react";
import DashboardInnerTitle from "../../components/dashboard/DashboardInnerTitle";
import SelectInput from "../../components/ui/SelectInput";
import TextInput from "../../components/ui/TextInput";
import TextareaInput from "../../components/ui/TextareaInput";
import ButtonMain from "../../components/ui/ButtonMain";
import '../../styles/dashboard/OrderDetails.css'
const OrderDetails = () => {
  return (
    <>
      <div className="OrderDetails sectionGap">
        {/* product details */}
        <div className="sectionContainer">
          <DashboardInnerTitle name="Product Detail" />
          <div className="inputField">
            <TextInput labelName="Product Code" value="8952202236" />
            <SelectInput labelName="Product Type" option="Select Type" />
            <SelectInput labelName="Category" option="Select Type" />
            <TextInput
              labelName="Product Name"
              value="Apple iPhone 199 Pro Max"
            />
            <SelectInput labelName="Brand" option="Select Type" />
            <SelectInput labelName="Product Unit" option="Kilogram" />
            <TextInput labelName="Product Price" value="0" />
            <TextInput labelName="Unit Price" value="0" />
            <TextInput labelName="Discount" value="0" />
            <TextInput labelName="Stock" value="0" />
            <TextInput labelName="SGST in %" value="0" />
            <TextInput labelName="CGST in %" value="0" />
          </div>
        </div>
        {/* Shipping details */}
        <div className="sectionContainer">
          <DashboardInnerTitle name="Shipping Detail" />
          <div className="inputField">
            <TextInput labelName="Full Name" value="Raju Tea stall" />
            <TextInput labelName="Phone Number" value="Phone Number" />
            <SelectInput labelName="GSTIN" option="Enter GSTIN" />
            <SelectInput labelName="City" option="Choose" />
            <SelectInput labelName="State" option="Choose" />
            <SelectInput labelName="Country" option="Bharat" />
            <TextInput labelName="Pincode / Zipcode" value="462001" />
            <TextInput labelName="Expected Delivery Date" value="06/05/2001" />
            <TextareaInput
              labelName="House No., Building Name"
              optional="(Words Limit 500)"
              value="Organize your data in familiar spreadsheets and workbooks, with all changes saved automatically. Create modern visuals that turn numbers into valuable insights. Work together in real time knowing that everyone is on the same page."
            />
            <TextareaInput
              labelName="Road name, Area, Colony"
              optional="(Words Limit 500)"
              value="Organize your data in familiar spreadsheets and workbooks, with all changes saved automatically. Create modern visuals that turn numbers into valuable insights. Work together in real time knowing that everyone is on the same page."
            />
          </div>
        </div>
        {/* Payment & Date Status */}
        <div className="sectionContainer">
          <DashboardInnerTitle name="Payment & Date Status" />
          <div className="inputField">
            <TextInput labelName="Payment Type" value="UPI" />
            <TextInput labelName="Order Date" value="06/05/2001" />
            <TextInput
              labelName="Payment Status vai Customer"
              value="Completed"
            />
            <TextInput labelName="Payment Status via Seller" value="Received" />
          </div>
        </div>
        {/* Update & View Delivery Status */}
        <div className="sectionContainer">
          <DashboardInnerTitle name="Update & View Delivery Status" />
          <div className="orderTrack_inner">
            <ul id="orderTrackBar">
              <li class="active">
                Order Confirmed
                <p>Wed, 11th Jan</p>
              </li>
              <li class="active">
                Shipped
                <p>Sat, 13th Jan</p>
              </li>
              <li class="">
                Out For Delivery
                <p>Tus, 11th Jan</p>
              </li>
              <li>
                Delivered
                <p>Mon 16th Jan</p>
              </li>
            </ul>
          </div>
        </div>
        {/* btns */}
        <div className="centerBtns">
          <ButtonMain btnColor="green" name="Contact to Seller" />
          <ButtonMain name="Preview Invoice" />
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
