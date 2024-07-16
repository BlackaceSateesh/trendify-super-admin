import React from "react";
import FilterDataSection from "../../components/dashboard/FilterDataSection";
import DashboardInnerTitle from "../../components/dashboard/DashboardInnerTitle";
import NotificationAlertCard from "../../components/ui/NotificationAlertCard";
import '../../styles/dashboard/NotificationAndAlert.css'

const NotificationAndAlert = () => {
    // dummy data for notification alert card
  const data = [
    {
      name: "Seller Management",
      status: "new",
      read: true,
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco",
      priority: "High Severity",
      priorityLevel: "high",
      priorityStatus: "Reverification cancel by seller",
      date: " 04/07/2024 3:00am",
    },
    {
      name: "Seller Management",
      status: "seen",
      read: true,
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco",
      priority: "High Severity",
      priorityLevel: "medium",
      priorityStatus: "Reverification cancel by seller",
      date: " 04/07/2024 3:00am",
    },
    {
      name: "Order Management",
      status: "unseen",
      read: false,
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco",
      priority: "High Severity",
      priorityLevel: "high",
      priorityStatus: "Few Item left in inventory",
      date: " 04/07/2024 3:00am",
    },
    {
      name: "Seller Management",
      status: "new",
      read: true,
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco",
      priority: "High Severity",
      priorityLevel: "high",
      priorityStatus: "Reverification cancel by seller",
      date: " 04/07/2024 3:00am",
    },
    {
      name: "Seller Management",
      status: "seen",
      read: true,
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco",
      priority: "High Severity",
      priorityLevel: "medium",
      priorityStatus: "Reverification cancel by seller",
      date: " 04/07/2024 3:00am",
    },
    {
      name: "Order Management",
      status: "unseen",
      read: false,
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco",
      priority: "High Severity",
      priorityLevel: "high",
      priorityStatus: "Few Item left in inventory",
      date: " 04/07/2024 3:00am",
    },
  ];
  return (
    <>
      <div className="NotificationAndAlert sectionGap">
        <FilterDataSection />

        <div className="NotificationAndAlert_inner sectionContainer">
          <div className="head">
            <DashboardInnerTitle name="Notification & Alert  List" />
            <select name="" className="homeSelect" id="">
              <option value="">All</option>
            </select>
          </div>
          <div className="cards">
            {data.map((e, i) => {
              return (
                <>
                  <NotificationAlertCard
                    key={i}
                    read={e.read}
                    status={e.status}
                    date={e.date}
                    name={e.name}
                    para={e.para}
                    priority={e.priority}
                    priorityLevel={e.priorityLevel}
                    priorityStatus={e.priorityStatus}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationAndAlert;
