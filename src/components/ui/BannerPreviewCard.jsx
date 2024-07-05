import React from 'react'
import ButtonMain from './ButtonMain';

const BannerPreviewCard = ({bannerImg, bannerName}) => {
    
  return (
    <>
      <div className="BannerPreviewCard">
        <div className="banner"><img src={bannerImg} alt="" /></div>
        <div className="btm">
            <h6 className="name">{bannerName}</h6>
            <ButtonMain name='Select Banner' btnColor='green' />
        </div>
      </div>
    </>
  )
}

export default BannerPreviewCard;
