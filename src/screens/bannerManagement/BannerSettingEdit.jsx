import React from "react";
import DashboardInnerTitle from "../../components/dashboard/DashboardInnerTitle";
import SelectInput from "../../components/ui/SelectInput";
import FileInput from "../../components/ui/FileInput";

const BannerSettingEdit = () => {
  return (
    <>
      <div className="BannerSettingEdit sectionContainer">
        <DashboardInnerTitle name="Edit Banner" />
        <div className="bannerIMG">
            <img src={require('../../assests/dashboard/bannerTemplate1.png')} alt="" />
        </div>

        <div className="bannerDetails">
        <div className="head">
            <DashboardInnerTitle name="Edit First Image & Direction" />
          </div>
          <div className="inputField">
            <FileInput labelName='Select Image'/>
            <SelectInput labelName="Select Category" required="*" option="Choose" />
            <SelectInput labelName="Select Brand" optional='(Optional)' required="*" option="Choose" />
            <SelectInput labelName="City" required="*" option="Choose" />
            <SelectInput labelName="City" required="*" option="Choose" />
            
            
          </div>
        </div>

      </div>
    </>
  );
};

export default BannerSettingEdit;
