import React from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoStar } from "react-icons/io5";


const UserReviewCard = ({img, name, date, reviewTxt, para}) => {
  return (
    <>
      <div className="UserReviewCard">
        <div className="userPic">
          <img src={img} alt="" />
        </div>
        <div className="details">
          <div className="head">
            <h6 className="name">{name}</h6>
            <p>{date}</p>
          </div>
          <div className="stars">
          <IoStar /><IoStar /><IoStar /><IoStar /><IoStar />
          </div>
          <h6 className="reviewTxt">{reviewTxt}</h6>
          <p className="para">{para}</p>
          <button className="delete">
            <MdOutlineDeleteOutline /> Deleted Review
          </button>
        </div>
      </div>
    </>
  );
};

export default UserReviewCard;
