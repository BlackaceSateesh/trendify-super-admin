import React from "react";
import DashboardInnerTitle from "../../components/dashboard/DashboardInnerTitle";
import TextInput from "../../components/ui/TextInput";
import TextInputWithEye from "../../components/ui/TextInputWithEye";
import SelectInput from "../../components/ui/SelectInput";
import DatePickerInput from "../../components/ui/DatePickerInput";
import CheckboxWithoutLable from "../../components/ui/CheckboxWithoutLable";
import '../../styles/dashboard/SellerVerificationDetailPage.css'
import ButtonMain from "../../components/ui/ButtonMain";

const SellerVerificationDetailPage = () => {
  return (
    <>
      <div className="SellerVerificationDetailPage sectionGap">
        <div className="general sectionContainer">
          <div className="head">
            <DashboardInnerTitle name="General Detail Vendor" />
          </div>
          <div className="inputField">
            <TextInput
              labelName="Vendor Name"
              required="*"
              value="Har Har Mahadev Electronics"
            />
            <TextInputWithEye
              labelName="Aadhar Card"
              required="*"
              value="adhar.jpg"
            />
            <TextInputWithEye
              labelName="Pancard"
              required="*"
              value="Pancard.jpg"
            />
            <TextInput
              labelName="Primary Contact Number"
              required="*"
              value="7024393158"
            />
            <TextInput
              labelName="Secondary Contact Number"
              required="*"
              value="7024393158"
            />
            <TextInputWithEye
              labelName="Address Proof"
              required="*"
              value="Address.jpg"
            />
            <TextInput
              labelName="E-mail"
              required="*"
              value="rajatpradhan@outlook.in"
            />
            <TextInput
              labelName="Designation of Vendor"
              required="*"
              value="Har Har Mahadev Electronics Manager"
            />
            <TextInput labelName="Country" required="*" value="Bharat" />
            <SelectInput labelName="City" required="*" option="Choose" />
            <TextInput
              labelName="Pincode / Zipcode"
              required="*"
              value="462001"
            />
          </div>
        </div>
        <div className="companyDetails sectionContainer">
          <div className="head">
            <DashboardInnerTitle name="Company / Shop Details" />
          </div>
          <div className="inputField">
            <TextInput
              labelName="Company / Shop Name"
              required="*"
              value="Har Har Mahadev Electronics"
            />
            <SelectInput
              labelName="Business Type"
              required="*"
              option="Choose"
            />
            <TextInputWithEye
              labelName="MCA"
              required=""
              value="mcalaterst.png"
            />
            <DatePickerInput labelName="MCA Expiry Date" option="06/05/2001" />
            <TextInput
              labelName="Primary Contact Number"
              required="*"
              value="7024393158"
            />
            <TextInput
              labelName="Secondary Contact Number"
              required=""
              value="7024393158"
            />
            <TextInput
              labelName="Primary Contact Email"
              required="*"
              value="rajatpradhan@outlook.in"
            />
            <TextInput
              labelName="Secondary Contact Email"
              required="*"
              value="rajatpradhan@outlook.in"
            />
            <TextInput labelName="NDA" required="*" value="Bharat" />
            <DatePickerInput labelName="NAD Expiry Date" option="06/05/2001" />
            <TextInput
              labelName="GSTIN"
              required="*"
              value="GSTIN67676786698GHFV"
            />
            <TextInputWithEye
              labelName="GST Certificate"
              required=""
              value="certificate.png"
            />
            <TextInputWithEye
              labelName="Upload Business Aadhar Card"
              required="*"
              value="Aadhar.jpg"
            />
            <TextInputWithEye
              labelName="Upload Business Pancard"
              required="*"
              value="Pancard.jpg"
            />
            <TextInput
              labelName="Pancard Number"
              required="*"
              value="GSTPP9898P"
            />
            <TextInput
              labelName="Business Register Address"
              required="*"
              value="Bharat"
            />
            <TextInput labelName="Country" required="*" value="Bharat" />
            <SelectInput labelName="State" required="*" option="Choose" />
            <TextInput labelName="City" required="*" value="Bhopal" />
            <TextInput
              labelName="Pincode / Zipcode"
              required="*"
              value="462001"
            />
            <TextInputWithEye
              labelName="Upload Address Proof"
              required="*"
              value="Address.jpg"
            />
          </div>
        </div>
        <div className="companyDetails sectionContainer">
          <div className="head">
            <DashboardInnerTitle name="Bank Details" />
          </div>
          <div className="inputField">
            <TextInput
              labelName="Bank Name"
              required="*"
              value="Har Har Mahadev Electronics"
            />
            <TextInput
              labelName="Bank A/c No"
              required="*"
              value="7024393158"
            />
            <TextInput labelName="Bank Branch" required="*" value="Bhopal" />
            <TextInput labelName="IFS Code" required="*" value="7024393158" />
            <TextInput
              labelName="Bank A/c Holder Name"
              required="*"
              value="Rajat Pradhan"
            />
            <TextInputWithEye
              labelName="Upload font page of passbook"
              required=""
              value="page.png"
            />
            <TextInput
              labelName="Email"
              required="*"
              value="rajatpradhan@outlook.in"
            />
            <TextInput
              labelName="Mobile Number"
              required=""
              value="7024393158"
            />
            <TextInput labelName="GST No" required="" value="7024393158" />
            <TextInput
              labelName="Pancard Number"
              required="*"
              value="GSTPP9898P"
            />
            <TextInputWithEye
              labelName="Upload Pancard"
              required=""
              value="certificate.png"
            />
            <TextInput
              labelName="Pincode / Zipcode"
              required="*"
              value="462001"
            />
          </div>
          <div className="declaration">
            <h6>Declaration:</h6>
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
          <ButtonMain name='Reject Seller' />
          <ButtonMain btnColor='green' name='Confirm Seller' />
        </div>
      </div>
    </>
  );
};

export default SellerVerificationDetailPage;
