import React from 'react'
import Breadcrumbs from '../ui/Breadcrumbs';
import '../../styles/dashboard/Header.css';
import SearchHeader from '../ui/SearchHeader';
const Header = ({parentName, pageName, pageTitle}) => {
  return (
    <>
      <div className="Header">
        <div className="name">
            <h1 className='pageHeading'>{pageTitle}</h1>
            <Breadcrumbs pageName={pageName} parentName={parentName} />
        </div>
        <div className="search">
            <SearchHeader />
        </div>
      </div>
    </>
  )
}

export default Header;
