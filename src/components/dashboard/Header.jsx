import React, { useState } from 'react'
import Breadcrumbs from '../ui/Breadcrumbs';
import '../../styles/dashboard/Header.css';
import SearchHeader from '../ui/SearchHeader';
import { HiMenu } from "react-icons/hi";
import { useDispatch } from 'react-redux';
import { toggleSideMenu } from '../../redux/slice/SideMenuSlice';

const Header = ({parentName, pageName, pageTitle}) => {

  // const sideMenuState = useSelector((state) => state.SideMenuSlice);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    dispatch(toggleSideMenu());
  };

  return (
    <>
      <div className="Header">
        <div className="name">
          <button onClick={()=> toggleMenu()} className='moSideToggleBtn' id='moSideToggleBtn'><HiMenu /></button>
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
