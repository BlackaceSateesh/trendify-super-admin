import React from "react";
import { AuthenticatedRoutes } from "../../constants/routes";
import { Route, Routes } from "react-router-dom";
import DashboardScreen from "../dashboardScreen/DashboardScreen";
import DashboardHome from "../dashboardHome/DashboardHome";
import PendingSalesApproval from "../sellerManagement/PendingSalesApproval";
import NotificationAndAlert from "../notificationAndAlert/NotificationAndAlert";
import CustomerReview from "../customerSupport/CustomerReview";
import VerifiedSalesApproval from "../sellerManagement/VerifiedSalesApproval";
import RejectSalesApproval from "../sellerManagement/RejectSalesApproval";
import SellerVerificationDetailPage from "../sellerManagement/SellerVerificationDetailPage";
import PendingApprovalProduct from "../productManagement/PendingApprovalProduct";
import ProductDetails from "../productManagement/ProductDetails";
import AddNewCategory from "../productManagement/AddNewCategory";
import EditAndAddProduct from "../productManagement/EditAndAddProduct";
import ChatSupport from "../customerSupport/ChatSupport";
import CustomerEnquiry from "../customerSupport/CustomerEnquiry";
import ResponseTicket from "../customerSupport/ResponseTicket";
import CreateTicket from "../customerSupport/CreateTicket";

const Authenticated = () => {
  return (
    <>
      <Routes>
        <Route path={AuthenticatedRoutes.dashboard} element={<DashboardScreen innerPage={<DashboardHome />}  pageName='Welcome to Super Admin Dashboard' pageTitle='Dashboard' parentName=''/>} />
        <Route path={AuthenticatedRoutes.verifiedSalesApproval} element={<DashboardScreen innerPage={<VerifiedSalesApproval />}  pageName='Approval Seller List' pageTitle='Seller Management' parentName='Seller Management'/>} />
        <Route path={AuthenticatedRoutes.pendingSalesApproval} element={<DashboardScreen innerPage={<PendingSalesApproval />}  pageName='Pending Approval Seller List' pageTitle='Seller Management' parentName='Seller Management'/>} />
        <Route path={AuthenticatedRoutes.rejectSalesApproval} element={<DashboardScreen innerPage={<RejectSalesApproval />}  pageName='Rejected Approval Seller List' pageTitle='Seller Management' parentName='Seller Management'/>} />
        <Route path={AuthenticatedRoutes.notificationAndAlert} element={<DashboardScreen innerPage={<NotificationAndAlert />}  pageName='Notification & Alert' pageTitle='Notification & Alert' parentName='Dashboard'/>} />
        <Route path={AuthenticatedRoutes.sellerVerificationDetailPage} element={<DashboardScreen innerPage={<SellerVerificationDetailPage />}  pageName='Seller Verification Detail' pageTitle='Seller Verification Detail' parentName='Dashboard'/>} />
        <Route path={AuthenticatedRoutes.customerReviews} element={<DashboardScreen innerPage={<CustomerReview />}  pageName='Customer Reviews' pageTitle='Customer Reviews' parentName='Dashboard'/>} />
        <Route path={AuthenticatedRoutes.pendingApprovalProduct} element={<DashboardScreen innerPage={<PendingApprovalProduct />}  pageName=' Pending Approval Product List' pageTitle='Product Management' parentName='Product Management'/>} />
        <Route path={AuthenticatedRoutes.productDetails} element={<DashboardScreen innerPage={<ProductDetails />}  pageName='Product Details' pageTitle='Product Management' parentName='Product Management'/>} />
        <Route path={AuthenticatedRoutes.addNewCategory} element={<DashboardScreen innerPage={<AddNewCategory />}  pageName='Add New Category' pageTitle='Add New Category' parentName='Product Management'/>} />
        <Route path={AuthenticatedRoutes.editAndAddProduct} element={<DashboardScreen innerPage={<EditAndAddProduct />}  pageName='Edit & Add Product' pageTitle='Edit & Add Product' parentName='Product Management'/>} />
        <Route path={AuthenticatedRoutes.chatSupport} element={<DashboardScreen innerPage={<ChatSupport />}  pageName='Chat Support' pageTitle='Chat Support' parentName='Chat Support'/>} />
        <Route path={AuthenticatedRoutes.customerEnquiry} element={<DashboardScreen innerPage={<CustomerEnquiry />}  pageName='Customer Inquiries' pageTitle='Customer Inquiries' parentName='Dashboard'/>} />
        <Route path={AuthenticatedRoutes.responseTicket} element={<DashboardScreen innerPage={<ResponseTicket />}  pageName='Response Ticket' pageTitle='Response Ticket' parentName='Dashboard'/>} />
        <Route path={AuthenticatedRoutes.createTicket} element={<DashboardScreen innerPage={<CreateTicket />}  pageName='Create Ticket' pageTitle='Create Ticket' parentName='Dashboard'/>} />
      </Routes>
    </>
  );
};

export default Authenticated;
