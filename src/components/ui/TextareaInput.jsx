import React from 'react'

const TextareaInput = (props) => {
  return (
    <>
    <div className="textareaInput inputFieldBox">
        <label className='inputLabel' htmlFor="">{props.labelName} <p>{props.optional}</p></label>
        <textarea name="" id="" defaultValue={props.value} placeholder={props.placeholder}></textarea>
      </div>
 </>
  )
}

export default TextareaInput
