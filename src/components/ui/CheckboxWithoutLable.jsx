import React from 'react'

const CheckboxWithoutLable = ({idName}) => {
    return (
        <>
            <div className="CheckboxWithoutLable">
                <input type="checkbox" id={idName} />
            </div>
        </>
    )
}

export default CheckboxWithoutLable;
