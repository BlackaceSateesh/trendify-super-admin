import React from 'react'

const FileInput = ({labelName, required, onChange}) => {
  return (
    <>
       <div className="fileInput inputFieldBox">
        <label className='inputLabel' htmlFor="">{labelName} <span>{required} </span> </label>
        <input type="file" name={labelName} onChange={onChange} />
      </div>
    </>
  )
}

export default FileInput;
