import React from 'react';

const ButtonWithIcon = ({name, icon}) => {
  return (
    <>
      <button className='ButtonWithIcon'>{icon} {name}</button>
    </>
  )
}

export default ButtonWithIcon;
