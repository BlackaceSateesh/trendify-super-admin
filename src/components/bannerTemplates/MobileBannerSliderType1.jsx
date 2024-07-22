import React, { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../../styles/bannerTemplates/MobileBannerSliderType1.css'
import BgPlaceHolder from '../../assets/bg-placeholder.jpg'

const MobileBannerSliderType1 = ({ count, images }) => {
  useEffect(() => {
    console.log(count, images)
  }, [])

  return (
    <div className="MobileBannerSliderType1">
      <Carousel data-bs-theme="dark">
        {
          Array(count).fill().map((_, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={images[i] || BgPlaceHolder}
                alt="First slide"
              />
            </Carousel.Item>
          ))
        }
      </Carousel>
    </div>
  );
}

export default MobileBannerSliderType1

