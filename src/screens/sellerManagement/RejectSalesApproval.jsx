import React, { useState, useEffect } from 'react'
import FilterDataSection from '../../components/dashboard/FilterDataSection'
import DashboardInnerTitle from '../../components/dashboard/DashboardInnerTitle'
import SearchBoxTable from '../../components/ui/SearchBoxTable'
import ListTable from '../../components/ui/ListTable'
import '../../styles/dashboard/PendingSalesApproval.css'
import SellerImage from '../../assests/dashboard/sellerImg.png'
import { fetchVendorsByStatus } from '../../utils/dataFetchers'
import { VendorStatus, DataColumnRejected as DataColumn } from '../../constants/contents/SellerContent'
import { useNavigate } from 'react-router-dom'
import { AuthenticatedRoutes } from '../../constants/routes'

const VerifiedSalesApproval = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const mapDataToRow = (data) => {
    return data.map((item) => {
      return {
        img: item?.aadhaarImageUrl || SellerImage,
        name: item?.vendorName || 'N/A',
        sellerId: item?.vendorId || 'N/A',
        category: item?.businessType || 'N/A',
        status: item?.vendorStatus || 'N/A',
        reason: item?.rejectReason || 'N/A',
        action: () => navigate(AuthenticatedRoutes.sellerVerificationDetailPage, { state: { seller: item } })
      }
    });
  }
 
  useEffect(() => {
    fetchVendorsByStatus(VendorStatus.REJECTED, page).then((res) => {
      setData(mapDataToRow(res.content));
    });
  }, [page]);

  return (
    <>
      <div className="PendingSalesApproval sectionGap">
        <FilterDataSection />

        <div className="PendingSalesApproval_inner sectionContainer">

          <div className="head">
            <DashboardInnerTitle name="Reviews List" />
          </div>
          <div className="inner_table">
            <SearchBoxTable placeholderValue='Search List' />
            <div className="tableBox">
              <ListTable dataColumn={DataColumn} dataRow={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VerifiedSalesApproval
