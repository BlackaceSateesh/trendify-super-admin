import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { processLabel } from "../../utils/stringFunctions";

const NewCollectionSection = ({clsName, label, value, images, count = 3}) => {
  return (
    <>
      <div className={`NewCollectionSection bannerMain ${clsName? clsName : '' }`}>
        <div className="content">
          <h6 className="title">{processLabel(label)}</h6>
          <p className="para">
            {value}
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
            {[...Array(count)].map((_, index) => (
              <div key={index} className="singleCard">
                <img src={images[index] || ""} alt="" />
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

export default NewCollectionSection;
