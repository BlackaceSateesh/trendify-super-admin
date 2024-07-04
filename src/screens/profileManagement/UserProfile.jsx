import React from "react";
import DashboardInnerTitle from "../../components/dashboard/DashboardInnerTitle";
import TextInput from "../../components/ui/TextInput";
import AdressProfileCard from "../../components/dashboard/AdressProfileCard";
import "../../styles/dashboard/UserProfile.css";
import DataTable from "react-data-table-component";
import {
  purchaseHistoryColumns,
  purchaseHistoryList,
} from "../../constants/dummy/purchaseHistory";
import ProgressBarCom from "../../components/ui/ProgressBarCom";
import MultipleAxesGraph from "../../components/ui/MultipleAxesGraph";
import ButtonWithIcon from "../../components/ui/ButtonWithIcon";
import { IoIosArrowRoundUp, IoIosArrowRoundDown } from "react-icons/io";
import UserReviewCard from "../../components/dashboard/UserReviewCard";



const UserProfile = () => {
  return (
    <>
      <div className="UserProfile sectionGap">
        {/* user details */}
        <div className="userDetail sectionContainer">
          <DashboardInnerTitle name="User Detail" />
          <div className="userDetail_inner">
            <div className="userPic">
              <img
                src={require("../../assests/dashboard/userProfilepic.png")}
                alt=""
              />
            </div>
            <div className="inputFieldBox_inner">
              <div className="inputField">
                <TextInput labelName="First Name" value="Rajat" />
                <TextInput labelName="Last Name" value="Pradhan" />
                <TextInput
                  labelName="Primary Contact Number"
                  value="7024393158"
                />
                <TextInput
                  labelName="E-mail Address"
                  value="rajat.pradhan@vikisol.in"
                />
                <TextInput labelName="Gender" value="Male" />
                <TextInput labelName="User IP Address" value="192.168.1.1" />
                <TextInput
                  labelName="Entry Type"
                  value="Mobile/Web or Chrome Brower"
                />
                <TextInput
                  labelName="Last Seen"
                  value="22 oct 2042 / 23:33:00 PM"
                />
                <TextInput
                  labelName="Last Location"
                  value="Bhopal , Madhya Pradesh"
                />
              </div>
            </div>
          </div>
        </div>
        {/* All Saved Address */}
        <div className="address sectionContainer">
          <DashboardInnerTitle name="All Saved Address" />
          <div className="address_cards">
            <AdressProfileCard
              type="Home"
              category="Default"
              mobile="7024393158"
              address="08 gujar pura, huzur ,peer gate , bhopal , Madhya Paresh - 462001"
            />
            <AdressProfileCard
              type="Office"
              mobile="7024393158"
              address="08 gujar pura, huzur ,peer gate , bhopal , Madhya Paresh - 462001"
            />
            <AdressProfileCard
              type="Sharma ji ka ghar"
              mobile="7024393158"
              address="08 gujar pura, huzur ,peer gate , bhopal , Madhya Paresh - 462001"
            />
            <AdressProfileCard
              type="Relative House"
              mobile="7024393158"
              address="08 gujar pura, huzur ,peer gate , bhopal , Madhya Paresh - 462001"
            />
          </div>
        </div>

        {/* purchase two box */}
        <div className="purchase_col2">
          <div className="sectionContainer purchaseHistory">
            <DashboardInnerTitle name="Purchase History" />
            <div className="purchaseHistory_table">
              <DataTable
                columns={purchaseHistoryColumns.column} // dummy data
                data={purchaseHistoryList.data}
                selectableRows
                pagination
                className="purchaseHistoryTable dataTable_main"
              />
            </div>
          </div>
          <div className="sectionContainer purchaseCategory">
            <DashboardInnerTitle name="Purchase by Category" />
            <div className="prograssBar">
              <ProgressBarCom
                labelName="Clothing's"
                value="95"
                variantName="tBlue"
              />
              <ProgressBarCom
                labelName="Accessories"
                value="75"
                variantName="tYellow"
              />
              <ProgressBarCom
                labelName="Health Fit"
                value="70"
                variantName="tLightGreen"
              />
              <ProgressBarCom
                labelName="Sport Wear"
                value="55"
                variantName="tPink"
              />
              <ProgressBarCom
                labelName="Body FIt"
                value="45"
                variantName="tPurple"
              />
              <ProgressBarCom
                labelName="Others"
                value="45"
                variantName="tPurple"
              />
              <ProgressBarCom
                labelName="Sport Wear"
                value="55"
                variantName="tPink"
              />
              <ProgressBarCom
                labelName="Body FIt"
                value="45"
                variantName="tPurple"
              />
            </div>
          </div>
        </div>

        <div className="sectionContainer">
            <DashboardInnerTitle name='Purchase, Replacement and Refund Overview' />
            <div className="graphBox">
                <MultipleAxesGraph />
            </div>
            <div className="rightBtns">
                <ButtonWithIcon icon={<IoIosArrowRoundUp />} name=' 3.48% Purchase ' />
                <ButtonWithIcon  btnColor='yellow' name=' 3.48% Replacement' />
                <ButtonWithIcon icon={<IoIosArrowRoundDown />} btnColor='red' name=' 1.48% Return' />
            </div>
        </div>

        {/* review cards */}
        <div className="reviewSection">
            <div className="sectionContainer">
            <DashboardInnerTitle name='Top Positive Review (May)' />
            <div className="reviewCards">
                <UserReviewCard name='Vimal Pandey' reviewTxt='Greate Product' para='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour' date='3 Days ago' img={require('../../assests/dashboard/userlogo.png')} />
                <UserReviewCard name='Rajat Pradhan' reviewTxt='Greate Product' para='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour' date='3 Days ago' img={require('../../assests/dashboard/userlogo.png')} />
                <UserReviewCard name='Shyam Seeli' reviewTxt='Greate Product' para='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour' date='3 Days ago' img={require('../../assests/dashboard/userlogo.png')} />
            </div>
            </div>
            <div className="sectionContainer">
            <DashboardInnerTitle name='Top Negative Review (May)' />
            <div className="reviewCards">
                <UserReviewCard name='Vimal Pandey' reviewTxt='Greate Product' para='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour' date='3 Days ago' img={require('../../assests/dashboard/userlogo.png')} />
                <UserReviewCard name='Rajat Pradhan' reviewTxt='Greate Product' para='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour' date='3 Days ago' img={require('../../assests/dashboard/userlogo.png')} />
                <UserReviewCard name='Shyam Seeli' reviewTxt='Greate Product' para='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour' date='3 Days ago' img={require('../../assests/dashboard/userlogo.png')} />
            </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
