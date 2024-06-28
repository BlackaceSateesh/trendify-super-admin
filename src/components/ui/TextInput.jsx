import React from 'react';

const TextInput = ({labelName, optional, required ,value, placeholder}) => {
  return (
    <>
       <div className="textInput inputFieldBox">
        <label className='inputLabel' htmlFor="">{labelName} <p>{optional}</p><span>{required}</span></label>
        <input type="text" defaultValue={value} placeholder={placeholder}/>
      </div>
    </>
  )
}

export default TextInput;
