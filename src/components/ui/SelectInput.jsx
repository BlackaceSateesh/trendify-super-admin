import React from 'react'

const SelectInput = (props) => {

  return (
    <>
      <div className="selectInput inputFieldBox">
        <label className='inputLabel' htmlFor="">{props.labelName} <span>{props.required}</span> </label>
        <select className='' id='' name='' defaultValue={'Default'}>
            <option value="Default">{props.option}</option>
        </select>
      </div>
    </>
  )
}

export default SelectInput;
