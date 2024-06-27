import React from 'react'

const FileInput = (props) => {
  return (
    <>
       <div className="fileInput inputFieldBox">
        <label className='inputLabel' htmlFor="">{props.labelName} <span>{props.required} </span> </label>
        <input type="file"  />
      </div>
    </>
  )
}

export default FileInput;
