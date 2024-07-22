import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { BannerColumns } from "../../constants/dummy/bannerListContent";
import DashboardInnerTitle from "../../components/dashboard/DashboardInnerTitle";
import ButtonMain from "../../components/ui/ButtonMain";
import '../../styles/dashboard/BannerManagementList.css';
import { useNavigate } from "react-router-dom";
import { AuthenticatedRoutes } from "../../constants/Routes";
import MobileBannerDesigns from "../../components/ui/MobileBannerDesigns";
import { getBannersAll } from "../../api/banner-api";
import { Modal } from "react-bootstrap";
import MobileBannerSliderType1 from "../../components/bannerTemplates/MobileBannerSliderType1";
import MobileBannerType1 from "../../components/bannerTemplates/MobileBannerType1";
import WebBannerType3 from "../../components/bannerTemplates/WebBannerType3";
import WebBannerType2 from "../../components/bannerTemplates/WebBannerType2";
import WebBannerType4 from "../../components/bannerTemplates/WebBannerType4";
import WebBannerType1 from "../../components/bannerTemplates/WebBannerType1";

const BannerManagementList = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [showLayout, setShowLayout] = useState(false);
  const [webBanners, setWebBanners] = useState([]);
  const [mobileBanners, setMobileBanners] = useState([]);
  const [currentCollageType, setCurrentCollageType] = useState(null);
  const [currentBannerResList, setCurrentBannerResList] = useState([]);

  const mapBannerData = (data) => {
    return data.map((banner, index) => {
      return {
        id: index + 1,
        bannerType: banner?.bannerApplicationType || "N/A",
        collageType: banner?.collageType || "N/A",
        imageCount: banner?.bannerResList?.length || "N/A",
        action: () => {
          setCurrentCollageType(banner?.collageType);
          setCurrentBannerResList(banner?.bannerResList);
          setShowLayout(true);
        }
      }
    });
  }

  const getImageUrlsFromData = () => {
    return currentBannerResList.map((data) => data.imageBase64Url);
  };

  useEffect(() => {
    getBannersAll().then((res) => {
      const webBanners = res.filter((banner) => banner.bannerApplicationType === 'Web');
      const mobileBanners = res.filter((banner) => banner.bannerApplicationType === 'Mobile');

      setWebBanners(mapBannerData(webBanners));
      setMobileBanners(mapBannerData(mobileBanners));
    });
  }, []);

  return (
    <>
      <div className="BannerManagementList sectionGap">
        <WebBannerType1 />
        <WebBannerType2 />
        <WebBannerType3 />
        <WebBannerType4 />
        <div className="web_banner sectionContainer">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <DashboardInnerTitle name='Web Banner List' />
            <ButtonMain
              name='Add New Banner'
              onClick={() => console.log('Add New Banner')}
              className='addNewBanner'
            />
          </div>
          <DataTable
            columns={BannerColumns} // dummy data
            data={webBanners}
            selectableRows
            // pagination
            className="bannerManagementTable dataTable_main"
          />
        </div>
        <div className="mobile_banner sectionContainer">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <DashboardInnerTitle name='Mobile Banner List' />
            <ButtonMain
              name='Add New Banner'
              onClick={() => setShowModal(true)}
              className='addNewBanner'
            />
          </div>
          <DataTable
            columns={BannerColumns} // dummy data
            data={mobileBanners}
            selectableRows
            // pagination
            className="bannerManagementTable dataTable_main"
          />
        </div>
      </div>

      <MobileBannerDesigns
        show={showModal}
        onHide={() => setShowModal(false)}
        onLayout={() => navigate(AuthenticatedRoutes.bannerSettingEdit, { state: { bannerType: 'mobile-layout1' } })}
        onSlider={() => navigate(AuthenticatedRoutes.bannerSettingEdit, { state: { bannerType: 'mobile-slider1' } })}
      />

      <Modal
        show={showLayout}
        onHide={() => setShowLayout(false)}
        size="s"
        centered
        scrollable
        className="mobBannerLayoutPreview"
      >
        <Modal.Header closeButton>
          <Modal.Title>Mobile Banner Layout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentCollageType === 'MOBILE_BANNER_1' ? (
            <MobileBannerType1 images={getImageUrlsFromData()} />
          ) : (
            <MobileBannerSliderType1 count={currentBannerResList.length} images={getImageUrlsFromData()} />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BannerManagementList;
