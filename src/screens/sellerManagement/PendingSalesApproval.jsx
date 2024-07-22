import React, { useState, useEffect } from 'react'
import FilterDataSection from '../../components/dashboard/FilterDataSection'
import DashboardInnerTitle from '../../components/dashboard/DashboardInnerTitle'
import SearchBoxTable from '../../components/ui/SearchBoxTable'
import ListTable from '../../components/ui/ListTable'
import '../../styles/dashboard/PendingSalesApproval.css'
import SellerImage from '../../assests/dashboard/sellerImg.png'
import { fetchVendorsByStatus } from '../../utils/dataFetchers'
import { VendorStatus, DataColumnApproved as DataColumn } from '../../constants/contents/SellerContent'
import { useNavigate } from 'react-router-dom'
import { AuthenticatedRoutes } from '../../constants/Routes'

const VerifiedSalesApproval = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [data, setData] = useState([]);

  const mapDataToRow = (data) => {
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
  }

  const onBottomScroll = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }
 
  useEffect(() => {
    fetchVendorsByStatus(VendorStatus.REQUESTED, page).then((res) => {
      setData([...data, ...mapDataToRow(res.content)]);
      setTotalPages(res.totalPages);
    });
  }, [page]);

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
              <ListTable dataColumn={DataColumn} dataRow={data} onBottomScroll={onBottomScroll} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VerifiedSalesApproval
