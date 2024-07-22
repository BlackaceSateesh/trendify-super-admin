import React, { useState, useCallback, useMemo, useEffect } from "react";
import DashboardInnerTitle from "../../components/dashboard/DashboardInnerTitle";
import SearchBoxTable from "../../components/ui/SearchBoxTable";
import DatatableExportBtn from "../../components/ui/DatatableExportBtn";
import DataTable from "react-data-table-component";
import { allOrderProductColumns } from "../../constants/dummy/allOrderProductList";
import FilterDataSection from "../../components/dashboard/FilterDataSection";
import { fetchAllOrdersByStatus } from "../../utils/dataFetchers";
import { OrderStatus } from "../../constants/dummy/allOrderProductList";
import SpinnerLoader from "../../components/ui/SpinnerLoader";
import { useNavigate } from "react-router-dom";
import { AuthenticatedRoutes } from "../../constants/Routes";

const AllOrderProductList = () => {
  const navigate = useNavigate();

  const [currentTab, setCurrentTab] = useState(OrderStatus.ORDER_PLACED);
  const [orderList, setOrderList] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [loading, setLoading] = useState(false);

  const getKeyByValue = (value) => {
    return Object.keys(OrderStatus).find(key => OrderStatus[key] === value);
  };

  const mapOrderList = useCallback((orderList) => {
    return orderList?.map((order, index) => ({
      id: index + 1,
      productImg: order?.productRes?.imageUrlList[0],
      productType: order?.productRes?.productTypeName || "N/A",
      brand: order?.productRes?.brandName || "N/A",
      productName: order?.productRes?.title || "N/A",
      productID: order?.orderCode || "N/A",
      quantity: order?.quantity || "N/A",
      paymentStatus: order?.paymentStatus || "N/A",
      paymentType: order?.paymentType || "N/A",
      price: order?.price || "N/A",
      orderStatus: order?.orderStatus || "N/A",
      action: [
        () => navigate(AuthenticatedRoutes.orderDetails, { state: { order } }),
      ]
    }));
  });

  const fetchOrderList = useCallback(async (page) => {
    setLoading(true);
    try {
      let orders = await fetchAllOrdersByStatus(getKeyByValue(currentTab), page, perPage);
      setOrderList(mapOrderList(orders?.content));
      setTotalRows(orders?.totalElements);
    } catch (error) {
      console.log(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  });

  const memoizedOrderList = useMemo(() => orderList, [orderList]);

  const handlePageChange = useCallback((page) => {
    fetchOrderList(page);
  }, [fetchOrderList]);

  const handlePerRowsChange = useCallback((newPerPage, page) => {
    setPerPage(newPerPage);
    fetchOrderList(page);
  }, [fetchOrderList]);

  const handleTabChange = (e) => {
    if (e.target.value === currentTab) return;
    setCurrentTab(e.target.value);
  }

  useEffect(() => {
    fetchOrderList(1);
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
              filterOptions={Object.values(OrderStatus)}
              filterValue={currentTab}
              onFilterChange={handleTabChange}
            />
          </div>
          <div className="datatableMain">
            <DataTable
              columns={allOrderProductColumns.column} // dummy data
              data={memoizedOrderList}
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
