import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

const CustomerReviewCardInner = ({ key, pic, name, date, text, msg, img }) => {
  return (
    <>
      <div key={key} className="CustomerReviewCardInner">
        <div className="pic">
          <img src={pic} alt="" />
        </div>
        <div className="content">
          <h6 className="name">
            {name} <span className="date">{date}</span>
          </h6>
          <div className="stars">
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
          </div>
          <h5 className="text">{text}</h5>
          <p className="msg">{msg}</p>
          <div className="images">
            {img.map((e, i) => {
              return (
                <>
                  {" "}
                  <div key={i} className="imgCard">
                    <img src={e.img} alt="" />
                  </div>
                </>
              );
            })}
          </div>
          <div className="deleteBtns">
            <button className="deleteBtn">
              <RiDeleteBinLine /> Deleted Review
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerReviewCardInner;
