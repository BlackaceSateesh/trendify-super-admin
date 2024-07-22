import React, { useState, useCallback, useMemo, useEffect } from 'react'
import FilterDataSection from '../../components/dashboard/FilterDataSection'
import DashboardInnerTitle from '../../components/dashboard/DashboardInnerTitle'
import SearchBoxTable from '../../components/ui/SearchBoxTable'
import ListTable from '../../components/ui/ListTable'
import DataTable from 'react-data-table-component'
import '../../styles/dashboard/PendingSalesApproval.css'
import SellerImage from '../../assests/dashboard/sellerImg.png'
import { fetchVendorsByStatus } from '../../utils/dataFetchers'
import { VendorStatus, DataColumnApproved as DataColumn } from '../../constants/contents/SellerContent'
import { useNavigate } from 'react-router-dom'
import { AuthenticatedRoutes } from '../../constants/Routes'
import SpinnerLoader from '../../components/ui/SpinnerLoader'

const VerifiedSalesApproval = () => {
  const navigate = useNavigate();

  const [perPage, setPerPage] = useState(10);
  const [totalRows, setTotalRows] = useState(0);
  const [sellerList, setSellerList] = useState([]);
  const [loading, setLoading] = useState(false);

  const mapDataToRow = useCallback((data) => {
    return data.map((item, index) => {
      return {
        id: index + 1,
        img: item?.aadhaarImageUrl || SellerImage,
        name: item?.vendorName || 'N/A',
        sellerId: item?.uniqueId || 'N/A',
        category: item?.businessType || 'N/A',
        status: item?.vendorStatus || 'N/A',
        reason: item?.rejectReason || 'N/A',
        action: () => navigate(AuthenticatedRoutes.sellerVerificationDetailPage, { state: { seller: item } })
      }
    });
  });

  const fetchSellerList = useCallback(async (page) => {
    setLoading(true);
    try {
      let sellers = await fetchVendorsByStatus(VendorStatus.REJECTED, page, perPage);
      setSellerList(mapDataToRow(sellers?.content));
      setTotalRows(sellers?.totalElements);
    } catch (error) {
      console.log(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  });

  const memoizedSellerList = useMemo(() => sellerList, [sellerList]);

  const handlePageChange = useCallback((page) => {
    fetchSellerList(page);
  }, [fetchSellerList]);

  const handlePerRowsChange = useCallback((newPerPage, page) => {
    setPerPage(newPerPage);
    fetchSellerList(page);
  }, [fetchSellerList]);

  useEffect(() => {
    fetchSellerList(1);
  }, []);

  return (
    <>
      <div className="PendingSalesApproval sectionGap">
        {/* <FilterDataSection /> */}

        <div className="PendingSalesApproval_inner sectionContainer">

          <div className="head">
            <DashboardInnerTitle name="Reviews List" />
          </div>
          <div className="inner_table">
            <SearchBoxTable placeholderValue='Search List' />
            <div className="tableBox">
              <DataTable
                columns={DataColumn}
                data={memoizedSellerList}
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
      </div>
    </>
  )
}

export default VerifiedSalesApproval
