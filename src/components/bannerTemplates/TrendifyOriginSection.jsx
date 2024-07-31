import React from 'react'

const TrendifyOriginSection = (props) => {
  return (
    <>
      <div className="TrendifyOriginSection">
        <div className="left"><img src={props?.images[0]} alt="" /></div>
        <div className="right"><img src={props?.images[1]} alt="" /></div>
        <span className='centerTxt'>Trendify Original</span>
      </div>
    </>
  )
}

export default TrendifyOriginSection
