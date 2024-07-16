import { FiEye } from "react-icons/fi";
import { GoPencil } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";
import UserLogo from "../../assests/dashboard/userlogo.png";

// dummy data 

export const raiderDetailList = {
    data: [
        {
            id: 1,
            productType: 'Beetlejuice',
            productImg: UserLogo,
            category:'Mobile',
            brand:'Samsung',
            productName:'S22 Ultra',
            productID:'A15PM',
            unit:'Quantity (q)',
            paymentStatus:'Pending',
            deliveryStatus:'Pending',
            price:'1,00,000',
            action:[],
        },
        {
            id: 2,
            productType: 'Beetlejuice',
            productImg: UserLogo,
            category:'Mobile',
            brand:'Samsung',
            productName:'S22 Ultra',
            productID:'A15PM',
            unit:'Quantity (q)',
            paymentStatus:'Cancel',
            deliveryStatus:'Cancel',
            price:'1,00,000',
            action:[],
        },
        {
            id: 3,
            productType: 'Beetlejuice',
            productImg: UserLogo,
            category:'Mobile',
            brand:'Samsung',
            productName:'S22 Ultra',
            productID:'A15PM',
            unit:'Quantity (q)',
            paymentStatus:'Paid',
            deliveryStatus:'Delivered',
            price:'1,00,000',
            action:[],
        },

    ]
}

export const raiderDetailColumns = {
    column: [
        {
            name: 'SL',
            selector: row => row.id,
        },
        {
            name: 'Image',
            selector: row => <div className="productImg"><img src={row.productImg} alt="" /></div>,
        },
        {
            name: 'Product Type',
            selector: row => row.productType,
        },
        {
            name: 'Category',
            selector: row => row.category,
        },
        {
            name: 'Brand',
            selector: row => row.brand,
        },
        {
            name: 'Product Name',
            selector: row => row.productName,
        },
        {
            name: 'Product ID',
            selector: row => row.productID,
        },
        {
            name: 'Unit',
            selector: row => row.unit,
        },
        {
            name: 'Payment Status',
            selector: row =><span className={`paymentStatus ${ row.paymentStatus}`} >{ row.paymentStatus}</span>,
        },
        {
            name: 'Delivery Status',
            selector: row => <span className={`paymentStatus ${ row.deliveryStatus}`} >{ row.deliveryStatus}</span>,
        },
        {
            name: 'Price (Rs)',
            selector: row => row.price,
        },
        {
            name: 'Action',
            selector: row => <div className="actionBtns"><button><FiEye /></button><button><GoPencil /></button><button><MdDeleteOutline /></button></div>,
            

        },
    ]
};
