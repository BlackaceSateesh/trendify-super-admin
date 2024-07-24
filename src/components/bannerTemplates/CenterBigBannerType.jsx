import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const CenterBigBannerType = ({ images, count = 4 }) => {
  return (
    <>
      <div className="CenterBigBannerType bannerMain">
        <div className="bigImg">
          <img src={images[0] || ""} alt="" />
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
            {[...Array(count - 1)].map((_, index) => (
              <div key={index} className="singleCard">
                <img src={images[index + 1] || ""} alt="" />
              </div>
            ))}
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
