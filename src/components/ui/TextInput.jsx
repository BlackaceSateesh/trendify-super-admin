import React from 'react';

const TextInput = ({labelName, optional, required ,value, placeholder, onChange, disabled, type = "text"}) => {
  return (
    <>
       <div className="textInput inputFieldBox">
        { labelName && <label className='inputLabel' htmlFor="">{labelName} <p>{optional}</p><span>{required}</span></label>}
        <input type={type} defaultValue={value} placeholder={placeholder} onChange={onChange} disabled={disabled} />
      </div>
    </>
  )
}

export default TextInput;
