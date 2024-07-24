import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const NewCollectionSection = ({clsName}) => {
  return (
    <>
      <div className={`NewCollectionSection ${clsName? clsName : '' }`}>
        <div className="content">
          <h6 className="title">Lorem ipsum dolor sit amet</h6>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            velit!
          </p>
        </div>
        <div className="singleCards">
          {/* btn */}
          <button
            className="sliderBtns left"
            onClick={() =>
              (document.getElementById("content").scrollLeft -= 250)
            }
          >
            <FaAngleLeft />
          </button>
          <div className="singleCards_inner" id="content">
            <div className="singleCard">
              <img src="" alt="" />
            </div>
            <div className="singleCard">
              <img src="" alt="" />
            </div>
            <div className="singleCard">
              <img src="" alt="" />
            </div>
            <div className="singleCard">
              <img src="" alt="" />
            </div>
          </div>
          <button
            className="sliderBtns right"
            onClick={() =>
              (document.getElementById("content").scrollLeft += 250)
            }
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default NewCollectionSection;
