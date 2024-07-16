import React from 'react'

const CheckboxInput = ({labelName}) => {
    return (
        <>
            <div className="checkboxInput">
                <input type="checkbox" />
                <label className='inputLabel' htmlFor="">{labelName}</label>
            </div>
        </>
    )
}

export default CheckboxInput;
