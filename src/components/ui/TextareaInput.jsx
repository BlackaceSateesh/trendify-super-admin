import React from 'react'

const TextareaInput = ({labelName, optional, value , placeholder, onChange}) => {
  return (
    <>
    <div className="textareaInput inputFieldBox">
      {labelName? <label className='inputLabel' htmlFor="">{labelName} <p>{optional}</p></label> : null}
        
        <textarea name="" id="" defaultValue={value} placeholder={placeholder} onChange={onChange}></textarea>
      </div>
 </>
  )
}

export default TextareaInput
