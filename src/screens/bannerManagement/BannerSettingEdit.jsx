import React, { useState } from "react";
import DashboardInnerTitle from "../../components/dashboard/DashboardInnerTitle";
import SelectInput from "../../components/ui/SelectInput";
import FileInput from "../../components/ui/FileInput";
import ButtonMain from "../../components/ui/ButtonMain";
import "../../styles/dashboard/BannerSettingEdit.css";
import PreviewBanner from "../../components/ui/popups/PreviewBanner";
import ActiveBanner from "../../assests/dashboard/activeBannerIMG.png";

const BannerSettingEdit = () => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <div className="BannerSettingEdit sectionContainer">
        <DashboardInnerTitle name="Edit Banner" />
        <div className="bannerIMG">
          <img
            src={ActiveBanner}
            alt=""
          />
        </div>

        {/* Edit First Image & Direction */}
        <div className="bannerDetails">
          <div className="head">
            <DashboardInnerTitle name="Edit First Image & Direction" />
          </div>
          <div className="inputField">
            <FileInput labelName="Select Image" />
            <SelectInput labelName="Select Category" option="Choose" />
            <SelectInput
              labelName="Select Brand"
              optional="(Optional)"
              option="Choose"
            />
            <SelectInput
              labelName="Select Product"
              optional="(Optional)"
              option="Choose"
            />
            <SelectInput
              labelName="Select Discount"
              optional="(Optional)"
              option="Choose"
            />
            <SelectInput
              labelName="Select Price"
              optional="(Optional)"
              option="Choose"
            />
          </div>
        </div>
        {/* Edit Second Image & Direction */}
        <div className="bannerDetails">
          <div className="head">
            <DashboardInnerTitle name="Edit Second Image & Direction" />
          </div>
          <div className="inputField">
            <FileInput labelName="Select Image" />
            <SelectInput labelName="Select Category" option="Choose" />
            <SelectInput
              labelName="Select Brand"
              optional="(Optional)"
              option="Choose"
            />
            <SelectInput
              labelName="Select Product"
              optional="(Optional)"
              option="Choose"
            />
            <SelectInput
              labelName="Select Discount"
              optional="(Optional)"
              option="Choose"
            />
            <SelectInput
              labelName="Select Price"
              optional="(Optional)"
              option="Choose"
            />
          </div>
        </div>
        {/* Edit Third Image & Direction */}
        <div className="bannerDetails">
          <div className="head">
            <DashboardInnerTitle name="Edit Third Image & Direction" />
          </div>
          <div className="inputField">
            <FileInput labelName="Select Image" />
            <SelectInput labelName="Select Category" option="Choose" />
            <SelectInput
              labelName="Select Brand"
              optional="(Optional)"
              option="Choose"
            />
            <SelectInput
              labelName="Select Product"
              optional="(Optional)"
              option="Choose"
            />
            <SelectInput
              labelName="Select Discount"
              optional="(Optional)"
              option="Choose"
            />
            <SelectInput
              labelName="Select Price"
              optional="(Optional)"
              option="Choose"
            />
          </div>
        </div>
        {/* Edit Four Image & Direction */}
        <div className="bannerDetails">
          <div className="head">
            <DashboardInnerTitle name="Edit Four Image & Direction" />
          </div>
          <div className="inputField">
            <FileInput labelName="Select Image" />
            <SelectInput labelName="Select Category" option="Choose" />
            <SelectInput
              labelName="Select Brand"
              optional="(Optional)"
              option="Choose"
            />
            <SelectInput
              labelName="Select Product"
              optional="(Optional)"
              option="Choose"
            />
            <SelectInput
              labelName="Select Discount"
              optional="(Optional)"
              option="Choose"
            />
            <SelectInput
              labelName="Select Price"
              optional="(Optional)"
              option="Choose"
            />
          </div>
        </div>

        {/* btns */}
        <div className="centerBtns">
          <ButtonMain name="Change Banner Template" />
          <ButtonMain name="Pause Banner" />
          <ButtonMain btnColor="green" name="Save Banner" />
          <ButtonMain
            onClick={() => setShowPreview(true)}
            name="Preview Banner"
          />
        </div>
        {/* preview popup */}
        <PreviewBanner
          show={showPreview}
          onHide={() => setShowPreview(false)}
        />
      </div>
    </>
  );
};

export default BannerSettingEdit;
