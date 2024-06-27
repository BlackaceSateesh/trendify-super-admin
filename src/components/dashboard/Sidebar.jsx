import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/sidebar/sidebar.css";
import { BsPieChart } from "react-icons/bs";
import { MainContent } from "../../constants/contents/mainContent";
import { FiChevronsLeft } from "react-icons/fi";
import userPic from "../../assests/dashboard/userPic.png";
import { Accordion } from "react-bootstrap";
import { SlGrid } from "react-icons/sl";

import {
  sideMenuListManage,
  sideMenuListOther,
} from "../../constants/contents/sidebarContent";
import { AuthenticatedRoutes } from "../../constants/routes";
const Sidebar = () => {
  const [isCollapse, setCollapse] = useState(false);
  const ToggleClass = () => {
    setCollapse(!isCollapse);
    showContent();
  };

  const showContent = () => {
    // content screen
    if (!isCollapse) {
      document.getElementById("contentScreen").classList.add("full");
    }else{
      document.getElementById("contentScreen").classList.remove("full");
    }
  };

  return (
    <>
      <div className={`Sidebar ${isCollapse ? "collapseMenu" : "showMenu"}`}>
        <div className="Sidebar_inner">
          <div className="head">
            <div className="logoName">
              <div className="logo">
                <img src={MainContent.appLogo} alt="" />
              </div>
              <h6 className="name">{MainContent.appName}</h6>
            </div>
            <button onClick={() => ToggleClass()} className="closeBtn">
              <FiChevronsLeft />
            </button>
          </div>
          <div className="user">
            <div className="pic">
              <img src={userPic} alt="" />
            </div>
            <div className="txt">
              <h6>Rajatpradhan@trendify.in</h6>
              <p>Super Admin</p>
            </div>
          </div>

          {/* manage */}
          <div className="menuLists">
            <h5 className="typeName">manage</h5>
            <Link to={AuthenticatedRoutes.dashboard} className="menuList active">
              <div className="icon">
              <SlGrid />
              </div>
              <span className="text">Dashboard</span>
            </Link>

            <Accordion flush className="sidebarAccordion">
              {sideMenuListManage?.map((e, i) => {
                return (
                  <>
                    <Accordion.Item eventKey={i} key={i}>
                      <Accordion.Header>
                        <div className="menuList accoHeader">
                          <div className="icon">
                            {e.icon? e.icon : <BsPieChart /> }
                          </div>
                          <span className="text">{e.title}</span>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          {e.option?.map((e, i) => {
                            return (
                              <>
                                <li>
                                  <Link to={e.route} className="menuList">
                                    <div className="icon">
                                      <BsPieChart />
                                    </div>
                                    <span className="text">{e.name}</span>
                                  </Link>
                                </li>
                              </>
                            );
                          })}
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </>
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
