import React from 'react'
import DashboardInnerTitle from '../../components/dashboard/DashboardInnerTitle'
import SearchBoxTable from '../../components/ui/SearchBoxTable'
import DatatableExportBtn from '../../components/ui/DatatableExportBtn'
import DataTable from 'react-data-table-component'
import { deliveryStatusColumns, deliveryStatusColumnsAr } from '../../constants/dummy/DeliveryStatus'
import '../../styles/dashboard/OrderConfirmationList.css'
const OrderConfirmationList = () => {
  return (
    <>
      <div className="OrderConfirmationList sectionContainer">
      <div className="sectionContainer">
          <DashboardInnerTitle name="All Delivered Order" />

          <div className="dataTable_header">
            <SearchBoxTable placeholderValue="Search List" />
            <DatatableExportBtn />
          </div>
          <div className="datatableMain">
            <DataTable
              columns={deliveryStatusColumns.column} // dummy data
              data={deliveryStatusColumnsAr.data}
              selectableRows
              pagination
              className="AllOrderProductList dataTable_main"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderConfirmationList
