import React from 'react';

const DatePickerInput = ({labelName, option}) => {
  return (
    <>
      <div className="DatePickerInput inputFieldBox">
        <label className='inputLabel' htmlFor="">{labelName}</label>
        <input type="date" name="" id="" defaultValue={option}/>
      </div>
    </>
  )
}

export default DatePickerInput;
