import React from "react";
import DashboardInnerTitle from "../../components/dashboard/DashboardInnerTitle";
import TextareaInput from "../../components/ui/TextareaInput";
import ButtonCategoryTag from "../../components/ui/ButtonCategoryTag";
import "../../styles/dashboard/SellerProfile.css";
import TextInput from "../../components/ui/TextInput";
import SelectInput from "../../components/ui/SelectInput";
import DatePickerInput from "../../components/ui/DatePickerInput";
import ButtonMain from "../../components/ui/ButtonMain";
import SellerBannerImg from "../../assests/dashboard/sellerBannerImg.png";
import AppLogo from "../../assests/app/appLogo.png";
import VerifyGreenTick from "../../assests/dashboard/verifyGreenTick.png";
import CertificateGST from "../../assests/dashboard/certificateGST.png";

const SellerProfile = () => {
  // dummy data
  const productTags = [
    { name: "Earphones" },
    { name: "Dishwasher" },
    { name: "Game controller" },
    { name: "Hair straightening machine" },
    { name: "Scanner" },
    { name: "Smart television" },
    { name: "Washing machine" },
    { name: "Wifi modem" },
    { name: "Vacuum cleaner" },
  ];
  const CategoryTags = [
    { name: "Electronics" },
    { name: "Fashion" },
    { name: "Home Appearance" },
    { name: "Appearance" },
  ];

  return (
    <>
      <div className="SellerProfile sectionGap">
        {/* top header */}
        <div className="sectionContainer profileTopHeader">
          <div className="profileTop">
            <div className="bannerImg">
              <img
                src={SellerBannerImg}
                alt=""
              />
            </div>

            <div className="sellerDetails">
              <div className="left">
                <div className="logo">
                  <img src={AppLogo} alt="" />
                </div>
                <div className="nameBox">
                  <div className="name">
                    <h6>Trendify Electronics</h6>
                    <div className="verifyIcon">
                      <img
                        src={VerifyGreenTick}
                        alt=""
                      />
                    </div>
                  </div>
                  <p>Bhopal, Madhya Pradesh, India</p>
                </div>
              </div>
              <div className="right">
                <button className="requestBtn">
                  Request to change details
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* center */}

        <div className="UserProfile_desc ">
          <div className="leftside">
            <div className="company_desc sectionContainer">
              <div className="head">
                <DashboardInnerTitle name="Company Description" />
              </div>
              <div className="inner">
                <TextareaInput value="Organize your data in familiar spreadsheets and workbooks, with all changes saved automatically. Create modern visuals that turn numbers into valuable insights. Work together in real time knowing that everyone is on the same page.Organize your data in familiar spreadsheets and workbooks, with all changes saved automatically. Create modern visuals that turn numbers into valuable insights. Work together in real time knowing that everyone is on the same page. Organize your data in familiar spreadsheets and workbooks, with all changes saved automatically. Create modern visuals that turn numbers into valuable insights. Work together in real time knowing that everyone is on the same page." />
                <button className="seemore">…see more</button>
              </div>
            </div>

            <div className="userProduct sectionContainer">
              <div className="head">
                <DashboardInnerTitle name="Products" />
              </div>
              <div className=" categoryBtn_inner">
                {productTags.map((e, i) => {
                  return <ButtonCategoryTag name={e.name} key={i} />;
                })}
              </div>
            </div>
            <div className="userCertifications sectionContainer">
              <div className="head">
                <DashboardInnerTitle name="Licenses & certifications" />
              </div>
              <div className="inner">
                <div className="certificate_card">
                  <div className="image">
                    <img
                      src={CertificateGST}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h6>GST Certificate</h6>
                    <p>Issued Date - 22 Apr 2022</p>
                    <p>Expiry Date - 22 Apr 2030 </p>
                    <p>GST No - 45SS89KE3333NKAT75444</p>
                  </div>
                </div>
                <div className="certificate_card">
                  <div className="image">
                    <img
                      src={CertificateGST}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h6>GST Certificate</h6>
                    <p>Issued Date - 22 Apr 2022</p>
                    <p>Expiry Date - 22 Apr 2030 </p>
                    <p>GST No - 45SS89KE3333NKAT75444</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rightside">
            <div className="userSeller sectionContainer">
              <div className="head">
                <DashboardInnerTitle name="Seller Information" />
              </div>
              <div className="inner">
                <div className="detail">
                  <p>Full Name</p>
                  <h6>Rajat Pradhan</h6>
                </div>
                <div className="detail">
                  <p>You're ID</p>
                  <h6>5484651654IUBGY</h6>
                </div>
                <div className="detail">
                  <p>Contact Address</p>
                  <h6>Bhopal, Madhya Pradesh, Bhopal 462001</h6>
                </div>
                <div className="detail">
                  <p>Aadhaar Card No </p>
                  <h6>9253-3217-3150</h6>
                </div>
                <div className="detail">
                  <p>Pan Card No </p>
                  <h6>GSZPP6710F</h6>
                </div>
                <div className="detail">
                  <p>Contact No </p>
                  <h6>91 70243-93158</h6>
                </div>
                <div className="detail">
                  <p>Type </p>
                  <h6>Vendor</h6>
                </div>
              </div>
            </div>
            <div className="userSeller sectionContainer">
              <div className="head">
                <DashboardInnerTitle name="Company Information" />
              </div>
              <div className="inner">
                <div className="detail">
                  <p>Type</p>
                  <h6>Manufacture</h6>
                </div>
                <div className="detail">
                  <p>Company Team</p>
                  <h6>50+</h6>
                </div>
              </div>
            </div>
            <div className="userSeller sectionContainer">
              <div className="head">
                <DashboardInnerTitle name="Category" />
              </div>
              <div className=" categoryBtn_inner">
                {CategoryTags.map((e, i) => {
                  return <ButtonCategoryTag name={e.name} key={i} />;
                })}
              </div>
            </div>
          </div>
        </div>

        {/* single General Detail*/}
        <div className="sectionContainer">
          <DashboardInnerTitle name="General Detail" />

          <div className="inputField">
            <TextInput
              labelName="Vendor Name"
              value="Har Har Mahadev Electronics"
            />
            <TextInput labelName="Upload Aadhar Card" value="adhaar.png" />
            <TextInput labelName="Upload Pancard" value="pancard.jpg" />
            <TextInput labelName="Primary Contact Number" value="7024393158" />
            <TextInput
              labelName="Secondary Contact Number"
              value="7024393158"
            />
            <TextInput labelName="Upload Address Proof" value="adhaar.pdf" />
            <TextInput labelName="E-mail" value="rajatpradhan@outlook.in" />
            <TextInput
              labelName="Designation of Vendor"
              value="Har Har Mahadev Electronics Manager"
            />
            <TextInput labelName="Country" value="Bharat" />
            <SelectInput labelName="State" options={["Choose"]} />
            <TextInput labelName="City" value="Bhopal" />
            <TextInput labelName="Pincode / Zipcode" value="462001" />
          </div>
        </div>

        {/* single Company or Shop Full Detail*/}
        <div className="sectionContainer">
          <DashboardInnerTitle name="Company or Shop Full Detail" />

          <div className="inputField">
            <TextInput
              labelName="Company / Shop Name"
              required="*"
              value="Har Har Mahadev Electronics"
            />
            <SelectInput
              labelName="Business Type"
              required="*"
              options={["Choose"]}
            />
            <TextInput labelName="MCA" value="MCA.pdf" />
            <DatePickerInput labelName="MCA Expiry Date" option="06/05/2001" />
            <TextInput
              labelName="Primary Contact Number"
              required="*"
              value="7024393158"
            />
            <TextInput
              labelName="Secondary Contact Number "
              value="7024393158"
            />
            <TextInput
              labelName="Primary Contact Email"
              required="*"
              value="rajatpradhan@outlook.in"
            />
            <TextInput
              labelName="Secondary Contact Email"
              value="Har Har Mahadev Electronics Manager"
            />
            <DatePickerInput labelName="MCA Expiry Date" option="06/05/2001" />
            <TextInput
              labelName="GSTIN"
              required="*"
              value="GSTIN67676786698GHFV"
            />
            <TextInput labelName="GST Certificate" value="gstceri.png" />
            <TextInput
              labelName="Upload Business Aadhar Card"
              required="*"
              value="addhar.pdf"
            />
            <TextInput
              labelName="Upload Business Pancard"
              required="*"
              value="businesspancard.jpg"
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
            <SelectInput labelName="State" required="*" options={["Choose"]} />
            <TextInput labelName="City" required="*" value="Bhopal" />
            <TextInput
              labelName="Pincode / Zipcode"
              required="*"
              value="462001"
            />
            <TextInput
              labelName="Upload Address Proof"
              required="*"
              value="Address.png"
            />
          </div>
        </div>

        {/* single Bank Detail*/}
        <div className="sectionContainer">
          <DashboardInnerTitle name="Bank Detail" />

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
            <TextInput
              labelName="Bank Branch"
              required="*"
              value="rajatpradhan"
            />
            <TextInput labelName="IFS Code" required="*" value="7024393158" />
            <TextInput
              labelName="Bank A/c Holder Name"
              required="*"
              value="rajat pradhan"
            />
            <TextInput
              labelName="Upload font page of passbook"
              required="*"
              value="bank.pdf"
            />
            <TextInput labelName="E-mail" value="rajatpradhan@outlook.in" />
            <TextInput labelName="Mobile No" required="*" value="7024393158" />
            <TextInput labelName="GST No" value="GSTPP9898P" />
            <TextInput labelName="Pancard No" required="*" value="GSTPP9898P" />
            <TextInput
              labelName="Upload Pancard"
              required="*"
              value="Pancard.png"
            />
            <TextInput labelName="Pincode / Zipcode" value="462001" />
          </div>
        </div>
        <div className="centerBtns">
          <ButtonMain name="View Performance metrics and sales statistics" />
        </div>
      </div>
    </>
  );
};

export default SellerProfile;
