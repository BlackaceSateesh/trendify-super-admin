import React from "react";
import { Link, useLocation } from "react-router-dom";
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
import { AuthenticatedRoutes } from "../../constants/Routes";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideMenu } from "../../redux/slice/SideMenuSlice";
import { setUserInfo } from "../../redux/slice/UserInfoSlice";
import { AuthRoutes } from "../../constants/Routes";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const sideMenuState = useSelector((state) => state.SideMenuSlice);
  const UserInfo = useSelector((state) => state.UserInfoSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMenu = () => {
    dispatch(toggleSideMenu());
  };

  const logout = () => {
    dispatch(setUserInfo({
        token: "",
    }));

    localStorage.removeItem("token");

    navigate(AuthRoutes.login);
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
              className={`menuList ${location.pathname === AuthenticatedRoutes.dashboard ? "active" : ""}`}
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
                      <div className={`menuList accoHeader`}>
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
                            <Link to={opt.route} className={`menuList ${opt.route === location.pathname ? "active" : ""}`}>
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
                  <Link to={e.route} key={i} className="menuList otherList" onClick={() => {
                    if (i === 2) {
                      logout();
                    }
                  }}>
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
