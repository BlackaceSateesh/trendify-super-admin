import { FiEye } from "react-icons/fi";
import { GoPencil } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthenticatedRoutes } from "../routes";


export const purchaseHistoryList = {
    data: [
        {
            id: 1,
            bannerName: 'Hero Banner',
            image: require('../../assests/dashboard/productImg.png'),
            productId: 'MHJ2J522',
            paymentMethod:'Bank',
            deliveryStatus: 'Delivered',
            purchaseDate: '22 ocy 2024',
            deliveryDate: '26 oct 2024',
            price:'1,00,000',
        },
        {
            id: 2,
            bannerName: 'Slider Banner',
            image: require('../../assests/dashboard/productImg.png'),
            productId: 'MHJ2J522',
            paymentMethod:'Bank',
            deliveryStatus: 'Delivered',
            purchaseDate: '22 ocy 2024',
            deliveryDate: '26 oct 2024',
            price:'1,00,000',
        },
        {
            id: 3,
            bannerName: 'Trendify Banner',
            image: require('../../assests/dashboard/productImg.png'),
            productId: 'MHJ2J522',
            paymentMethod:'Bank',
            deliveryStatus: 'Delivered',
            purchaseDate: '22 ocy 2024',
            deliveryDate: '26 oct 2024',
            price:'1,00,000',
        },
        {
            id: 4,
            bannerName: 'Brand Banner',
            image: require('../../assests/dashboard/productImg.png'),
            productId: 'MHJ2J522',
            paymentMethod:'Bank',
            deliveryStatus: 'Delivered',
            purchaseDate: '22 ocy 2024',
            deliveryDate: '26 oct 2024',
            price:'1,00,000',
        },
        {
            id: 5,
            bannerName: 'Hero Banner',
            image: require('../../assests/dashboard/productImg.png'),
            productId: 'MHJ2J522',
            paymentMethod:'Bank',
            deliveryStatus: 'Delivered',
            purchaseDate: '22 ocy 2024',
            deliveryDate: '26 oct 2024',
            price:'1,00,000',
        },
        {
            id: 6,
            bannerName: 'Slider Banner',
            image: require('../../assests/dashboard/productImg.png'),
            productId: 'MHJ2J522',
            paymentMethod:'Bank',
            deliveryStatus: 'Delivered',
            purchaseDate: '22 ocy 2024',
            deliveryDate: '26 oct 2024',
            price:'1,00,000',
        }

    ]
}

export const purchaseHistoryColumns = {
    column: [
        {
            name: 'SL',
            selector: row => row.id,
        },
        {
            name: 'Image',
            selector: row => <div className="raiderImg"><img src={row.image} alt="" /></div>,
        },
        {
            name: 'Product ID',
            selector: row => row.productId,
        },
        {
            name: 'Payment Methods',
            selector: row => row.paymentMethod,
        },
        {
            name: 'Delivery Status',
            selector: row => row.deliveryStatus,
        },
        {
            name: 'Purchase Date',
            selector: row => row.purchaseDate,
        },
        {
            name: 'Delivery Date',
            selector: row => row.deliveryDate,
        },
        {
            name: 'Price (Rs)',
            selector: row => row.price,
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