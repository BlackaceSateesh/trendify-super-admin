import React from "react";
import DashboardInnerTitle from "../../components/dashboard/DashboardInnerTitle";
import ButtonMain from "../../components/ui/ButtonMain";
import '../../styles/dashboard/BannerSetting.css';
const BannerSetting = () => {
  // dummy template banner list

  const templateBannerList = [
    {
      img: require("../../assests/dashboard/bannerTemplate1.png"),
      name: "Banner Template One",
    },
    {
      img: require("../../assests/dashboard/bannerTemplate2.png"),
      name: "Banner Template Two",
    },
    {
      img: require("../../assests/dashboard/bannerTemplate3.png"),
      name: "Banner Template Three",
    },
    {
      img: require("../../assests/dashboard/bannerTemplate4.png"),
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
                  src={require("../../assests/dashboard/activeBannerIMG.png")}
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
                    <ButtonMain btnColor="green" name="Edit Banner" />
                    <ButtonMain name="Pause Banner" />
                  </div>
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
