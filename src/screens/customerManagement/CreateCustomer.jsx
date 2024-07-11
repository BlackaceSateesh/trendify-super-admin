import React from 'react'
import DashboardInnerTitle from '../../components/dashboard/DashboardInnerTitle'
import TextInput from '../../components/ui/TextInput'
import ButtonMain from '../../components/ui/ButtonMain'
import '../../styles/dashboard/ResponseTicket.css';
import SelectInput from '../../components/ui/SelectInput';


const CreateCustomer = () => {
  return (
    <>
       <div className="CreateCustomer sectionContainer">
                <DashboardInnerTitle name='Create Customer' />

                    <div className="inputField">
                        <TextInput labelName='Customer Name' value='Rajat Pradhan' />
                        <TextInput labelName='Customer Email' value='rajat.pradhan@vikisol.in' />
                        <TextInput labelName='Customer Password' value='***********' />
                        <TextInput labelName='Confirm Customer Password' value='***********' />
                        <TextInput labelName='Customer Mobile Number' value='7024393158' />
                        <SelectInput labelName='Customer Gender' option='Male' />

                    </div>
                    <div className="centerBtns">
                        <ButtonMain btnColor='green' name='Submit' />
                    </div>
                </div>
    </>
  )
}

export default CreateCustomer
