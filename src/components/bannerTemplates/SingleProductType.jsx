import React from 'react'
import { processLabel } from '../../utils/stringFunctions'

const SingleProductType = (props) => {
  return (
    <>
      <div className="SingleProductType bannerMain">
        <div className="innerBox">
        <div className="image"><img src={props?.images[0]} alt="" /></div>
        <div className="content">
            <h4 className="title">{processLabel(props?.label)}</h4>
            <p className="para">{props?.value}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleProductType
