import React from 'react'
import { RiEqualizerLine } from 'react-icons/ri'
import SelectInput from "./SelectInput";

const DatatableExportBtn = (props) => {
  return (
    <>
      <SelectInput
        options={props.filterOptions}
        value={props.filterValue}
        onChange={props.onFilterChange}
        defaultOption={props.filterValue}
      />
    </>
  )
}

export default DatatableExportBtn
