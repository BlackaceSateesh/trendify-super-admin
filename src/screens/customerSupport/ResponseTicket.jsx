import React from 'react'
import '../../styles/dashboard/ResponseTicket.css';
import TextInput from '../../components/ui/TextInput';
import SelectInput from '../../components/ui/SelectInput';
import TextareaInput from '../../components/ui/TextareaInput';
import ButtonMain from '../../components/ui/ButtonMain';
import DashboardInnerTitle from '../../components/dashboard/DashboardInnerTitle';

const ResponseTicket = () => {
    return (
        <>
            <div className="ResponseTicket sectionContainer">
                <DashboardInnerTitle name='Response Ticket ' />
                <div className="ResponseTicket_inner">
                    <div className="head">
                        <div className="name">
                            <span className='circle'></span>
                            <h6>Ticket#  TN-003</h6>
                        </div>
                        <div className="date">
                            <p>Posted at 12:45 AM</p>
                        </div>
                    </div>
                    <div className="details">
                        <p className='status'> Order not delivered yet </p>
                        <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div className="replyTicket">
                        <h6 className='heading'>Reply to Ticket</h6>
                        <div className="inputFields">
                            <TextInput labelName='Customer Email' value='shyam.vendor@gmail.com' />
                            <SelectInput labelName='Request Ticket Type' options={["Choose"]} />
                            <SelectInput labelName='Status' options={["Choose"]} />
                            <TextareaInput placeholder='Type ticket issue here..' labelName='Ticket Body' />
                        </div>
                        <div className="submitBtn">
                            <ButtonMain name='Sent Reply' />
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default ResponseTicket;
