import { FiEye } from "react-icons/fi";
import { GoPencil } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";


// dummy data 

export const customerList = {
    data: [
        {
            id: 1,
            name: 'Rajat Pradhan',
            email:'rajat.pradhan@vikisol.in',
            mobile:'7024393158',
            gender:'Male',
            action:[],
        },
        {
            id: 2,
            name: 'Vimal Pandey',
            email:'vimal.pandey@vikisol.in',
            mobile:'7024393158',
            gender:'Male',
            action:[],
        },
        {
            id: 3,
            name: 'Vivek Pandey',
            email:'vivek.pandey@vikisol.in',
            mobile:'7024393158',
            gender:'Male',
            action:[],
        },
        {
            id: 4,
            name: 'Syam Seeli',
            email:'syam.seeli@vikisol.in',
            mobile:'7024393158',
            gender:'Male',
            action:[],
        },

    ]
}

export const customerColumns = {
    column: [
        {
            name: 'Id',
            selector: row => row.id,
        },
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Email',
            selector: row => row.email,
        },
        {
            name: 'Mobile',
            selector: row => row.mobile,
        },
        {
            name: 'Gender',
            selector: row => row.gender,
        },
        {
            name: 'Action',
            selector: row => <div className="actionBtns"><button><GoPencil /></button><button><MdDeleteOutline /></button></div>,
        },
    ]
};
