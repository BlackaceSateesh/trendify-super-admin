import React from 'react';
import { MdOutlineDelete } from "react-icons/md";



const AllFaqsCard = ({title, para, key, onDelete}) => {
  return (
    <>
      <div key={key} className="AllFaqsCard">
        <div className="txt">
            <h5>{title}</h5>
            <p>{para}</p>
        </div>
        <button className='delete' onClick={onDelete}><MdOutlineDelete /></button>
      </div>
    </>
  )
}

export default AllFaqsCard;
