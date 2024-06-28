import React from 'react';

const DashboardInnerTitle = ({name , optional}) => {
  return (
    <>
        <h2 className="page_subtitle">{name} {optional? <p>{optional}</p> : null} </h2>
    </>
  )
}

export default DashboardInnerTitle;
