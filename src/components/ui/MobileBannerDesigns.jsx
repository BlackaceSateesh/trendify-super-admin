import React from 'react'
import { Modal } from 'react-bootstrap';
import bannerMobilePng from '../../assets/bannerMobile.png';
import bannerMobileSliderPng from '../../assets/bannerMobileSlider.png';
import bannerWeb1Png from '../../assets/full_1.jpg';
import bannerWeb2Png from '../../assets/full_2.jpg';
import bannerWeb3Png from '../../assets/full_3.png';
import bannerWeb4Png from '../../assets/full_4.jpg';
import bannerCenterBigImg from '../../assests/dashboard/bannerCenterBigImg.png';
import bannerNewCollection from '../../assests/dashboard/bannerNewCollection.png';
import BannerNewCollectionEven from '../../assests/dashboard/BannerNewCollectionEven.png';
import BannerNewCollectionOdd from '../../assests/dashboard/BannerNewCollectionOdd.png';
import bannerNewLooks from '../../assests/dashboard/bannerNewLooks.png';
import bannerSingleProduct from '../../assests/dashboard/bannerSingleProduct.png';
import bannerTrendifyOriginal from '../../assests/dashboard/bannerTrendifyOriginal.png';
import { BannerIds } from '../../constants/contents/BannerContent';

const MobileBannerDesigns = (props) => {
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onHide}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='MobileBannerDesigns'
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Banner Preview
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="inner">
            {
              props.templateType === 'Mobile' ? (
                <>
                  <div className="MobileBannerDesignCard" onClick={() => props.onLayout(BannerIds.MOBILE_BANNER_1)}>
                    <div className="singleImg" >
                      <img src={bannerMobilePng} alt="" />
                    </div>
                    <div className="hoverBox">
                      <p className="title">Use this layout</p>
                    </div>
                  </div>

                  <div className="MobileBannerDesignCard" onClick={() => {console.log(BannerIds.MOBILE_SLIDER);props.onLayout(BannerIds.MOBILE_SLIDER);}}>
                    <div className="singleImg">
                      <img src={bannerMobileSliderPng} alt="" />
                    </div>
                    <div className="hoverBox">
                      <p className="title">Use this carousel</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="MobileBannerDesignCard" onClick={() => props.onLayout(BannerIds.WEB_BANNER_1)}>
                    <div className="singleImg">
                      <img src={bannerWeb1Png} alt="" />
                    </div>
                    <div className="hoverBox">
                      <p className="title">Use this layout</p>
                    </div>
                  </div>

                  <div className="MobileBannerDesignCard" onClick={() => props.onLayout(BannerIds.WEB_BANNER_2)}>
                    <div className="singleImg">
                      <img src={bannerWeb2Png} alt="" />
                    </div>
                    <div className="hoverBox">
                      <p className="title">Use this layout</p>
                    </div>
                  </div>

                  <div className="MobileBannerDesignCard" onClick={() => props.onLayout(BannerIds.WEB_BANNER_3)}>
                    <div className="singleImg">
                      <img src={bannerWeb3Png} alt="" />
                    </div>
                    <div className="hoverBox">
                      <p className="title">Use this layout</p>
                    </div>
                  </div>

                  <div className="MobileBannerDesignCard" onClick={() => props.onLayout(BannerIds.WEB_BANNER_4)}>
                    <div className="singleImg">
                      <img src={bannerWeb4Png} alt="" />
                    </div>
                    <div className="hoverBox">
                      <p className="title">Use this layout</p>
                    </div>
                  </div>
                  {/* ===================== */}
              
                  <div className="MobileBannerDesignCard" onClick={() => props.onLayout(BannerIds.WEB_CENTER_BANNER_SLIDER)}>
                    <div className="singleImg">
                      <img src={bannerCenterBigImg} alt="" />
                    </div>
                    <div className="hoverBox">
                      <p className="title">Use this layout</p>
                    </div>
                  </div>
                  <div className="MobileBannerDesignCard" onClick={() => props.onLayout(BannerIds.WEB_NEW_LOOKS_BANNER)}>
                    <div className="singleImg">
                      <img src={bannerNewLooks} alt="" />
                    </div>
                    <div className="hoverBox">
                      <p className="title">Use this layout</p>
                    </div>
                  </div>
                  <div className="MobileBannerDesignCard" onClick={() => props.onLayout(BannerIds.WEB_NEW_COLLECTION_SLIDER)}>
                    <div className="singleImg">
                      <img src={bannerNewCollection} alt="" />
                    </div>
                    <div className="hoverBox">
                      <p className="title">Use this layout</p>
                    </div>
                  </div>
                  <div className="MobileBannerDesignCard" onClick={() => props.onLayout(BannerIds.WEB_SINGLE_PRODUCT_BANNER)}>
                    <div className="singleImg">
                      <img src={bannerSingleProduct} alt="" />
                    </div>
                    <div className="hoverBox">
                      <p className="title">Use this layout</p>
                    </div>
                  </div>
                  <div className="MobileBannerDesignCard" onClick={() => props.onLayout(BannerIds.WEB_TRENDIFY_ORIGIN)}>
                    <div className="singleImg">
                      <img src={bannerTrendifyOriginal} alt="" />
                    </div>
                    <div className="hoverBox">
                      <p className="title">Use this layout</p>
                    </div>
                  </div>
                  <div className="MobileBannerDesignCard" onClick={() => props.onLayout(BannerIds.WEB_NEW_COLLECTION_ODD_SLIDER)}>
                    <div className="singleImg">
                      <img src={BannerNewCollectionOdd} alt="" />
                    </div>
                    <div className="hoverBox">
                      <p className="title">Use this layout</p>
                    </div>
                  </div>
                  <div className="MobileBannerDesignCard" onClick={() => props.onLayout(BannerIds.WEB_NEW_COLLECTION_EVEN_SLIDER)}>
                    <div className="singleImg">
                      <img src={BannerNewCollectionEven} alt="" />
                    </div>
                    <div className="hoverBox">
                      <p className="title">Use this layout</p>
                    </div>
                  </div>

                  {/* <button onClick={() => props.onLayout(BannerIds.WEB_CENTER_BANNER_SLIDER)}>Center Big Banner</button> */}
                  {/* <button onClick={() => props.onLayout(BannerIds.WEB_NEW_LOOKS_BANNER)}>New Looks Banner</button> */}
                  {/* <button onClick={() => props.onLayout(BannerIds.WEB_NEW_COLLECTION_SLIDER)}>New Collection Slider</button> */}
                  {/* <button onClick={() => props.onLayout(BannerIds.WEB_FULLSCREEN_SLIDER)}>Full Screen Slider</button> */}
                  {/* <button onClick={() => props.onLayout(BannerIds.WEB_SINGLE_PRODUCT_BANNER)}>Single Product Banner</button> */}
                  {/* <button onClick={() => props.onLayout(BannerIds.WEB_TRENDIFY_ORIGIN)}>Trendify Origin</button> */}
                  {/* <button onClick={() => props.onLayout(BannerIds.WEB_NEW_COLLECTION_ODD_SLIDER)}>New Collection Slider Odd</button> */}
                  {/* <button onClick={() => props.onLayout(BannerIds.WEB_NEW_COLLECTION_EVEN_SLIDER)}>New Collection Slider Even</button> */}
                </>
              )
            }
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default MobileBannerDesigns;
