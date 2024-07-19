import React, { useState } from "react";
import DashboardInnerTitle from "../../components/dashboard/DashboardInnerTitle";
import ButtonMain from "../../components/ui/ButtonMain";
import "../../styles/dashboard/BannerSetting.css";
import { AuthenticatedRoutes } from "../../constants/Routes";
import SelectBannerPopup from "../../components/ui/popups/SelectBannerPopup";
import BannerTemplate1 from "../../assests/dashboard/bannerTemplate1.png";
import BannerTemplate2 from "../../assests/dashboard/bannerTemplate2.png";
import BannerTemplate3 from "../../assests/dashboard/bannerTemplate3.png";
import BannerTemplate4 from "../../assests/dashboard/bannerTemplate4.png";
import ActiveBanner from "../../assests/dashboard/activeBannerIMG.png";

const BannerSetting = () => {
  const [showTemplate, setShowTemplate] = useState(false);
  // dummy template banner list

  const templateBannerList = [
    {
      img: BannerTemplate1,
      name: "Banner Template One",
    },
    {
      img: BannerTemplate2,
      name: "Banner Template Two",
    },
    {
      img: BannerTemplate3,
      name: "Banner Template Three",
    },
    {
      img: BannerTemplate4,
      name: "Banner Template Four",
    },
  ];

  return (
    <>
      <div className="BannerSetting sectionGap">
        {/* active hero banner */}
        <div className="heroBanner sectionContainer">
          <DashboardInnerTitle name="Hero Banner" />
          <div className="activeBanner">
            <DashboardInnerTitle name="Current Active Banner " />
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
                    <ButtonMain
                      onClick={() => setShowTemplate(true)}
                      name="Change Banner Template"
                    />
                    <ButtonMain
                      link={AuthenticatedRoutes.bannerSettingEdit}
                      btnColor="green"
                      name="Edit Banner"
                    />
                    <ButtonMain name="Pause Banner" />
                  </div>
                  {/* preview popup */}
                  <SelectBannerPopup
                    show={showTemplate}
                    onHide={() => setShowTemplate(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* banner template */}
        <div className="bannerTemplate sectionContainer">
          <DashboardInnerTitle name="Banner Template" />
          <div className="template_list">
            {templateBannerList.map((e, i) => {
              return (
                <div key={i} className="template_card">
                  <div className="image">
                    <img src={e.img} alt="" />
                  </div>
                  <h6 className="name">{e.name}</h6>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSetting;
