import React from 'react';
import '../../styles/dashboard/DashboardScreen.css';
import Sidebar from '../../components/dashboard/Sidebar';
import Header from '../../components/dashboard/Header';
import '../../styles/ui/uiComponents.css';
import { MainContent } from '../../constants/contents/mainContent';

const DashboardScreen = ({innerPage, pageName, pageTitle, parentName }) => {
  return (
    <>
      <div className="DashboardScreen">
        <div className="DashboardScreen_inner">
            <Sidebar/>
            {/* content screen */}
            <div className="content_screen" id='contentScreen'>
                <Header pageName={pageName} pageTitle={pageTitle} parentName={parentName} />
                {innerPage}
                <footer>
                  <h6>Copyright © 2024 {MainContent.appName}. All Rights Reserved.</h6>
                </footer>
            </div>
        </div>
      </div>
    </>
  )
}

export default DashboardScreen;
