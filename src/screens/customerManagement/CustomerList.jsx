import React from 'react'
import DataTable from 'react-data-table-component'
import { customerColumns, customerList } from '../../constants/dummy/customerList'

const CustomerList = () => {
  return (
    <>
       <div className="CustomerList sectionContainer">
        <div className="list">
        <DataTable
            columns={customerColumns.column} // dummy data
            data={customerList.data}
            selectableRows
            pagination
            className="CustomerListTable dataTable_main"
          />
        </div>
      </div>
    </>
  )
}

export default CustomerList
