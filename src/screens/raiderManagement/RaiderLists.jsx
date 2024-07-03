import React from 'react'
import DataTable from 'react-data-table-component';
import { raiderColumns, raiderList } from '../../constants/dummy/raiderListContent';

const RaiderLists = () => {
  return (
    <>
      <div className="RaiderLists sectionContainer">
        <div className="list">
        <DataTable
            columns={raiderColumns.column} // dummy data
            data={raiderList.data}
            selectableRows
            pagination
            className="raiderListTable dataTable_main"
          />
        </div>
      </div>
    </>
  )
}

export default RaiderLists;
