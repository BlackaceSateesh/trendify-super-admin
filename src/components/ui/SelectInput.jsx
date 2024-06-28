import React from 'react'

const SelectInput = ({labelName, required, option}) => {

  return (
    <>
      <div className="selectInput inputFieldBox">
        <label className='inputLabel' htmlFor="">{labelName} <span>{required}</span> </label>
        <select className='' id='' name='' defaultValue={'Default'}>
            <option value="Default">{option}</option>
        </select>
      </div>
    </>
  )
}

export default SelectInput;
