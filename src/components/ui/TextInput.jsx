import React from 'react';

const TextInput = ({ labelName, optional, required, value, placeholder, onChange, disabled, type = "text", min, max }) => {
  return (
    <>
      <div className="textInput inputFieldBox">
        {labelName && <label className='inputLabel' htmlFor="">{labelName} <p>{optional}</p><span>{required}</span></label>}
        <input
          type={type}
          defaultValue={value}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          min={min}
          max={max}
        />
      </div>
    </>
  )
}

export default TextInput;
