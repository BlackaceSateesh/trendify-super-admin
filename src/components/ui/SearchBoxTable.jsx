import React from 'react';
import { CiSearch } from "react-icons/ci";



const SearchBoxTable = ({placeholderValue}) => {
  return (
    <>
    <div className="SearchBoxTable">
        <input type="text" id='search' placeholder={placeholderValue}/>
        <label htmlFor="search" ><CiSearch /></label>
    </div>
      
    </>
  )
}

export default SearchBoxTable;
