import React from 'react'

const RadioInputBorder = ({labelName}) => {
  return (
    <>
      <div className="RadioInputBorder">
        <input type="radio"/>
        <label className='inputLabel' htmlFor="">{labelName}</label>
      </div>
    </>
  )
}

export default RadioInputBorder
