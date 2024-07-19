import React from 'react'

const TextareaInput = ({labelName, required, value , placeholder, onChange, disabled}) => {
  return (
    <>
    <div className="textareaInput inputFieldBox">
      {labelName? <label className='inputLabel' htmlFor="">{labelName} <span>{required}</span></label> : null}
        
        <textarea name="" id="" defaultValue={value} placeholder={placeholder} onChange={onChange} disabled={disabled}></textarea>
      </div>
 </>
  )
}

export default TextareaInput
