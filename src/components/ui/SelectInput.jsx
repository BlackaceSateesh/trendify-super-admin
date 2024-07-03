import React from 'react'

const SelectInput = ({labelName, required, option , optional}) => {

  return (
    <>
      <div className="selectInput inputFieldBox">
        <label className='inputLabel' htmlFor="">{labelName} <span>{required}</span> <p className="optional">{optional? optional : ''}</p> </label>
        <select className='' id='' name='' defaultValue={'Default'}>
            <option value="Default">{option}</option>
        </select>
      </div>
    </>
  )
}

export default SelectInput;
