import React from 'react';

const TextInput = (props) => {
  return (
    <>
       <div className="textInput inputFieldBox">
        <label className='inputLabel' htmlFor="">{props.labelName} <p>{props.optional}</p><span>{props.required}</span></label>
        <input type="text" defaultValue={props.value} placeholder={props.placeholder}/>
      </div>
    </>
  )
}

export default TextInput;
