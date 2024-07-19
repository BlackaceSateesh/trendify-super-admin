import { FiEye } from "react-icons/fi";
import { GoPencil } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthenticatedRoutes } from "../Routes";


export const webBannerList = {
    data: [
        {
            id: 1,
            bannerName: 'Hero Banner',
            bannerType: 'Group Banner',
            imageCount: '4 Image Banner',
            action:[],
        },
        {
            id: 2,
            bannerName: 'Slider Banner',
            bannerType: 'Single Banner',
            imageCount: '1 Image Banner',
            action:[],
        },
        {
            id: 3,
            bannerName: 'Trendify Banner',
            bannerType: 'Group Banner',
            imageCount: '2 Image Banner',
            action:[],
        },
        {
            id: 4,
            bannerName: 'Brand Banner',
            bannerType: 'Single Banner',
            imageCount: '1 Image Banner',
            action:[],
        },

    ]
}

export const webBannerColumns = {
    column: [
        {
            name: 'SL',
            selector: row => row.id,
        },
        {
            name: 'Banner Name',
            selector: row => row.bannerName,
        },
        {
            name: 'Banner Type',
            selector: row => row.bannerType,
        },
        {
            name: 'Image Count',
            selector: row => row.imageCount,
        },
        {
            name: 'Action',
            selector: row => <div className="actionBtns"><button><FiEye /></button><button><GoPencil /></button><button><MdDeleteOutline /></button></div>,
        },
    ]
};


export const mobileBannerList = {
    data: [
        {
            id: 1,
            bannerName: 'Hero Banner',
            bannerType: 'Group Banner',
            imageCount: '4 Image Banner',
            action:[],
        },
        {
            id: 2,
            bannerName: 'Slider Banner',
            bannerType: 'Single Banner',
            imageCount: '1 Image Banner',
            action:[],
        },
        {
            id: 3,
            bannerName: 'Trendify Banner',
            bannerType: 'Group Banner',
            imageCount: '2 Image Banner',
            action:[],
        },
        {
            id: 4,
            bannerName: 'Brand Banner',
            bannerType: 'Single Banner',
            imageCount: '1 Image Banner',
            action:[],
        },
        {
            id: 5,
            bannerName: 'Collage Banner',
            bannerType: 'Group Banner',
            imageCount: '4 Image Banner',
            action:[],
        },
    

    ]
}

export const mobileBannerColumns = {
    column: [
        {
            name: 'SL',
            selector: row => row.id,
        },
        {
            name: 'Banner Name',
            selector: row => row.bannerName,
        },
        {
            name: 'Banner Type',
            selector: row => row.bannerType,
        },
        {
            name: 'Image Count',
            selector: row => row.imageCount,
        },
        {
            name: 'Action',
            selector: row => <div className="actionBtns"><Link to={AuthenticatedRoutes.viewSingleBanner} ><button><FiEye /></button></Link><button><GoPencil /></button><button><MdDeleteOutline /></button></div>,
        },
    ]
};