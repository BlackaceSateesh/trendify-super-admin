import React from 'react';
import { BsEye } from "react-icons/bs";


const TextInputWithEye = ({labelName, optional, required ,value, placeholder}) => {
  return (
    <>
       <div className="TextInputWithEye inputFieldBox">
        <label className='inputLabel' htmlFor="">{labelName} <p>{optional}</p><span>{required}</span></label>
        <div className="box">
        <input type="text" defaultValue={value} placeholder={placeholder}/>
        <button className='eye'><BsEye /></button>
        </div>
      </div>
    </>
  )
}

export default TextInputWithEye;
