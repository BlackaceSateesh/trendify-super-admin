import React from "react";
import TotalGraphCard from "../../components/dashboard/TotalGraphCard";
import "../../styles/dashboardHome/DashboardHome.css";
import MultipleAxesGraph from "../../components/ui/MultipleAxesGraph";
import TopTotalTableCard from "../../components/dashboard/TopTotalTableCard";
import NotificationCard from "../../components/ui/NotificationCard";
import { notificationContent } from "../../constants/contents/dashboardContent";
import { Link } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import CustomerReviewCard from "../../components/ui/CustomerReviewCard";
import userLogo from '../../assests/dashboard/userlogo.png';

const DashboardHome = () => {
  return (
    <>
      <div className="DashboardHome sectionInner">
        <div className="total_graph">
          <TotalGraphCard
            name="Total Seller"
            number="10,000"
            status="50 New Seller Approval Pending"
          />
          <TotalGraphCard
            name="Total Product"
            number="99,999"
            status="Recently 10 Orders Added"
          />
          <TotalGraphCard
            name="Total Sales"
            number="₹25,00,000/-"
            status="Today Sale ₹65,023/-"
          />
          <TotalGraphCard
            name="Total Order"
            number="89,423"
            status="Today Confirm Orders 2365"
          />
        </div>

        <div className="profileGraph homeCardBox">
          <div className="head">
            <p className="homeCardHeading">Profile Overview</p>
            <select name="" id="" className="homeSelect">
              <option value="today">Today</option>
            </select>
          </div>
          <h6 className="homeBigNumber">
            ₹52,000
            <span>
              (Total Profit Per Day / Week / Month / Year / 2 Years /All)
            </span>
          </h6>
          <p className="homeStatus">
            Today Profit <span className="highlight">₹10,000/- </span>
          </p>
          <div className="graphBox">
            <MultipleAxesGraph />
          </div>
        </div>

        <div className="top_details">
          <TopTotalTableCard />
          <TopTotalTableCard />
          <TopTotalTableCard />
          <TopTotalTableCard />
        </div>

        <div className="notification homeCardBox">
          <div className="head">
            <p className="homeCardHeading">Notification & Alert</p>
            <select name="" id="" className="homeSelect">
              <option value="today">All</option>
            </select>
          </div>
          <div className="notification_cards">
            {notificationContent.map((e, i) => {
              return (
                <>
                  <NotificationCard
                    icon={e.icon}
                    tag={e.tag}
                    text={e.text}
                    time={e.time}
                    key={i}
                    status={e.status}
                  />
                </>
              );
            })}
          </div>
          <div className="seeMoreBTNS">
            <Link className="seeAllBtn">
              See all Notification & Alert <MdChevronRight />
            </Link>
          </div>
        </div>

        {/* customer review */}
        <div className="customer_reviews homeCardBox">
          <div className="head">
            <p className="homeCardHeading">Customer Reviews</p>
            <div className="btns">
                <button className="sliderBTN"><FaChevronLeft /></button>
                <button className="sliderBTN"><FaChevronRight /></button>
            </div>
          </div>
          <div className="customer_reviews_cards">
            <CustomerReviewCard name='Rajat Pradhan' pic={userLogo} time='2 min ago' text='Ab architecto provident ex accusantium deserunt. Aut aspernatur deleniti sit maiores ut id cum accusamus. Beatae n' />
            <CustomerReviewCard name='Vimal Pandey' pic={userLogo} time='2 min ago' text='Ab architecto provident ex accusantium deserunt. Aut aspernatur deleniti sit maiores ut id cum accusamus. Beatae n' />
            <CustomerReviewCard name='Vivek Pandey' pic={userLogo} time='2 min ago' text='Ab architecto provident ex accusantium deserunt. Aut aspernatur deleniti sit maiores ut id cum accusamus. Beatae n' />
            <CustomerReviewCard name='Syam Seeli' pic={userLogo} time='2 min ago' text='Ab architecto provident ex accusantium deserunt. Aut aspernatur deleniti sit maiores ut id cum accusamus. Beatae n' />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
