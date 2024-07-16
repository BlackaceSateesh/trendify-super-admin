import React from "react";
import { Link } from "react-router-dom";
import "../../styles/sidebar/sidebar.css";
import { MainContent } from "../../constants/contents/mainContent";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import userPic from "../../assests/dashboard/userPic.png";
import { Accordion } from "react-bootstrap";
import { SlGrid } from "react-icons/sl";
import { RiArrowRightSLine } from "react-icons/ri";
import {
  sideMenuListManage,
  sideMenuListOther,
} from "../../constants/contents/sidebarContent";
import { AuthenticatedRoutes } from "../../constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideMenu } from "../../redux/slice/SideMenuSlice";



const Sidebar = () => {
  const sideMenuState = useSelector((state) => state.SideMenuSlice);
  const UserInfo = useSelector((state) => state.UserInfoSlice);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    dispatch(toggleSideMenu());
  };

  return (
    <>
      <div
        id="dashboardSidemenu"
        className={`Sidebar ${
          sideMenuState.open ? "collapseMenu" : "showMenu"
        }`}
      >
        <div className="Sidebar_inner">
          <div className="head">
            <div className="logoName">
              <div className="logo">
                <img src={MainContent.appLogo} alt="" />
              </div>
              <h6 className="name">{MainContent.appName}</h6>
            </div>
            <button onClick={() => toggleMenu()} className="closeBtn">
              {sideMenuState.open ? <FiChevronsRight /> : <FiChevronsLeft /> }
            </button>
           
          </div>
          <div className="user">
            <div className="pic">
              <img src={userPic} alt="" />
            </div>
            <div className="txt">
              <h6>{UserInfo?.email}</h6>
              <p>Super Admin</p>
            </div>
          </div>

          {/* manage */}
          <div className="menuLists">
            <h5 className="typeName">manage</h5>
            <Link
              to={AuthenticatedRoutes.dashboard}
              className="menuList active"
            >
              <div className="icon">
                <SlGrid />
              </div>
              <span className="text">Dashboard</span>
            </Link>

            <Accordion flush className="sidebarAccordion">
              {sideMenuListManage?.map((e, i) => {
                return (
                  <Accordion.Item eventKey={i} key={`item-${i}`}>
                    <Accordion.Header key={`header-${i}`}>
                      <div className="menuList accoHeader">
                        <div className="icon">
                          {e.icon ? e.icon : <RiArrowRightSLine />}
                        </div>
                        <span className="text">{e.title}</span>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body key={`body-${i}`}>
                      <ul>
                        {e.option?.map((opt, j) => (
                          <li key={`option-${j}`}>
                            <Link to={opt.route} className="menuList">
                              <div className="icon">
                                <RiArrowRightSLine />
                              </div>
                              <span className="text">{opt.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </div>

          {/* others */}
          <div className="menuLists">
            <h5 className="typeName">others</h5>

            {sideMenuListOther.map((e, i) => {
              return (
                <>
                  <Link to={e.route} key={i} className="menuList otherList">
                    <div className="icon">{e.icon}</div>
                    <span className="text">{e.name}</span>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
