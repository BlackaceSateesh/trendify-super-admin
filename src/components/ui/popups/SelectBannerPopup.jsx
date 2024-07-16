import React from 'react'
import { Modal } from 'react-bootstrap';
import BannerPreviewCard from '../BannerPreviewCard';
import BannerTemplate1 from '../../../assests/dashboard/bannerTemplate1.png';
import BannerTemplate2 from '../../../assests/dashboard/bannerTemplate2.png';
import BannerTemplate3 from '../../../assests/dashboard/bannerTemplate3.png';
import BannerTemplate4 from '../../../assests/dashboard/bannerTemplate4.png';

const SelectBannerPopup = (props) => {
  // dummy data
  const templateBannerList = [
    {
      img: BannerTemplate1,
      name: "Banner Template One",
    },
    {
      img: BannerTemplate2,
      name: "Banner Template Two",
    },
    {
      img: BannerTemplate3,
      name: "Banner Template Three",
    },
    {
      img: BannerTemplate4,
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
