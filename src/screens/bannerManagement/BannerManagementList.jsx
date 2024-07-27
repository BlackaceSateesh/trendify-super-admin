import React, { useState, useEffect, useRef } from "react";
import DataTable from "react-data-table-component";
import { BannerColumns } from "../../constants/dummy/bannerListContent";
import DashboardInnerTitle from "../../components/dashboard/DashboardInnerTitle";
import ButtonMain from "../../components/ui/ButtonMain";
import '../../styles/dashboard/BannerManagementList.css';
import '../../styles/bannerTemplates/UserDashboardBannerType.css';
import { useNavigate } from "react-router-dom";
import { AuthenticatedRoutes } from "../../constants/Routes";
import MobileBannerDesigns from "../../components/ui/MobileBannerDesigns";
import { getBannersAll, deleteBanner } from "../../api/banner-api";
import { Modal } from "react-bootstrap";
import MobileBannerSliderType1 from "../../components/bannerTemplates/MobileBannerSliderType1";
import MobileBannerType1 from "../../components/bannerTemplates/MobileBannerType1";
import { BannerIds } from "../../constants/contents/BannerContent";
import WarningPopup from "../../components/ui/popups/WarningPopup";
import WebBannerType3 from "../../components/bannerTemplates/WebBannerType3";
import WebBannerType2 from "../../components/bannerTemplates/WebBannerType2";
import WebBannerType4 from "../../components/bannerTemplates/WebBannerType4";
import WebBannerType1 from "../../components/bannerTemplates/WebBannerType1";
import SpinnerLoader from "../../components/ui/SpinnerLoader";
import NewLooksBannerTemplate from "../../components/bannerTemplates/NewLooksBannerTemplate";
import NewCollectionSection from "../../components/bannerTemplates/NewCollectionSection";
import CenterBigBannerType from "../../components/bannerTemplates/CenterBigBannerType";
import TrendifyOriginSection from "../../components/bannerTemplates/TrendifyOriginSection";
import FullScreenSlider from "../../components/bannerTemplates/FullScreenSlider";
import SingleProductType from "../../components/bannerTemplates/SingleProductType";
import WebBannerTypePrimary from "../../components/bannerTemplates/WebBannerTypePrimary";

const BannerManagementList = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [showLayout, setShowLayout] = useState(false);
  const [webBanners, setWebBanners] = useState([]);
  const [mobileBanners, setMobileBanners] = useState([]);
  const [currentCollageType, setCurrentCollageType] = useState(null);
  const [currentBannerResList, setCurrentBannerResList] = useState([]);
  const [currentBannerLabels, setCurrentBannerLabels] = useState({
    label: "",
    value: ""
  });
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [templateType, setTemplateType] = useState("");
  const [screenLoader, setScreenLoader] = useState(false);

  const tempBannerData = useRef();

  const mapBannerData = (data) => {
    return data.map((banner, index) => {
      return {
        sno: index + 1,
        id: banner.id,
        bannerType: banner?.bannerApplicationType || "N/A",
        collageType: banner?.collageType || "N/A",
        imageCount: banner?.bannerResList?.length || "N/A",
        action: [
          () => {
            setCurrentCollageType(banner?.collageType);
            setCurrentBannerResList(banner?.bannerResList);
            setCurrentBannerLabels({
              label: banner?.label,
              value: banner?.value
            });
            setShowLayout(true);
          },
          () => {
            setShowDeletePopup(true);
            tempBannerData.current = banner;
          }
        ]
      }
    });
  }

  const handleDeleteBanner = async () => {
    setLoading(true);
    const { id, bannerApplicationType: bannerType } = tempBannerData.current;
    try {
      setError(null);
      await deleteBanner(id);
      if (bannerType === 'Web') {
        setWebBanners((prevData) => prevData.filter((banner) => banner.id !== id));
      } else {
        setMobileBanners((prevData) => prevData.filter((banner) => banner.id !== id));
      }
    } catch (error) {
      setError(error?.response?.data?.message || 'Something went wrong');
    } finally {
      tempBannerData.current = null;
      setLoading(false);
    }
  }

  const getBanners = async () => {
    setScreenLoader(true);
    try {
      const banners = await getBannersAll();
      const webBanners = banners.filter((banner) => banner.bannerApplicationType === 'Web');
      const mobileBanners = banners.filter((banner) => banner.bannerApplicationType === 'Mobile');

      setWebBanners(mapBannerData(webBanners));
      setMobileBanners(mapBannerData(mobileBanners));
    } catch (error) {
      console.log(error?.response?.data?.message);
    } finally {
      setScreenLoader(false);
    }
  }

  const getImageUrlsFromData = () => {
    return currentBannerResList.map((data) => data.imageBase64Url);
  };

  useEffect(() => {
    getBanners();
  }, []);

  return (
    <>
      <div className="BannerManagementList sectionGap">
    {/* <FullScreenSlider />
    <NewLooksBannerTemplate />
    <NewCollectionSection />
    <CenterBigBannerType />
    <TrendifyOriginSection />
    <NewCollectionSection clsName='odd' />
    <NewCollectionSection />
    <SingleProductType /> */}
    <WebBannerTypePrimary />
        <div className="web_banner sectionContainer">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <DashboardInnerTitle name='Web Banner List' />
            <ButtonMain
              name='Add New Banner'
              onClick={() => {
                setShowModal(true);
                setTemplateType("Web");
              }}
              className='addNewBanner'
            />
          </div>
          <DataTable
            columns={BannerColumns} // dummy data
            data={webBanners}
            selectableRows
            progressComponent={<SpinnerLoader style={{ marginBottom: "20px" }} />}
            progressPending={screenLoader}
            // pagination
            className="bannerManagementTable dataTable_main"
          />
        </div>
        <div className="mobile_banner sectionContainer">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <DashboardInnerTitle name='Mobile Banner List' />
            <ButtonMain
              name='Add New Banner'
              onClick={() => {
                setShowModal(true);
                setTemplateType("Mobile");
              }}
              className='addNewBanner'
            />
          </div>
          <DataTable
            columns={BannerColumns} // dummy data
            data={mobileBanners}
            selectableRows
            progressComponent={<SpinnerLoader style={{ marginBottom: "20px" }} />}
            progressPending={screenLoader}
            // pagination
            className="bannerManagementTable dataTable_main"
          />
        </div>
      </div>

      <MobileBannerDesigns
        show={showModal}
        onHide={() => setShowModal(false)}
        templateType={templateType}
        onLayout={(template) => navigate(AuthenticatedRoutes.bannerSettingEdit, { state: { bannerType: template } })}
      />

      <Modal
        show={showLayout}
        onHide={() => setShowLayout(false)}
        size={currentCollageType === BannerIds?.MOBILE_SLIDER.id || currentCollageType?.includes("WEB") ? 'fullscreen' : 'sm'}
        centered
        scrollable
        className="mobBannerLayoutPreview"
      >
        <Modal.Header closeButton>
          <Modal.Title>Banner Layout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {currentCollageType === BannerIds.MOBILE_BANNER_1.id ? (
              <MobileBannerType1 images={getImageUrlsFromData()} />
            ) : currentCollageType === BannerIds.WEB_BANNER_1.id ? (
              <WebBannerType1 images={getImageUrlsFromData()} />
            ) : currentCollageType === BannerIds.WEB_BANNER_2.id ? (
              <WebBannerType2 images={getImageUrlsFromData()} />
            ) : currentCollageType === BannerIds.WEB_BANNER_3.id ? (
              <WebBannerType3 images={getImageUrlsFromData()} />
            ) : currentCollageType === BannerIds.WEB_BANNER_4.id ? (
              <WebBannerType4 images={getImageUrlsFromData()} />
            ) : currentCollageType === BannerIds.WEB_CENTER_BANNER_SLIDER.id ? (
              <CenterBigBannerType images={getImageUrlsFromData()} count={currentBannerResList.length} />
            ) : currentCollageType === BannerIds.WEB_NEW_LOOKS_BANNER.id ? (
              <NewLooksBannerTemplate images={getImageUrlsFromData()} />
            ) : currentCollageType === BannerIds.WEB_NEW_COLLECTION_SLIDER.id ? (
              <NewCollectionSection images={getImageUrlsFromData()} count={currentBannerResList.length} label={currentBannerLabels.label} value={currentBannerLabels.value} />
            ) : currentCollageType === BannerIds.WEB_NEW_COLLECTION_ODD_SLIDER.id ? (
              <NewCollectionSection images={getImageUrlsFromData()} count={currentBannerResList.length} clsName='odd' label={currentBannerLabels.label} value={currentBannerLabels.value} />
            ) : currentCollageType === BannerIds.WEB_NEW_COLLECTION_EVEN_SLIDER.id ? (
              <NewCollectionSection images={getImageUrlsFromData()} count={currentBannerResList.length} clsName='even' label={currentBannerLabels.label} value={currentBannerLabels.value} />
            ) : currentCollageType === BannerIds.WEB_FULLSCREEN_SLIDER.id ? (
              <FullScreenSlider images={getImageUrlsFromData()} count={currentBannerResList.length} />
            ) : currentCollageType === BannerIds.WEB_SINGLE_PRODUCT_BANNER.id ? (
              <SingleProductType images={getImageUrlsFromData()} />
            ) : currentCollageType === BannerIds.WEB_TRENDIFY_ORIGIN.id ? (
              <TrendifyOriginSection images={getImageUrlsFromData()} />
            ) : currentCollageType === BannerIds.MOBILE_SLIDER.id ? (
              <MobileBannerSliderType1 count={currentBannerResList.length} images={getImageUrlsFromData()} />
            ) : null}
          </div>
        </Modal.Body>
      </Modal>

      <WarningPopup
        show={showDeletePopup}
        onHide={() => setShowDeletePopup(false)}
        title="Delete Banner"
        message="Are you sure you want to delete this banner?"
        onReject={() => handleDeleteBanner()}
        loading={loading}
        error={error}
      />
    </>
  );
};

export default BannerManagementList;
