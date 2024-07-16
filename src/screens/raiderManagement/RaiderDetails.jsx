import React from "react";
import DashboardInnerTitle from "../../components/dashboard/DashboardInnerTitle";
import TextInput from "../../components/ui/TextInput";
import TextInputWithEye from "../../components/ui/TextInputWithEye";
import SearchBoxTable from "../../components/ui/SearchBoxTable";
import DatatableExportBtn from "../../components/ui/DatatableExportBtn";
import DataTable from "react-data-table-component";
import { raiderDetailColumns, raiderDetailList } from "../../constants/dummy/raiderDetailList";

const RaiderDetails = () => {
  return (
    <>
      <div className="RaiderDetails sectionGap">
        <div className="sectionContainer">
          <DashboardInnerTitle name="Raider Detail" />

          <div className="inputField">
            <TextInput labelName="Full Name" value="Rajat Pradhan" />
            <TextInput labelName="Mobile Number" value="+91 7024393158" />
            <TextInput labelName="Verification ID" value="9253 9217 3150" />
            <TextInput labelName="City" value="Bhopal" />
            <TextInput labelName="State" value="Madhya Pradesh" />
            <TextInputWithEye labelName="Raider Selfie" value="Image.jpg" />
          </div>
        </div>

        <div className="sectionContainer">
          <DashboardInnerTitle name="All Delivered Order" />

          <div className="dataTable_header">
            <SearchBoxTable placeholderValue="Search List" />
            <DatatableExportBtn />
          </div>
          <div className="datatableMain">
            <DataTable
              columns={raiderDetailColumns.column} // dummy data
              data={raiderDetailList.data}
              selectableRows
              pagination
              className="raiderDetailListTable dataTable_main"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RaiderDetails;
