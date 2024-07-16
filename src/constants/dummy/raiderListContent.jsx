import { FiEye } from "react-icons/fi";
import { GoPencil } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthenticatedRoutes } from "../routes";
import UserLogo from "../../assests/dashboard/userlogo.png";

export const raiderList = {
    data: [
        {
            id: 1,
            image: UserLogo,
            raiderId: '0123',
            fullName: 'Rajat Pradhan',
            status: 'Active',
            area: 'Bhopal',
            joiningDate:'22 oct 2024',
            salary: '1,00,000',
            action:[],
        },
        {
            id: 2,
            image: UserLogo,
            raiderId: '0123',
            fullName: 'Rajat Pradhan',
            status: 'Active',
            area: 'Bhopal',
            joiningDate:'22 oct 2024',
            salary: '1,00,000',
            action:[],
        },
        {
            id: 3,
            image: UserLogo,
            raiderId: '0123',
            fullName: 'Rajat Pradhan',
            status: 'Active',
            area: 'Bhopal',
            joiningDate:'22 oct 2024',
            salary: '1,00,000',
            action:[],
        },
        {
            id: 4,
            image: UserLogo,
            raiderId: '0123',
            fullName: 'Rajat Pradhan',
            status: 'Active',
            area: 'Bhopal',
            joiningDate:'22 oct 2024',
            salary: '1,00,000',
            action:[],
        },

    ]
}

export const raiderColumns = {
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
            name: 'Raider ID',
            selector: row => row.raiderId,
        },
        {
            name: 'Full Name',
            selector: row => row.fullName,
        },
        {
            name: 'Status',
            selector: row => row.status,
        },
        {
            name: 'Joining Date',
            selector: row => row.joiningDate,
        },
        {
            name: 'Area',
            selector: row => row.area,
        },
        {
            name: 'Salary',
            selector: row => row.salary,
        },
       
    ]
};

