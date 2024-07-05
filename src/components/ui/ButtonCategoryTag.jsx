import React from 'react'

const ButtonCategoryTag = ({name, key}) => {
  return (
    <>
      <button key = {key? key : null} className="ButtonCategoryTag">{name}</button>
    </>
  )
}

export default ButtonCategoryTag
