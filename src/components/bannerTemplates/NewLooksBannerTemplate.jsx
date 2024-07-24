import React from "react";

const NewLooksBannerTemplate = (props) => {
  return (
    <>
      <div className="NewLooksBannerTemplate bannerMain">
        {/* only four card */}
        <div className="singleCard">
          <img src={props?.images[0]} alt="" />
        </div>
        <div className="singleCard">
          <img src={props?.images[1]} alt="" />
        </div>
        <div className="singleCard">
          <img src={props?.images[2]} alt="" />
        </div>
        <div className="singleCard">
          <img src={props?.images[3]} alt="" />
        </div>
      </div>
    </>
  );
};

export default NewLooksBannerTemplate;
