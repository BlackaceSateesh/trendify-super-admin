import React, { useState } from "react";
import DashboardInnerTitle from "../../components/dashboard/DashboardInnerTitle";
import ButtonMain from "../../components/ui/ButtonMain";
import "../../styles/dashboard/BannerSettingEdit.css";
import PreviewBanner from "../../components/ui/popups/PreviewBanner";
import MobileBannerType1 from "../../components/bannerTemplates/MobileBannerType1";
import MobileBannerSliderType1 from "../../components/bannerTemplates/MobileBannerSliderType1";
import WebBannerType3 from "../../components/bannerTemplates/WebBannerType3";
import WebBannerType2 from "../../components/bannerTemplates/WebBannerType2";
import WebBannerType4 from "../../components/bannerTemplates/WebBannerType4";
import WebBannerType1 from "../../components/bannerTemplates/WebBannerType1";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { AuthenticatedRoutes } from "../../constants/Routes";
import InputFieldSet from "../../components/ui/BannerInputField";
import { addBanners } from "../../api/banner-api";
import SpinnerLoader from "../../components/ui/SpinnerLoader";
import { BannerIds } from "../../constants/contents/BannerContent";

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
      collageType: bannerType.id,
      bannerApplicationType: bannerType.type
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

  return !bannerType ? <Navigate to={AuthenticatedRoutes.BannerManagementList} /> : (
    <>
      <div className="BannerSettingEdit sectionContainer">
        <DashboardInnerTitle name="Edit Banner" />
        <div className="bannerIMG">
          {bannerType.id === BannerIds.MOBILE_BANNER_1.id ? (
            <MobileBannerType1 images={getImageFieldsFromData()} />
          ) : bannerType.id === BannerIds.WEB_BANNER_1.id ? (
            <WebBannerType1 images={getImageFieldsFromData()} />
          ) : bannerType.id === BannerIds.WEB_BANNER_2.id ? (
            <WebBannerType2 images={getImageFieldsFromData()} />
          ) : bannerType.id === BannerIds.WEB_BANNER_3.id ? (
            <WebBannerType3 images={getImageFieldsFromData()} />
          ) : bannerType.id === BannerIds.WEB_BANNER_4.id ? (
            <WebBannerType4 images={getImageFieldsFromData()} />
          ) : (
            <MobileBannerSliderType1 images={getImageFieldsFromData()} />
          )}
        </div>

        {[...Array(bannerType.id !== BannerIds.MOBILE_SLIDER ? BannerIds[bannerType.id].count : fieldCount)].map((_, index) => (
          <InputFieldSet key={index} index={index} onDataChange={handleDataChange} />
        ))}

        {
          bannerType === BannerIds.MOBILE_SLIDER && (
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