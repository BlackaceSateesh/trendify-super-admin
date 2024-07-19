import React from 'react';
import { Link } from 'react-router-dom';
import { AuthenticatedRoutes } from '../../constants/Routes';

const AllTicketCard = ({userPic, statusClassName, userName, ticketId, date, orderStatus, description}) => {
  return (
    <>
      <div className="AllTicketCard">
      <div className="btms">
          <div className="username">
            <div className="pic">
              <img src={userPic} alt="" />
            </div>
            <p>{userName}</p>
          </div>
          <Link className='openTicket' to={AuthenticatedRoutes.responseTicket} >Open Ticket</Link>
        </div>
        <div className="head">
          <div className="details">
            <span className={`circle ${statusClassName}`}></span>
            <h6>{ticketId}</h6>
          </div>
          <span className='date'>Posted at {date}</span>
        </div>
        <h6 className='status'>{orderStatus}</h6>
        <p className='desc'>{description}</p>
     
      </div>
    </>
  )
}

export default AllTicketCard;
