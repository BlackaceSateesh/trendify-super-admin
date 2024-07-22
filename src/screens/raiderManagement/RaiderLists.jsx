import React, { useState, useCallback, useMemo, useEffect } from "react";
import DashboardInnerTitle from "../../components/dashboard/DashboardInnerTitle";
import SearchBoxTable from "../../components/ui/SearchBoxTable";
import DatatableExportBtn from "../../components/ui/DatatableExportBtn";
import DataTable from "react-data-table-component";
import { RiderColumns } from "../../constants/dummy/riderList";
import FilterDataSection from "../../components/dashboard/FilterDataSection";
import { fetchAllRidersByStatus } from "../../utils/dataFetchers";
import { RiderStatus } from "../../constants/dummy/riderList";
import SpinnerLoader from "../../components/ui/SpinnerLoader";
import { useNavigate } from "react-router-dom";
import { AuthenticatedRoutes } from "../../constants/Routes";

let lastTab = RiderStatus.APPROVED;

const AllOrderProductList = () => {
  const navigate = useNavigate();

  const [currentTab, setCurrentTab] = useState(RiderStatus.APPROVED);
  const [riderList, setRiderList] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [loading, setLoading] = useState(false);

  const mapRiderList = useCallback((riderList) => {
    return riderList?.map((rider, index) => ({
      id: index + 1,
      userPhotoUrl: rider?.userPhotoUrl,
      name: rider?.name || "N/A",
      phoneNumber: rider?.phoneNumber || "N/A",
      verificationId: rider?.verificationId || "N/A",
      state: rider?.state || "N/A",
      city: rider?.city || "N/A",
      action: [
        () => navigate(AuthenticatedRoutes.raiderVerification, { state: { rider, tab: lastTab } })
      ]
    }));
  });

  const fetchRiderList = useCallback(async (page) => {
    setLoading(true);
    try {
      let riders = await fetchAllRidersByStatus(currentTab, page, perPage);
      setRiderList(mapRiderList(riders?.content));
      setTotalRows(riders?.totalElements);
    } catch (error) {
      console.log(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  });

  const memoizedRiderList = useMemo(() => riderList, [riderList]);

  const handlePageChange = useCallback((page) => {
    fetchRiderList(page);
  }, [fetchRiderList]);

  const handlePerRowsChange = useCallback((newPerPage, page) => {
    setPerPage(newPerPage);
    fetchRiderList(page);
  }, [fetchRiderList]);

  const handleTabChange = (e) => {
    if (e.target.value === currentTab) return;
    setCurrentTab(e.target.value);
    lastTab = e.target.value;
  }

  useEffect(() => {
    fetchRiderList(1);
  }, [currentTab]);

  return (
    <>
      <div className="AllOrderProductList sectionGap">
        {/* <FilterDataSection /> */}

        <div className="sectionContainer">
          <DashboardInnerTitle name="All Delivered Order" />

          <div className="dataTable_header">
            <SearchBoxTable placeholderValue="Search List" />
            <DatatableExportBtn
              filterOptions={Object.values(RiderStatus)}
              filterValue={currentTab}
              onFilterChange={handleTabChange}
            />
          </div>
          <div className="datatableMain">
            <DataTable
              columns={RiderColumns}
              data={memoizedRiderList}
              progressPending={loading}
              progressComponent={<SpinnerLoader />}
              selectableRows
              pagination
              paginationServer
              paginationTotalRows={totalRows}
              onChangeRowsPerPage={handlePerRowsChange}
              onChangePage={handlePageChange}
              className="AllOrderProductList dataTable_main"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllOrderProductList;
