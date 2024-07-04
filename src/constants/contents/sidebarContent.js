import { IoNotificationsOutline } from "react-icons/io5";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import { AuthenticatedRoutes } from "../routes";
import { BsShop } from "react-icons/bs";
import { LiaBoxOpenSolid } from "react-icons/lia";
import { AiOutlineLineChart } from "react-icons/ai";
import { MdSupportAgent } from "react-icons/md";
import { MdOutlineManageAccounts } from "react-icons/md";
import { MdManageHistory } from "react-icons/md";
import { RiFeedbackLine } from "react-icons/ri";
import { TbPhotoCog } from "react-icons/tb";
import { RiEBikeLine } from "react-icons/ri";


export const sideMenuListManage = [
  {
    title: "Seller Management",
    icon: <BsShop />,
    option: [
      {
        name: "Verified Approval Seller List",
        route: AuthenticatedRoutes.verifiedSalesApproval,
      },
      {
        name: "Pending Approval Seller List",
        route: AuthenticatedRoutes.pendingSalesApproval,
      },
      {
        name: "Rejected Approval Seller List",
        route: AuthenticatedRoutes.rejectSalesApproval,
      },
      {
        name: "Seller Verification Detail Page",
        route: AuthenticatedRoutes.sellerVerificationDetailPage,
      },
    ],
  },
  {
    title: " Product Management",
    icon: <LiaBoxOpenSolid />,
    option: [{
      name: " Pending Approval Product",
      route: AuthenticatedRoutes.pendingApprovalProduct,
    },
    {
      name: " Product Details",
      route: AuthenticatedRoutes.productDetails,
    },
    {
      name: " Add New Category",
      route: AuthenticatedRoutes.addNewCategory,
    },
    {
      name: "Edit & Add Product",
      route: AuthenticatedRoutes.editAndAddProduct,
    },
  ],
  },
  {
    title: " Order Management",
    icon: <LiaBoxOpenSolid />,
    option: [
      {
        name: "All Order Products",
        route: AuthenticatedRoutes.allOrderProductList,
      },
      {
        name: "Order Details",
        route: AuthenticatedRoutes.orderDetails,
      },
    ],
  },
  
  // {
  //   title: " Analytics and Reports",
  //   icon: <AiOutlineLineChart />,
  //   option: [{ name: "option1" }],
  // },
  // {
  //   title: " Communication",
  //   icon: <MdSupportAgent />,
  //   option: [{ name: "option1" }],
  // },
  {
    title: " Profile Management",
    icon: <MdOutlineManageAccounts />,
    option: [
      
    ],
  },
  {
    title: " Platform Management",
    icon: <MdManageHistory />,
    option: [
      {
        name: "Add & Manage FAQs",
        route: AuthenticatedRoutes.addAndManageFaqs,
      },
      {
        name: "Platform Terms & Conditions",
        route: AuthenticatedRoutes.plateformTermAndCondition,
      },
      {
        name: "Manage Commission Rate & Platform Charges",
        route: AuthenticatedRoutes.manageCommissionRate,
      },
    ],
  },
  {
    title: "Banner Management",
    icon: <TbPhotoCog />,
    option: [
      {
        name: "Banner Management List",
        route: AuthenticatedRoutes.BannerManagementList,
      },
      {
        name: "Banner Setting",
        route: AuthenticatedRoutes.bannerSetting,
      },
    ],
  },
  {
    title: "Raider Management",
    icon: <RiEBikeLine />,
    option: [
      {
        name: "Raider Verification",
        route: AuthenticatedRoutes.raiderVerification,
      },
      {
        name: "Raider Lists",
        route: AuthenticatedRoutes.raiderLists,
      },
      {
        name: "Raider Details",
        route: AuthenticatedRoutes.raiderDetails,
      },

    ],
  },
  {
    title: " Support and Feedback",
    icon: <RiFeedbackLine />,
    option: [
      {
        name: "Customer Reviews",
        route: AuthenticatedRoutes.customerReviews,
      },
      {
        name: "Chat Support",
        route: AuthenticatedRoutes.chatSupport,
      },
      {
        name: "Customer Enquiry",
        route: AuthenticatedRoutes.customerEnquiry,
      },
      {
        name: "Create Ticket",
        route: AuthenticatedRoutes.createTicket,
      },
    ],
  },
];

export const sideMenuListOther = [
  {
    name: "Notification",
    icon: <IoNotificationsOutline />,
    route: AuthenticatedRoutes.notificationAndAlert,
  },
  {
    name: "Message",
    icon: <BiMessageSquareDetail />,
  },
  {
    name: "Logout",
    icon: <BiLogOut />,
  },
];
