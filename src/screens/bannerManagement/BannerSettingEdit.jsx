import React from "react";
import DashboardInnerTitle from "../../components/dashboard/DashboardInnerTitle";
import SelectInput from "../../components/ui/SelectInput";
import FileInput from "../../components/ui/FileInput";
import ButtonMain from "../../components/ui/ButtonMain";
import '../../styles/dashboard/BannerSettingEdit.css'
const BannerSettingEdit = () => {
  return (
    <>
      <div className="BannerSettingEdit sectionContainer">
        <DashboardInnerTitle name="Edit Banner" />
        <div className="bannerIMG">
            <img src={require('../../assests/dashboard/activeBannerIMG.png')} alt="" />
        </div>

{/* Edit First Image & Direction */}
        <div className="bannerDetails">
        <div className="head">
            <DashboardInnerTitle name="Edit First Image & Direction" />
          </div>
          <div className="inputField">
            <FileInput labelName='Select Image'/>
            <SelectInput labelName="Select Category" option="Choose" />
            <SelectInput labelName="Select Brand" optional='(Optional)' option="Choose" />
            <SelectInput labelName="Select Product" optional='(Optional)' option="Choose" />
            <SelectInput labelName="Select Discount" optional='(Optional)' option="Choose" />
            <SelectInput labelName="Select Price" optional='(Optional)' option="Choose" />
          </div>
        </div>
        {/* Edit Second Image & Direction */}
        <div className="bannerDetails">
        <div className="head">
            <DashboardInnerTitle name="Edit Second Image & Direction" />
          </div>
          <div className="inputField">
            <FileInput labelName='Select Image'/>
            <SelectInput labelName="Select Category" option="Choose" />
            <SelectInput labelName="Select Brand" optional='(Optional)' option="Choose" />
            <SelectInput labelName="Select Product" optional='(Optional)' option="Choose" />
            <SelectInput labelName="Select Discount" optional='(Optional)' option="Choose" />
            <SelectInput labelName="Select Price" optional='(Optional)' option="Choose" />
          </div>
        </div>
        {/* Edit Third Image & Direction */}
        <div className="bannerDetails">
        <div className="head">
            <DashboardInnerTitle name="Edit Third Image & Direction" />
          </div>
          <div className="inputField">
            <FileInput labelName='Select Image'/>
            <SelectInput labelName="Select Category" option="Choose" />
            <SelectInput labelName="Select Brand" optional='(Optional)' option="Choose" />
            <SelectInput labelName="Select Product" optional='(Optional)' option="Choose" />
            <SelectInput labelName="Select Discount" optional='(Optional)' option="Choose" />
            <SelectInput labelName="Select Price" optional='(Optional)' option="Choose" />
          </div>
        </div>
        {/* Edit Four Image & Direction */}
        <div className="bannerDetails">
        <div className="head">
            <DashboardInnerTitle name="Edit Four Image & Direction" />
          </div>
          <div className="inputField">
            <FileInput labelName='Select Image'/>
            <SelectInput labelName="Select Category" option="Choose" />
            <SelectInput labelName="Select Brand" optional='(Optional)' option="Choose" />
            <SelectInput labelName="Select Product" optional='(Optional)' option="Choose" />
            <SelectInput labelName="Select Discount" optional='(Optional)' option="Choose" />
            <SelectInput labelName="Select Price" optional='(Optional)' option="Choose" />
          </div>
        </div>

        {/* btns */}
        <div className="centerBtns">
          <ButtonMain name='Change Banner Template' />
          <ButtonMain name='Pause Banner' />
          <ButtonMain btnColor='green' name='Save Banner' />
          <ButtonMain name='Preview Banner' />
        </div>

      </div>
    </>
  );
};

export default BannerSettingEdit;
