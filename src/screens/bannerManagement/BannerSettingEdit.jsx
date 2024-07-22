import React, { useState } from "react";
import DashboardInnerTitle from "../../components/dashboard/DashboardInnerTitle";
import ButtonMain from "../../components/ui/ButtonMain";
import "../../styles/dashboard/BannerSettingEdit.css";
import PreviewBanner from "../../components/ui/popups/PreviewBanner";
import MobileBannerType1 from "../../components/bannerTemplates/MobileBannerType1";
import MobileBannerSliderType1 from "../../components/bannerTemplates/MobileBannerSliderType1";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthenticatedRoutes } from "../../constants/Routes";
import InputFieldSet from "../../components/ui/BannerInputField";
import { addBanners } from "../../api/banner-api";
import SpinnerLoader from "../../components/ui/SpinnerLoader";

const BannerSettingEdit = () => {
  const location = useLocation();
  const bannerType = location.state.bannerType;
  const navigate = useNavigate();

  const [showPreview, setShowPreview] = useState(false);
  const [inputData, setInputData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fieldCount, setFieldCount] = useState(1);

  const handleDataChange = (index, data) => {
    setInputData((prevData) => {
      const newData = [...prevData];
      newData[index] = data;
      return newData;
    });
  };

  const getImageFieldsFromData = () => {
    return inputData.map((data) => data.image ? `data:image/png;base64,${data.image}` : "");
  };

  const handleSaveBanner = async () => {
    if (inputData.some((data) => !data.category || !data.type || !data.image || !data.brand || !data.productDetail)) {
      return;
    }
    if (loading) return;
    setLoading(true);
    let bannerReqList = inputData.map((data) => {
      return {
        productCategoryId: data.productDetail === "category" ? data.category : null,
        productTypeId: data.productDetail === "type" ? data.type : null,
        imageBase64Url: data.image,
        brandId: data.productDetail === "brand" ? data.brand : null,
        discount: 0,
        price: 0,
      };
    });

    const payload = {
      bannerReqList,
      collageType: bannerType === "mobile-layout1" ? "MOBILE_BANNER_1" : "SLIDER",
      bannerApplicationType: "Mobile"
    }

    try {
      await addBanners(payload);
      navigate(AuthenticatedRoutes.BannerManagementList);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="BannerSettingEdit sectionContainer">
        <DashboardInnerTitle name="Edit Banner" />
        <div className="bannerIMG">
          {bannerType === "mobile-layout1" ? (
            <MobileBannerType1 images={getImageFieldsFromData()} />
          ) : (
            <MobileBannerSliderType1 count={fieldCount} images={getImageFieldsFromData()} />
          )}
        </div>

        {[...Array(bannerType === "mobile-layout1" ? 4 : fieldCount)].map((_, index) => (
          <InputFieldSet key={index} index={index} onDataChange={handleDataChange} />
        ))}

        {
          bannerType !== "mobile-layout1" && (
            <div className="sideBtns">
              <ButtonMain 
                btnColor="green" 
                name="Add Field" 
                onClick={() => setFieldCount((prevCount) => prevCount + 1)} 
              />
            </div>
          )
        }

        <div className="centerBtns">
          <ButtonMain 
            btnColor="green" 
            name={loading ? <SpinnerLoader /> : "Save Banner"}
            onClick={handleSaveBanner} 
          />
        </div>

        <PreviewBanner show={showPreview} onHide={() => setShowPreview(false)} />
      </div>
    </>
  );
};

export default BannerSettingEdit;