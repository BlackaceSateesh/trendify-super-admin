import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const CenterBigBannerType = () => {
  return (
    <>
      <div className="CenterBigBannerType bannerMain">
        <div className="bigImg">
          <img src="" alt="" />
        </div>
        <div className="singleCards">
          <div className="head">
            <h4 className="heading">Explore Refurbished Devices</h4>
            <span>View All</span>
          </div>
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

export default CenterBigBannerType;
