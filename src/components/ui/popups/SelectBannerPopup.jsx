import React from 'react'
import { Modal } from 'react-bootstrap';
import BannerPreviewCard from '../BannerPreviewCard';

const SelectBannerPopup = (props) => {
  // dummy data
  const templateBannerList = [
    {
      img: require("../../../assests/dashboard/bannerTemplate1.png"),
      name: "Banner Template One",
    },
    {
      img: require("../../../assests/dashboard/bannerTemplate2.png"),
      name: "Banner Template Two",
    },
    {
      img: require("../../../assests/dashboard/bannerTemplate3.png"),
      name: "Banner Template Three",
    },
    {
      img: require("../../../assests/dashboard/bannerTemplate4.png"),
      name: "Banner Template Four",
    },
  ];
  return (
    <>
        <Modal
        {...props}
        size="fullscreen"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='SelectBannerPopup'
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Select Banner Template
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <div className="inner">
            {templateBannerList.map((e, i)=>{
              return(<BannerPreviewCard bannerImg={e.img} bannerName={e.name} />)
            })}
            
           </div>
            </Modal.Body>
      </Modal>
    </>
  )
}

export default SelectBannerPopup;
