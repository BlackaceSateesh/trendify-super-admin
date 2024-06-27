import React from "react";
import FilterDataSection from "../../components/dashboard/FilterDataSection";
import DashboardInnerTitle from "../../components/dashboard/DashboardInnerTitle";
import CustomerReviewCardInner from "../../components/dashboard/CustomerReviewCardInner";
import '../../styles/dashboard/CustomerReview.css'
const CustomerReview = () => {
  // dummy data
  const data = [
    {
      name: "Rajat Pradhan",
      pic: require('../../assests/dashboard/userlogo.png'),
      date: "3 Days ago",
      text: "Greate Product",
      msg: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour lorem lorem   here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour lorem lorem here are many variations of passages here are many variations of passages .",
      images: [
        { img: require("../../assests/dashboard/customerProductimg.png") },
        { img: require("../../assests/dashboard/customerProductimg.png") },
        { img: require("../../assests/dashboard/customerProductimg.png") },
      ],
    },
    {
      name: "Vivek Pandey",
      pic: require('../../assests/dashboard/userlogo.png'),
      date: "3 Days ago",
      text: "Greate Product",
      msg: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour lorem lorem   here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour lorem lorem here are many variations of passages here are many variations of passages .",
      images: [
        { img: require("../../assests/dashboard/customerProductimg.png") },
        { img: require("../../assests/dashboard/customerProductimg.png") },
        { img: require("../../assests/dashboard/customerProductimg.png") },
      ],
    },
    {
      name: "Vimal Pandey",
      pic: require('../../assests/dashboard/userlogo.png'),
      date: "3 Days ago",
      text: "Greate Product",
      msg: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour lorem lorem   here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour lorem lorem here are many variations of passages here are many variations of passages .",
      images: [
        { img: require("../../assests/dashboard/customerProductimg.png") },
        { img: require("../../assests/dashboard/customerProductimg.png") },
        { img: require("../../assests/dashboard/customerProductimg.png") },
      ],
    },
  ];

  return (
    <>
      <div className="CustomerReview sectionGap ">
        <FilterDataSection />
        <div className="CustomerReview_inner sectionContainer">
          <div className="head">
            <DashboardInnerTitle name="Reviews List" />
            <select name="" className="homeSelect" id="">
              <option value="">All</option>
            </select>
          </div>
          <div className="cards ">
            {data.map((e, i) => {
              return (
                <>
                  <CustomerReviewCardInner
                    date={e.date}
                    img={e.images}
                    msg={e.msg}
                    name={e.name}
                    pic={e.pic}
                    text={e.text}
                    key={i}
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

export default CustomerReview;
