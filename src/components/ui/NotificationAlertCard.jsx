import React from 'react'

const NotificationAlertCard = ({key , name, status, para, read, priority, priorityLevel, priorityStatus, date}) => {
  return (
    <>
      <div key={key} className="NotificationAlertCard">
        <div className="head">
            <span className='heading'><h6>{name}</h6> <span className={`tag ${status=== 'seen'? 'seen' : status=== 'unseen'? 'unseen' : status=== 'new'? 'new' : ''}`}>{status}</span></span>
            {!read? <button className='readMarkBtn'>Mark as read</button> : ''}
        </div>
        <p className="para">{para}</p>
        <div className="priority">
            <h6 className={`txt ${priorityLevel==='high' ? 'high' : priorityLevel==='medium' ? 'medium' : 'low' }`}>{priority}</h6>
            <p className="priorityStatus para">{priorityStatus}</p>
        </div>
        <p className="date">{date}</p>
      </div>
    </>
  )
}

export default NotificationAlertCard;
