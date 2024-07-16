import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';


const ProgressBarCom = ({labelName, value, variantName}) => {
  return (
    <>
      <div className="prograssBar_main">
        <div className="head">
            <h2>{labelName}</h2>
            <h2>{value}%</h2>
        </div>
        <ProgressBar now={value} label={value} variant={variantName} />

      </div>
    </>
  )
}

export default ProgressBarCom;
