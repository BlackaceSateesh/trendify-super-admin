export const AuthRoutes = {
  login: "/",
};
export const AuthenticatedRoutes = {
  dashboard: "/",
  verifiedSalesApproval: "/verifiedSalesApproval",
  pendingSalesApproval: "/pendingSalesApproval",
  rejectSalesApproval: "/rejectSalesApproval",
  notificationAndAlert: "/notificationAndAlert",
  sellerVerificationDetailPage: "/sellerVerificationDetailPage",
  customerReviews: "/customerReviews",
  pendingApprovalProduct: "/pendingApprovalProduct",
  productDetails: "/productDetails",
  addNewCategory: "/addNewCategory",
  addNewType: "/addNewType",
  addNewBrand: "/addNewBrand",
  addNewProduct: "/addNewProduct",
  chatSupport: "/chatSupport",
  customerEnquiry: "/customerEnquiry",
  responseTicket: "/responseTicket",
  createTicket: "/createTicket",

  addAndManageFaqs: "/addAndManageFaqs",
  plateformTermAndCondition: "/plateformTermAndCondition",
  BannerManagementList: "/BannerManagementList",
  bannerSetting: "/bannerSetting",
  bannerSettingEdit: "/bannerSettingAdd",
  viewSingleBanner: "/viewSingleBanner",
  raiderVerification: "/raiderVerification",
  raiderLists: "/raiderLists",
  raiderDetails: "/raiderDetails",
  allOrderProductList: "/allOrderProductList",
  orderDetails: "/orderDetails",
  manageCommissionRate: "/manageCommissionRate",

  userProfile: "/userProfile",
  allFaqs: "/allFaqs",
  applicationFeedback: "/applicationFeedback",
  sellerProfile: "/sellerProfile",
  orderConfirmationList: "/orderConfirmationList",
  orderConfirmationDetails: "/orderConfirmationDetails",
  deliveryOption: "/deliveryOption",
  createCustomer: "/createCustomer",
  customerList: "/customerList",
};

export const SearchRoutes = [
  {
    id: AuthenticatedRoutes.verifiedSalesApproval,
    title: "Verified Seller List",
  },
  {
    id: AuthenticatedRoutes.pendingSalesApproval,
    title: "Pending Seller List",
  },
  {
    id: AuthenticatedRoutes.rejectSalesApproval,
    title: "Rejected Seller List",
  }
]
