import React from 'react';

const ButtonWithIcon = ({name, icon ,btnColor}) => {
  return (
    <>
      <button className={`ButtonWithIcon ${btnColor? btnColor : ''}`}>{icon} {name}</button>
    </>
  )
}

export default ButtonWithIcon;
