import React from "react";
import DashboardInnerTitle from "../../components/dashboard/DashboardInnerTitle";
import TextInput from "../../components/ui/TextInput";
import TextInputWithEye from "../../components/ui/TextInputWithEye";
import SearchBoxTable from "../../components/ui/SearchBoxTable";
import DatatableExportBtn from "../../components/ui/DatatableExportBtn";
import DataTable from "react-data-table-component";
import { allOrderProductColumns, allOrderProductLists } from "../../constants/dummy/allOrderProductList";
import FilterDataSection from "../../components/dashboard/FilterDataSection";

const AllOrderProductList = () => {
  return (
    <>
      <div className="AllOrderProductList sectionGap">
          <FilterDataSection />

        <div className="sectionContainer">
          <DashboardInnerTitle name="All Delivered Order" />

          <div className="dataTable_header">
            <SearchBoxTable placeholderValue="Search List" />
            <DatatableExportBtn />
          </div>
          <div className="datatableMain">
            <DataTable
              columns={allOrderProductColumns.column} // dummy data
              data={allOrderProductLists.data}
              selectableRows
              pagination
              className="AllOrderProductList dataTable_main"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllOrderProductList;
