import React from 'react';


const NotificationCard = ({icon, time, text, tag, status}) => {
  return (
    <>
      <div className={`NotificationCard ${status}`}>
        <div className="icon">{icon}</div>
        <div className="content">
            <div className="head">
                <p className='heading'>Seller Management <span className='dot'></span> <span className='time'>{time}</span> </p>
                <span className="tag">{tag}</span>
            </div>
            <h6 className="text">{text}</h6>
        </div>
      </div>
    </>
  )
}

export default NotificationCard
