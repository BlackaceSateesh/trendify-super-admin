import React from 'react';
import { MdOutlineStarOutline } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";


const CustomerReviewCard = ({pic, name, userId, productId, star, text}) => {
  return (
    <>
      <div className="CustomerReviewCard">
        <div className="head">
            <div className="pic">
                <img src={pic} alt="" />
            </div>
            <div className="txt">
                <h6>{name} - {userId}</h6>
                <p>{productId}</p>
            </div>
        </div>

            <div className="stars">
                {[...Array(star)].map((e, i) => {
                    return (
                        <MdOutlineStarPurple500 key={i} />
                    );
                })}
            </div>
            <p className="text">{text}</p>
      </div>
    </>
  )
}

export default CustomerReviewCard
