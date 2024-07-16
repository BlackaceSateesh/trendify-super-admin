import React from 'react';
import { MdOutlineDelete } from "react-icons/md";



const AllFaqsCard = ({title, para , key}) => {
  return (
    <>
      <div key={key} className="AllFaqsCard">
        <div className="txt">
            <h5>{title}</h5>
            <p>{para}</p>
        </div>
        <button className='delete'><MdOutlineDelete /></button>
      </div>
    </>
  )
}

export default AllFaqsCard;
