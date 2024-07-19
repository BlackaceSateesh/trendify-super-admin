import { FiEye } from "react-icons/fi";

export const ProductStatus = {
    REQUESTED: "Requested",
    REJECTED: "Rejected",
    DRAFTED: "Drafted",
    APPROVED: "Approved"
};

export const productColumns = {
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
            name: "Stock",
            selector: (row) => row.stock
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
