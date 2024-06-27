import React from "react";
import { AuthenticatedRoutes } from "../../constants/routes";
import { Route, Routes } from "react-router-dom";
import DashboardScreen from "../dashboardScreen/DashboardScreen";
import DashboardHome from "../dashboardHome/DashboardHome";
import PendingSalesApproval from "../salesAnalytics/PendingSalesApproval";
import NotificationAndAlert from "../notificationAndAlert/NotificationAndAlert";
import CustomerReview from "../customerSupport/CustomerReview";
import VerifiedSalesApproval from "../salesAnalytics/VerifiedSalesApproval";
import RejectSalesApproval from "../salesAnalytics/RejectSalesApproval";

const Authenticated = () => {
  return (
    <>
      <Routes>
        <Route path={AuthenticatedRoutes.dashboard} element={<DashboardScreen innerPage={<DashboardHome />}  pageName='Welcome to Super Admin Dashboard' pageTitle='Dashboard' parentName=''/>} />
        <Route path={AuthenticatedRoutes.verifiedSalesApproval} element={<DashboardScreen innerPage={<VerifiedSalesApproval />}  pageName='Approval Seller List' pageTitle='Seller Management' parentName='Seller Management'/>} />
        <Route path={AuthenticatedRoutes.pendingSalesApproval} element={<DashboardScreen innerPage={<PendingSalesApproval />}  pageName='Pending Approval Seller List' pageTitle='Seller Management' parentName='Seller Management'/>} />
        <Route path={AuthenticatedRoutes.rejectSalesApproval} element={<DashboardScreen innerPage={<RejectSalesApproval />}  pageName='Rejected Approval Seller List' pageTitle='Seller Management' parentName='Seller Management'/>} />
        <Route path={AuthenticatedRoutes.notificationAndAlert} element={<DashboardScreen innerPage={<NotificationAndAlert />}  pageName='Notification & Alert' pageTitle='Notification & Alert' parentName='Dashboard'/>} />
        <Route path={AuthenticatedRoutes.customerReviews} element={<DashboardScreen innerPage={<CustomerReview />}  pageName='Customer Reviews' pageTitle='Customer Reviews' parentName='Dashboard'/>} />
      </Routes>
    </>
  );
};

export default Authenticated;
