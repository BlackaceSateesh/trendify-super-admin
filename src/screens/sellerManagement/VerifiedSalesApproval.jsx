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
    return data.map((item) => {
      return {
        img: item?.aadhaarImageUrl || SellerImage,
        name: item?.vendorName || 'N/A',
        sellerId: item?.uniqueId || 'N/A',
        category: item?.businessType || 'N/A',
        status: item?.vendorStatus || 'N/A',
        action: () => navigate(AuthenticatedRoutes.sellerVerificationDetailPage, { state: { seller: item } })
      }
    });
  });

  const fetchSellerList = useCallback(async (page) => {
    setLoading(true);
    try {
      let riders = await fetchVendorsByStatus(VendorStatus.APPROVED, page, perPage);
      setRiderList(mapRiderList(riders?.content));
      setTotalRows(riders?.totalElements);
    } catch (error) {
      console.log(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  });
 
  useEffect(() => {
    fetchVendorsByStatus(VendorStatus.APPROVED, perPage).then((res) => {
      setSellerList([...sellerList, ...mapDataToRow(res.content)]);
      setTotalRows(res.totalPages);
    });
  }, [perPage]);

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
              <ListTable dataColumn={DataColumn} dataRow={sellerList} onBottomScroll={onBottomScroll} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VerifiedSalesApproval
