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
    ],
  },
  {
    title: " Product Management",
    icon: <LiaBoxOpenSolid />,
    option: [{ name: "option1" }],
  },
  {
    title: " Order Management",
    icon: <LiaBoxOpenSolid />,
    option: [{ name: "option1" }],
  },
  {
    title: " Analytics and Reports",
    icon: <AiOutlineLineChart />,
    option: [{ name: "option1" }],
  },
  {
    title: " Communication",
    icon: <MdSupportAgent />,
    option: [{ name: "option1" }],
  },
  {
    title: " Profile Management",
    icon: <MdOutlineManageAccounts />,
    option: [{ name: "option1" }],
  },
  {
    title: " Platform Management",
    icon: <MdManageHistory />,
    option: [{ name: "option1" }],
  },
  {
    title: " Support and Feedback",
    icon: <RiFeedbackLine />,
    option: [
      {
        name: "Customer Reviews",
        route: AuthenticatedRoutes.customerReviews,
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
