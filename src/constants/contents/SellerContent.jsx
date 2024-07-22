import { FiEye } from 'react-icons/fi';

export const VendorStatus = {
    REJECTED: "Rejected",
    APPROVED: "Approved",
    PENDING: "Pending",
    REQUESTED: "Requested",
}

export const DataColumnApproved = [
    {
        name: 'SL',
        selector: (row) => row.id,
    },
    {
        name: 'Seller',
        selector: (row) => (
            <div className="productImg">
                <img src={row.img} alt="" />
            </div>
        )
    },
    {
        name: 'Seller Name',
        selector: (row) => row.name,
    },
    {
        name: 'Seller ID',
        selector: (row) => row.sellerId,
    },
    {
        name: 'Business Type',
        selector: (row) => row.category,
    },
    {
        name: 'Verification Status',
        selector: (row) => row.status,
    },
    {
        name: 'Action',
        selector: (row) => (
            <div className="actionBtns">
                <button onClick={() => row.action(row)}>
                    <FiEye />
                </button>
            </div>
        )
    }
]

export const DataColumnRejected = [
    {
        name: 'SL',
        selector: (row) => row.id,
    },
    {
        name: 'Seller',
        selector: (row) => (
            <div className="productImg">
                <img src={row.img} alt="" />
            </div>
        )
    },
    {
        name: 'Seller Name',
        selector: (row) => row.name,
    },
    {
        name: 'Seller ID',
        selector: (row) => row.sellerId,
    },
    {
        name: 'Business Type',
        selector: (row) => row.category,
    },
    {
        name: 'Verification Status',
        selector: (row) => row.status,
    },
    {
        name: 'Reason',
        selector: (row) => row.reason,
    },
    {
        name: 'Action',
        selector: (row) => (
            <div className="actionBtns">
                <button onClick={() => row.action(row)}>
                    <FiEye />
                </button>
            </div>
        )
    }
]