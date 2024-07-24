import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const FullScreenSlider = ({ images, count = 3}) => {
  return (
    <>
      <Carousel data-bs-theme="dark" className='FullScreenSlider bannerMain'>
        {
          Array(count).fill().map((_, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100 bgPlaceHolder"
                src={images[i] || ""}
                alt="First slide"
              />
            </Carousel.Item>
          ))
        }
      </Carousel>
    </>
  )
}

export default FullScreenSlider
