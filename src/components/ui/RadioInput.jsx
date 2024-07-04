import React from 'react'

const RadioInput = ({labelName}) => {
  return (
    <>
      <div className="RadioInput">
        <input type="radio"/>
        <label className='inputLabel' htmlFor="">{labelName}</label>
      </div>
    </>
  )
}

export default RadioInput
