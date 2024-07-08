import React from "react";
import "../../styles/dashboard/DashboardScreen.css";
import Sidebar from "../../components/dashboard/Sidebar";
import Header from "../../components/dashboard/Header";
import "../../styles/ui/uiComponents.css";
import "../../styles/ui/AllPopup.css";
import { MainContent } from "../../constants/contents/mainContent";
import { useSelector } from "react-redux";

const DashboardScreen = ({ innerPage, pageName, pageTitle, parentName }) => {
  const sideMenuState = useSelector((state) => state.SideMenuSlice);

  return (
    <>
      <div className="DashboardScreen">
        <div className="DashboardScreen_inner">
          <Sidebar />
          {/* content screen */}
          <div className={`content_screen ${sideMenuState.open? 'full': '' }`} id="contentScreen">
            <div className="break">
              <Header
                pageName={pageName}
                pageTitle={pageTitle}
                parentName={parentName}
              />
              {innerPage}
            </div>
            <footer>
              <h6>
                Copyright © 2024 {MainContent.appName}. All Rights Reserved.
              </h6>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardScreen;
