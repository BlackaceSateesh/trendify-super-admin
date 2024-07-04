import React from 'react';
import { SlLocationPin } from "react-icons/sl";
import '../../styles/dashboard/AddressProfileCard.css';

const AdressProfileCard = ({type, address, mobile, category}) => {
    return (
        <>
            <div className="AdressProfileCard">
                <div className="icon">
                    <SlLocationPin />
                </div>
                <div className="details">
                    <div className="head">
                        <h4>{type}</h4>
                        {category ? <span>{category}</span> : ''}
                        
                    </div>
                    <p>{address}</p>
                    <p>{mobile}</p>
                </div>
            </div>
        </>
    )
}

export default AdressProfileCard;
