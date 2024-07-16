import React from 'react';
import { MdOutlineStarOutline } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";


const CustomerReviewCard = ({pic, name, time, star, text}) => {
  return (
    <>
      <div className="CustomerReviewCard">
        <div className="head">
            <div className="pic">
                <img src={pic} alt="" />
            </div>
            <div className="txt">
                <h6>{name}</h6>
                <p>{time}</p>
            </div>
        </div>

            <div className="stars">
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarOutline />
            </div>
            <p className="text">{text}</p>
            <div className="options">
                <button>Delete</button>
                <button>Accept</button>
            </div>
      </div>
    </>
  )
}

export default CustomerReviewCard
