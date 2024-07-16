import React from 'react';
import '../../styles/dashboard/ResponseTicket.css';
import DashboardInnerTitle from '../../components/dashboard/DashboardInnerTitle';
import TextInput from '../../components/ui/TextInput';
import SelectInput from '../../components/ui/SelectInput';
import TextareaInput from '../../components/ui/TextareaInput';
import ButtonMain from '../../components/ui/ButtonMain';

const CreateTicket = () => {
    return (
        <>
            <div className="CreateTicket ResponseTicket_inner inner dashboard_center sectionContainer">
                <DashboardInnerTitle name='Create Ticket' />

                <div className="replyTicket">
                    <h6 className='heading'>Create Quick Ticket</h6>
                    <p className='subheading'>Write and address new queries and issues</p>
                    <div className="inputField">
                        <TextInput labelName='Customer Email' value='shyam.vendor@gmail.com' />
                        <SelectInput labelName='Request Ticket Type' option='Delivery Issue' />
                        <SelectInput labelName='Status' option='On-Going' />
                        <TextareaInput placeholder='Type ticket issue here..' labelName='Ticket Body' />
                    </div>
                    <div className="submitBtn">
                        <ButtonMain name='Sent Reply' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateTicket;
