import React from "react";
import SingleColumnGraph from "../ui/SingleColumnGraph";
import '../../styles/ui/TotalGraphCard.css';

const TotalGraphCard = ({name, number, status}) => {
  return (
    <>
      <div className="TotalGraphCard homeCardBox w100">
        <div className="head">
          <p className="homeCardHeading">{name}</p>
          <select name="" id="" className="homeSelect">
            <option value="today">Last 7 Days</option>
          </select>
        </div>
        <h6 className="homeBigNumber">{number}</h6>
      </div>
    </>
  );
};

export default TotalGraphCard;
