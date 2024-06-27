import React from 'react';

const DatePickerInput = (props) => {
  return (
    <>
      <div className="DatePickerInput inputFieldBox">
        <label className='inputLabel' htmlFor="">{props.labelName}</label>
        <input type="date" name="" id="" defaultValue={props.option}/>
      </div>
    </>
  )
}

export default DatePickerInput;
