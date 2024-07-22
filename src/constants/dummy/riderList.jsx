import { FiEye } from "react-icons/fi";

export const RiderStatus = {
    APPROVED: "Approved",
    REJECTED: "Rejected",
    REQUESTED: "Requested",
};

export const RiderColumns = [
    {
        name: "SL",
        selector: (row) => row.id
    },
    {
        name: "Image",
        selector: (row) => (
            <div className="productImg">
                <img src={row.userPhotoUrl} alt="" />
            </div>
        )
    },
    {
        name: "Name",
        selector: (row) => row.name
    },
    {
        name: "Phone Number",
        selector: (row) => row.phoneNumber
    },
    {
        name: "Verification ID",
        selector: (row) => row.verificationId
    },
    {
        name: "City",
        selector: (row) => row.city
    },
    {
        name: "State",
        selector: (row) => row.state
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