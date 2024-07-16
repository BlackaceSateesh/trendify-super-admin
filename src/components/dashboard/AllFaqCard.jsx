import React from 'react';
import { LuEye ,LuPencil } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";


const AllFaqCard = ({title, para ,key}) => {
  return (
    <>
      <div key={key} className="AllFaqCard">
        <div className="head">
            <p>{title}</p>
           <div className="btns">
            <button className="eye"><LuEye /></button>
            <button className="edit"><LuPencil /></button>
            <button className="delete"><MdDeleteOutline /></button>
           </div>
        </div>
        <p>{para}</p>
      </div>
    </>
  )
}

export default AllFaqCard
