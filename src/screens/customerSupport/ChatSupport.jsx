import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "../../styles/dashboard/ChatSupport.css";
import { FaPlus } from "react-icons/fa6";
import { RiSendPlaneFill } from "react-icons/ri";
import { BsLink45Deg } from "react-icons/bs";


const ChatSupport = () => {

    // dummy content
    const chatList = [
        {
            pic: require('../../assests/dashboard/userlogo.png'),
            name: 'Vimal Pandey',
            msg: 'Delivery Problem',
            status: 'Completed',
            msgTime : '12m'
        },
        {
            pic: require('../../assests/dashboard/userlogo.png'),
            name: 'User6545456',
            msg: 'Refund not received',
            status: 'Pending',
            msgTime : '20m'
        },
        {
            pic: require('../../assests/dashboard/userlogo.png'),
            name: 'Rajat Pradhan',
            msg: 'Kya haal chaal hai Admin',
            status: 'Priority',
            msgTime : '1d'
        },
    ]

  return (
    <>
      <div className="ChatSupport sectionGap">
        <div className="ChatSupport_tab">
          <Tabs
            defaultActiveKey="user"
            id="chatSupportTab"
            className="chatSupport_tabPannel"
          >
            <Tab eventKey="seller" title="Seller Chats" parent>
            <div className="sectionContainer userChat">
                <div className="userChat_inbox">
                  <div className="head">
                    <h6 className="heading">
                      Inbox <span className="count">12</span>
                    </h6>
                    <button className="plusBtn">
                      <FaPlus />
                    </button>
                  </div>
                  <div className="searchField">
                    <input type="text" placeholder="Search messages" />
                  </div>
                  <div className="memberList">
                    {
                        chatList.map((e, i)=>{
                            if(i===0){
                                return(
                                    <div key={i} className="listCard active">
                                    <div className="pic">
                                        <img src={e.pic} alt="" />
                                    </div>
                                    <div className="content">
                                        <h6 className="name">{e.name}</h6>
                                        <p className="msg">{e.msg}</p>
                                        <span className={`status ${e.status==='Completed' ? 'complete' : e.status==='Pending' ? 'pending' : e.status==='Priority' ? 'priority' : ''}`}>{e.status}</span>
                                    </div>
                                    <span className="msgTime">{e.msgTime}</span>
                                </div>
                                )
                            }else{
                                return(
                                    <div key={i} className="listCard">
                                    <div className="pic">
                                        <img src={e.pic} alt="" />
                                    </div>
                                    <div className="content">
                                        <h6 className="name">{e.name}</h6>
                                        <p className="msg">{e.msg}</p>
                                        <span className={`status ${e.status==='Completed' ? 'complete' : e.status==='Pending' ? 'pending' : e.status==='Priority' ? 'priority' : ''}`}>{e.status}</span>
                                    </div>
                                    <span className="msgTime">{e.msgTime}</span>
                                </div>
                                )
                            }
                      
                        })
                    }
                  
                
                  </div>
                </div>

                {/* user msg detail */}
                <div className="userChat_msg">
                    <div className="top">
                        <div className="pic">
                            <img src={require('../../assests/dashboard/userlogo.png')} alt="" />
                        </div>
                        <div className="content">
                            <h5 className="name">Vimal Pandey</h5>
                            <p><span className="circle"></span> Online</p>
                        </div>
                    </div>
                    <div className="center">


                        {/* left side msg */}

                        <div className="left_side msgContent">
                            <div className="pic">
                            <img src={require('../../assests/dashboard/userlogo.png')} alt="" />
                            </div>
                            <div className="msgbox">
                                <span className="msg">Lorem, ipsum dolor.</span>
                                <span className="msg">Lorem, ipsum dolor.</span>
                                <span className="msg">Lorem, ipsum dolor.</span>
                            </div> 
                        </div>

                        {/* right side msg */}
                        <div className="right_side msgContent">
                            <div className="pic">
                            <img src={require('../../assests/dashboard/userlogo.png')} alt="" />
                            </div>
                            <div className="msgbox">
                                <span className="msg">Lorem, ipsum dolor.</span>
                            </div> 
                        </div>

                             {/* left side msg */}

                             <div className="left_side msgContent">
                            <div className="pic">
                            <img src={require('../../assests/dashboard/userlogo.png')} alt="" />
                            </div>
                            <div className="msgbox">
                                <span className="msg">Lorem, ipsum dolor.</span>
                                <span className="msg">Lorem, ipsum dolor.</span>
                            </div> 
                        </div>

                        {/* right side msg */}
                        <div className="right_side msgContent">
                            <div className="pic">
                            <img src={require('../../assests/dashboard/userlogo.png')} alt="" />
                            </div>
                            <div className="msgbox">
                                <span className="msg">Lorem, ipsum dolor.</span>
                                <span className="msg">Lorem, ipsum dolor.</span>
                                <span className="msg">Lorem, ipsum dolor.</span>
                            </div> 
                        </div>
                             {/* left side msg */}

                             <div className="left_side msgContent">
                            <div className="pic">
                            <img src={require('../../assests/dashboard/userlogo.png')} alt="" />
                            </div>
                            <div className="msgbox">
                                <span className="msg">Lorem, ipsum dolor.</span>
                                <span className="msg">Lorem, ipsum dolor.</span>
                            </div> 
                        </div>
                        {/* right side msg */}
                        <div className="right_side msgContent">
                            <div className="pic">
                            <img src={require('../../assests/dashboard/userlogo.png')} alt="" />
                            </div>
                            <div className="msgbox">
                                <span className="msg">Lorem, ipsum dolor.</span>
                                <span className="msg">Lorem, ipsum dolor.</span>
                                <span className="msg">Lorem, ipsum dolor.</span>
                            </div> 
                        </div>

                        
                      
                    </div>

                        <div className="msgInputBTM">
                            <button className="linkBtn"><BsLink45Deg /></button>
                            <div className="inputField">
                                <input type="text" placeholder="Type a message.." />
                            <button className="send"><RiSendPlaneFill /></button>
                            </div>
                        </div>
                    
                </div>
              </div>
            </Tab>

            {/* user chats tab */}
            <Tab eventKey="user" title="User Chats">
              <div className="sectionContainer userChat">
                <div className="userChat_inbox">
                  <div className="head">
                    <h6 className="heading">
                      Inbox <span className="count">12</span>
                    </h6>
                    <button className="plusBtn">
                      <FaPlus />
                    </button>
                  </div>
                  <div className="searchField">
                    <input type="text" placeholder="Search messages" />
                  </div>
                  <div className="memberList">
                    {
                        chatList.map((e, i)=>{
                            if(i===0){
                                return(
                                    <div key={i} className="listCard active">
                                    <div className="pic">
                                        <img src={e.pic} alt="" />
                                    </div>
                                    <div className="content">
                                        <h6 className="name">{e.name}</h6>
                                        <p className="msg">{e.msg}</p>
                                        <span className={`status ${e.status==='Completed' ? 'complete' : e.status==='Pending' ? 'pending' : e.status==='Priority' ? 'priority' : ''}`}>{e.status}</span>
                                    </div>
                                    <span className="msgTime">{e.msgTime}</span>
                                </div>
                                )
                            }else{
                                return(
                                    <div key={i} className="listCard">
                                    <div className="pic">
                                        <img src={e.pic} alt="" />
                                    </div>
                                    <div className="content">
                                        <h6 className="name">{e.name}</h6>
                                        <p className="msg">{e.msg}</p>
                                        <span className={`status ${e.status==='Completed' ? 'complete' : e.status==='Pending' ? 'pending' : e.status==='Priority' ? 'priority' : ''}`}>{e.status}</span>
                                    </div>
                                    <span className="msgTime">{e.msgTime}</span>
                                </div>
                                )
                            }
                      
                        })
                    }
                  
                
                  </div>
                </div>

                {/* user msg detail */}
                <div className="userChat_msg">
                    <div className="top">
                        <div className="pic">
                            <img src={require('../../assests/dashboard/userlogo.png')} alt="" />
                        </div>
                        <div className="content">
                            <h5 className="name">User6545456</h5>
                            <p><span className="circle"></span> Online</p>
                        </div>
                    </div>
                    <div className="center">


                        {/* left side msg */}

                        <div className="left_side msgContent">
                            <div className="pic">
                            <img src={require('../../assests/dashboard/userlogo.png')} alt="" />
                            </div>
                            <div className="msgbox">
                                <span className="msg">Lorem, ipsum dolor.</span>
                                <span className="msg">Lorem, ipsum dolor.</span>
                                <span className="msg">Lorem, ipsum dolor.</span>
                            </div> 
                        </div>

                        {/* right side msg */}
                        <div className="right_side msgContent">
                            <div className="pic">
                            <img src={require('../../assests/dashboard/userlogo.png')} alt="" />
                            </div>
                            <div className="msgbox">
                                <span className="msg">Lorem, ipsum dolor.</span>
                            </div> 
                        </div>

                             {/* left side msg */}

                             <div className="left_side msgContent">
                            <div className="pic">
                            <img src={require('../../assests/dashboard/userlogo.png')} alt="" />
                            </div>
                            <div className="msgbox">
                                <span className="msg">Lorem, ipsum dolor.</span>
                                <span className="msg">Lorem, ipsum dolor.</span>
                            </div> 
                        </div>

                        {/* right side msg */}
                        <div className="right_side msgContent">
                            <div className="pic">
                            <img src={require('../../assests/dashboard/userlogo.png')} alt="" />
                            </div>
                            <div className="msgbox">
                                <span className="msg">Lorem, ipsum dolor.</span>
                                <span className="msg">Lorem, ipsum dolor.</span>
                                <span className="msg">Lorem, ipsum dolor.</span>
                            </div> 
                        </div>
                             {/* left side msg */}

                             <div className="left_side msgContent">
                            <div className="pic">
                            <img src={require('../../assests/dashboard/userlogo.png')} alt="" />
                            </div>
                            <div className="msgbox">
                                <span className="msg">Lorem, ipsum dolor.</span>
                                <span className="msg">Lorem, ipsum dolor.</span>
                            </div> 
                        </div>
                        {/* right side msg */}
                        <div className="right_side msgContent">
                            <div className="pic">
                            <img src={require('../../assests/dashboard/userlogo.png')} alt="" />
                            </div>
                            <div className="msgbox">
                                <span className="msg">Lorem, ipsum dolor.</span>
                                <span className="msg">Lorem, ipsum dolor.</span>
                                <span className="msg">Lorem, ipsum dolor.</span>
                            </div> 
                        </div>

                        
                      
                    </div>

                        <div className="msgInputBTM">
                            <button className="linkBtn"><BsLink45Deg /></button>
                            <div className="inputField">
                                <input type="text" placeholder="Type a message.." />
                            <button className="send"><RiSendPlaneFill /></button>
                            </div>
                        </div>
                    
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default ChatSupport;
