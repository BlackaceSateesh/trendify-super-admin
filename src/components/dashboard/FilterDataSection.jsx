import React from "react";
import SelectInput from "../ui/SelectInput";
import TimeInput from "../ui/TimeInput";
import DatePickerInput from "../ui/DatePickerInput";
import DashboardInnerTitle from "./DashboardInnerTitle";
import '../../styles/dashboard/FilterDataSection.css';

const FilterDataSection = () => {
  return (
    <>
      <div className="FilterDataSection ">
        {/* <DashboardInnerTitle name="Filter Data" /> */}
        <div className="filterData_inner ">
          <DatePickerInput labelName="From" option="16:00:00" />
          <DatePickerInput labelName="To" option="16:00:00" />
          {/* <SelectInput labelName="Select Year" option="Choose" />
          <SelectInput labelName="Select Month" option="Choose" />
          <TimeInput labelName="Select Date" option="06:03:24" /> */}
        </div>
      </div>
    </>
  );
};

export default FilterDataSection;
