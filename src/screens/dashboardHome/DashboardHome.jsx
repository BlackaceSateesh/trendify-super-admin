import React, { useState, useEffect } from "react";
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
import { getTotalSalesByDate, getTotalReturnsByDate } from "../../api/sales-api";
import { getTopVendors, getTopOrders, getTopProducts } from "../../api/over-all-api";
import { getAllReviews } from "../../api/reviews-api";

const AnanlyticsType = {
  VENDORS: "VENDORS",
  PRODUCTS: "PRODUCTS",
  ORDERS: "ORDERS",
};

const DashboardHome = () => {
  const [totalSales, setTotalSales] = useState({
    totalSalesAmount: 0,
    totalOrderDone: 0,
  });

  const [totalReturns, setTotalReturns] = useState({
    totalReturnAmount: 0,
    totalReturnDone: 0,
  });

  const [topVendors, setTopVendors] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [topOrders, setTopOrders] = useState([]);
  const [reviews, setReviews] = useState([]);

  const mapContent = (content, type) => {
    return content.map((e) => {
      switch (type) {
        case AnanlyticsType.VENDORS:
          return {
            name: e.vendorName,
            id: e.vendorUniqueId,
            amount: e.totalOrders
          };
        case AnanlyticsType.PRODUCTS:
          return {
            name: e.productName,
            typeName: e.productTypeName,
            amount: e.totalOrders
          };
        case AnanlyticsType.ORDERS:
          return {
            name: e.productName,
            id: e.orderId,
            typeName: e.productTypeName,
            amount: e.totalOrders
          };
      }
    });
  }

  useEffect(() => {
    const payload = {
      startDate:  new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      endDate: new Date().toISOString(),
    };

    getTotalSalesByDate(payload).then((data) => {
      setTotalSales({
        totalSalesAmount: data.totalSalesAmount,
        totalOrderDone: data.totalOrderDone,
      });
    });

    getTotalReturnsByDate(payload).then((data) => {
      setTotalReturns({
        totalReturnAmount: data.totalReturnAmount,
        totalReturnDone: data.totalReturnDone,
      });
    });

    getTopVendors().then((data) => {
      setTopVendors(mapContent(data, AnanlyticsType.VENDORS));
    });

    getTopProducts().then((data) => {
      setTopProducts(mapContent(data, AnanlyticsType.PRODUCTS));
    });

    getTopOrders().then((data) => {
      setTopOrders(mapContent(data, AnanlyticsType.ORDERS));
    });

    getAllReviews().then((data) => {
      setReviews(data);
    });
  }, []);

  return (
    <>
      <div className="DashboardHome sectionInner">
        <div className="total_graph">
          <TotalGraphCard
            name="Total Sales"
            number={totalSales.totalSalesAmount}
            status="Today Sale ₹65,023/-"
          />
          <TotalGraphCard
            name="Total Orders"
            number={totalSales.totalOrderDone}
            status="Today Confirm Orders 2365"
          />
          <TotalGraphCard
            name="Total Returns"
            number={totalReturns.totalReturnAmount}
            status="50 New Seller Approval Pending"
          />
          <TotalGraphCard
            name="Total Refunds"
            number={totalReturns.totalReturnDone}
            status="Recently 10 Orders Added"
          />
        </div>

        {/* <div className="profileGraph homeCardBox">
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
        </div> */}

        <div className="top_details">
          <TopTotalTableCard data={topVendors} coulmns={['S.No', 'Vendor Name', 'Total Orders']} heading='Top Vendors' />
          <TopTotalTableCard data={topProducts} coulmns={['S.No', 'Product Name', 'Product Type', 'Total Orders']} heading='Top Products' />
          <TopTotalTableCard data={topOrders} coulmns={['S.No', 'Product Name', 'Product Type', 'Total Orders']} heading='Top Orders' />
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
            {/* <div className="btns">
                <button className="sliderBTN"><FaChevronLeft /></button>
                <button className="sliderBTN"><FaChevronRight /></button>
            </div> */}
          </div>
          <div className="customer_reviews_cards">
            {
              reviews.length <= 0 ? <p style={{ fontSize: "1.4rem", fontWeight: 400 }}>No Reviews Found</p> : reviews.map((e, i) => {
                return (
                  <CustomerReviewCard 
                    name={e?.userName} 
                    pic={e?.imagesUrlList?.[0]} 
                    userId={e?.userId}
                    productId={e?.productId}
                    star={e?.rating}
                    text={e?.review}
                    key={i}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
