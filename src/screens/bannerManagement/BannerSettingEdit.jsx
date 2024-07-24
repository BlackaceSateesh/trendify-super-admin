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
import NewLooksBannerTemplate from "../../components/bannerTemplates/NewLooksBannerTemplate";
import NewCollectionSection from "../../components/bannerTemplates/NewCollectionSection";
import CenterBigBannerType from "../../components/bannerTemplates/CenterBigBannerType";
import FullScreenSlider from "../../components/bannerTemplates/FullScreenSlider";
import SingleProductType from "../../components/bannerTemplates/SingleProductType";
import TrendifyOriginSection from "../../components/bannerTemplates/TrendifyOriginSection";
import TextInput from "../../components/ui/TextInput";

const BannerSettingEdit = () => {
  const location = useLocation();
  const bannerType = location.state.bannerType;
  const navigate = useNavigate();

  const [showPreview, setShowPreview] = useState(false);
  const [inputData, setInputData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fieldCount, setFieldCount] = useState(bannerType.count ?? 1);
  const [label, setLabel] = useState("");
  const [value, setValue] = useState("");

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
    if (inputData.some((data) => !data.category || !data.type || !data.image || !data.brand || !data.productDetail || !data.discountOrPrice || !data.discountOrPriceValue || !data.product)) {
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
        modelName: data.productDetail === "product" ? data.product : null,
        discount: data.discountOrPrice === "discount" ? data.discountOrPriceValue : null,
        price: data.discountOrPrice === "price" ? data.discountOrPriceValue : null,
      };
    });

    const payload = {
      bannerReqList,
      collageType: bannerType.id,
      bannerApplicationType: bannerType.type,
      label,
      value,
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
        <DashboardInnerTitle name="Add Banner" />
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
          ) : bannerType.id === BannerIds.WEB_CENTER_BANNER.id ? (
            <CenterBigBannerType images={getImageFieldsFromData()} />
          ) : bannerType.id === BannerIds.WEB_NEW_LOOKS_BANNER.id ? (
            <NewLooksBannerTemplate images={getImageFieldsFromData()} />
          ) : bannerType.id === BannerIds.WEB_NEW_COLLECTION_SLIDER.id ? (
            <NewCollectionSection images={getImageFieldsFromData()} label={label} value={value} count={fieldCount}  />
          ) : bannerType.id === BannerIds.WEB_NEW_COLLECTION_ODD_SLIDER.id ? (
            <NewCollectionSection images={getImageFieldsFromData()} label={label} value={value} count={fieldCount} clsName="odd" />
          ) : bannerType.id === BannerIds.WEB_FULLSCREEN_SLIDER.id ? (
            <FullScreenSlider images={getImageFieldsFromData()} count={fieldCount} />
          ) : bannerType.id === BannerIds.WEB_SINGLE_PRODUCT_BANNER.id ? (
            <SingleProductType images={getImageFieldsFromData()} label={label} value={value} />
          ) : bannerType.id === BannerIds.WEB_TRENDIFY_ORIGIN.id ? (
            <TrendifyOriginSection images={getImageFieldsFromData()} />
          ) : bannerType.id === BannerIds.MOBILE_SLIDER.id ? (
            <MobileBannerSliderType1 images={getImageFieldsFromData()} count={fieldCount} />
          ) : null}
        </div>

        {
          bannerType.label && (
            <div className="labelValue">
              <TextInput 
                labelName="Label"
                optional="&nbsp;&nbsp;&nbsp;Enclose a phrase within {} to highlight"
                value={label} 
                onChange={(e) => setLabel(e.target.value)} 
              />
              <TextInput 
                labelName="Value" 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
              />
            </div>
          )
        }

        {[...Array(!bannerType.id.includes("SLIDER") ? BannerIds[bannerType.id].count : fieldCount)].map((_, index) => (
          <InputFieldSet key={index} index={index} onDataChange={handleDataChange} />
        ))}

        {
          bannerType.id.includes("SLIDER") && (
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