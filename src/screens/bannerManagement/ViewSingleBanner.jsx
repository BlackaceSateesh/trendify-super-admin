import React from "react";
import DashboardInnerTitle from "../../components/dashboard/DashboardInnerTitle";
import ButtonMain from "../../components/ui/ButtonMain";
import '../../styles/dashboard/BannerSetting.css';
import { AuthenticatedRoutes } from "../../constants/Routes";
import ActiveBanner from "../../assests/dashboard/activeBannerIMG.png";
const ViewSingleBanner = () => {


  return (
    <>
      <div className="BannerSetting sectionGap">
        {/* active hero banner */}
        <div className="heroBanner sectionContainer">
          <DashboardInnerTitle name="Hero Banner" />
          <div className="activeBanner">
            <div className="inner">
              <div className="image">
                <img
                  src={ActiveBanner}
                  alt=""
                />
              </div>
              <div className="details">
                <div className="details_inner">
                  <DashboardInnerTitle name="Banner Details  " />
                  <div className="content">
                    <div className="list">
                      <span className="key">Banner Name</span>
                      <span className="value">Hero Banner</span>
                    </div>
                    <div className="list">
                      <span className="key">Banner Type</span>
                      <span className="value">Group Banner</span>
                    </div>
                    <div className="list">
                      <span className="key">Image Count</span>
                      <span className="value">4 Image Banner</span>
                    </div>
                    <div className="list">
                      <span className="key">Last Update</span>
                      <span className="value">25/07/2024</span>
                    </div>
                    <div className="list">
                      <span className="key">Status</span>
                      <span className="value">Active</span>
                    </div>
                    <div className="list">
                      <span className="key">Platform</span>
                      <span className="value">Only Web</span>
                    </div>
                  </div>
                  <div className="btns">
                    <ButtonMain name="Change Banner Template" />
                    <ButtonMain link={AuthenticatedRoutes.bannerSettingEdit} btnColor="green" name="Edit Banner" />
                    <ButtonMain name="Pause Banner" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default ViewSingleBanner;
