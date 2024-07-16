import React from 'react'

const TextareaInput = ({labelName, optional, value , placeholder}) => {
  return (
    <>
    <div className="textareaInput inputFieldBox">
      {labelName? <label className='inputLabel' htmlFor="">{labelName} <p>{optional}</p></label> : null}
        
        <textarea name="" id="" defaultValue={value} placeholder={placeholder}></textarea>
      </div>
 </>
  )
}

export default TextareaInput
