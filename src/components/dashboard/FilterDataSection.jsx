import React from "react";
import SelectInput from "../ui/SelectInput";
import TimeInput from "../ui/TimeInput";
import DatePickerInput from "../ui/DatePickerInput";
import DashboardInnerTitle from "./DashboardInnerTitle";
import '../../styles/dashboard/FilterDataSection.css';

const FilterDataSection = () => {
  return (
    <>
      <div className="FilterDataSection sectionContainer">
        <DashboardInnerTitle name="Filter Data" />
        <div className="filterData_inner">
          <SelectInput labelName="Select Year" option="Choose" />
          <SelectInput labelName="Select Month" option="Choose" />
          <TimeInput labelName="Select Date" option="06:03:24" />
          <DatePickerInput labelName="Select Time" option="16:00:00" />
        </div>
      </div>
    </>
  );
};

export default FilterDataSection;
