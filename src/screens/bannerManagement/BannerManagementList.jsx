import React from "react";
import DataTable from "react-data-table-component";
import { mobileBannerColumns, mobileBannerList, webBannerColumns, webBannerList } from "../../constants/dummy/bannerListContent";
import DashboardInnerTitle from "../../components/dashboard/DashboardInnerTitle";
import '../../styles/dashboard/BannerManagementList.css';

const BannerManagementList = () => {
  return (
    <>
      <div className="BannerManagementList sectionGap">
        <div className="web_banner sectionContainer">
            <DashboardInnerTitle name='Web Banner List' />
          <DataTable
            columns={webBannerColumns.column} // dummy data
            data={webBannerList.data}
            selectableRows
            // pagination
            className="bannerManagementTable"
          />
        </div>
        <div className="mobile_banner sectionContainer">
        <DashboardInnerTitle name='Mobile Banner List' />
          <DataTable
            columns={mobileBannerColumns.column} // dummy data
            data={mobileBannerList.data}
            selectableRows
            // pagination
            className="bannerManagementTable"
          />
        </div>
      </div>
    </>
  );
};

export default BannerManagementList;
