import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const FullScreenSlider = () => {
  return (
    <>
      <Carousel data-bs-theme="dark" className='FullScreenSlider'>
            <Carousel.Item>
              <img
                className="d-block w-100 bgPlaceHolder"
                src=''
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 bgPlaceHolder"
                src=''
                alt="First slide"
              />
            </Carousel.Item>
      </Carousel>
    </>
  )
}

export default FullScreenSlider
