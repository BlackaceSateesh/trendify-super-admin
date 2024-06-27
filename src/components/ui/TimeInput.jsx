import React from 'react'

const TimeInput = (props) => {
  return (
    <>
      <div className="TimeInput inputFieldBox">
        <label className='inputLabel' htmlFor="">{props.labelName}</label>
        <input type="time" name="" id="" defaultValue={props.option}/>
      </div>
    </>
  )
}

export default TimeInput;
