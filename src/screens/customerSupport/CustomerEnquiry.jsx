import React from "react";
import SearchBoxTable from "../../components/ui/SearchBoxTable";
import SelectInput from "../../components/ui/SelectInput";
import ButtonWithIcon from "../../components/ui/ButtonWithIcon";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { Tab, Tabs } from "react-bootstrap";
import AllTicketCard from "../../components/dashboard/AllTicketCard";
import userPic from '../../assests/dashboard/userlogo.png';
import '../../styles/dashboard/CustomerEnquiry.css'

const CustomerEnquiry = () => {
  return (
    <>
      <div className="CustomerEnquiry">
        <div className="CustomerEnquiry_head">
          <div className="search_list">
            <SearchBoxTable placeholderValue="Search List" />
          </div>
          <div className="filter">
            <SelectInput option="Select Priority" />
            <SelectInput option="This Week" />
            <ButtonWithIcon icon={<HiOutlinePencilAlt />} name="New Ticket" />
          </div>
        </div>


        <div className="CustomerEnquiry_tab">
                    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                        <Tab eventKey={1} title="All Tickets">
                            <div className="allTicket">
                                <AllTicketCard date=' 12:45 AM' statusClassName='notDeliver' orderStatus='Order not deliver yet' ticketId='Ticket# TN-003' userName='Rajat Pradhan' userPic={userPic} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
                                <AllTicketCard date=' 12:45 AM' statusClassName='pending' orderStatus='Order not deliver yet' ticketId='Ticket# TN-003' userName='Rajat Pradhan' userPic={userPic} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
                                <AllTicketCard date=' 12:45 AM' statusClassName='deliver' orderStatus='Order not deliver yet' ticketId='Ticket# TN-003' userName='Rajat Pradhan' userPic={userPic} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
                                <AllTicketCard date=' 12:45 AM' statusClassName='notDeliver' orderStatus='Order not deliver yet' ticketId='Ticket# TN-003' userName='Rajat Pradhan' userPic={userPic} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
                            </div>
                        </Tab>
                        <Tab eventKey={2} title="New">
                            Tab New content
                        </Tab>
                       
                        <Tab eventKey={3} title="On-Going">
                            Tab Going content
                        </Tab>
                       
                        <Tab eventKey={4} title="Resolved">
                            Tab Resolved content
                        </Tab>
                       
                       
                    </Tabs>
                </div>


      </div>
    </>
  );
};

export default CustomerEnquiry;
