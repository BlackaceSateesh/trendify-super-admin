import React from 'react'

const ButtonMain = ({name ,btnColor}) => {
  return (
    <>
      <button className={`ButtonMain ${btnColor? btnColor : ''}`}>{name}</button>
    </>
  )
}

export default ButtonMain
