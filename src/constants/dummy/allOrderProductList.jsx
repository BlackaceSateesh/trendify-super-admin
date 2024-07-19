import { FiEye } from "react-icons/fi";
import { GoPencil } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";
import ProductImage from "../../assests/dashboard/productImg.png";

// dummy data 

export const allOrderProductLists = {
    data: [
        {
            id: 1,
            productType: 'Beetlejuice',
            productImg: ProductImage,
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
            productImg: ProductImage,
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
            productImg: ProductImage,
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

export const OrderStatusReport = {
    PROCESSING: "PROCESSING",
    DISPATCHED: "DISPATCHED",
    SHIPPED: "SHIPPED",
    DELIVERED: "DELIVERED",
    CANCELLED: "CANCELLED",
    RETURN: "RETURN",
    ORDER_PLACED: "ORDER_PLACED",
    OUT_FOR_DELIVERY: "OUT_FOR_DELIVERY",
};

export const OrderDeliveryStatus = [
    {
        key: "ORDER_PLACED",
        value: "Order Placed"
    },
    {
        key: "PROCESSING",
        value: "Processing"
    },
    {
        key: "DISPATCHED",
        value: "Dispatched"
    },
    {
        key: "SHIPPED",
        value: "Shipped"
    },
    {
        key: "OUT_FOR_DELIVERY",
        value: "Out for Delivery"
    },
    {
        key: "DELIVERED",
        value: "Delivered"
    }
]

export const OrderStatus = {
    ORDER_PLACED: "Order Placed",
    PROCESSING: "Processing",
    DISPATCHED: "Dispatched",
    SHIPPED: "Shipped",
    DELIVERED: "Delivered",
    CANCELLED: "Cancelled",
    RETURN: "Return",
    OUT_FOR_DELIVERY: "Out For Delivery",
    REFUNDED: "Refunded",
    REJECTED: "Rejected"
};

export const allOrderProductColumns = {
    column: [
        {
            name: "SL",
            selector: (row) => row.id
        },
        {
            name: "Image",
            selector: (row) => (
                <div className="productImg">
                    <img src={row.productImg} alt="" />
                </div>
            )
        },
        {
            name: "Product Type",
            selector: (row) => row.productType
        },
        {
            name: "Brand",
            selector: (row) => row.brand
        },
        {
            name: "Product Name",
            selector: (row) => row.productName
        },
        {
            name: "Product ID",
            selector: (row) => row.productID
        },
        {
            name: "Quantity",
            selector: (row) => row.quantity
        },
        {
            name: "Payment Status",
            selector: (row) => (
                <span className={`paymentStatus ${row.paymentStatus}`}>
                    {row.paymentStatus}
                </span>
            )
        },
        {
            name: "Payment Type",
            selector: (row) => row.paymentType
        },
        {
            name: "Price (Rs)",
            selector: (row) => row.price
        },
        {
            name: "Action",
            selector: (row) => (
                <div className="actionBtns">
                    <button onClick={() => row.action[0](row)}>
                        <FiEye />
                    </button>
                </div>
            )
        }
    ]
};
