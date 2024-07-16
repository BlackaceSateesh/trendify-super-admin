import React from 'react'

const FileInput = ({labelName, required}) => {
  return (
    <>
       <div className="fileInput inputFieldBox">
        <label className='inputLabel' htmlFor="">{labelName} <span>{required} </span> </label>
        <input type="file"  />
      </div>
    </>
  )
}

export default FileInput;
