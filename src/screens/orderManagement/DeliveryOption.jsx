import React from "react";
import TextInput from "../../components/ui/TextInput";
import SelectInput from "../../components/ui/SelectInput";
import DashboardInnerTitle from "../../components/dashboard/DashboardInnerTitle";
import CheckboxInput from "../../components/ui/CheckboxInput";
import ButtonMain from "../../components/ui/ButtonMain";
import '../../styles/dashboard/DeliveryOption.css'
const DeliveryOption = () => {
  return (
    <>
      <div className="DeliveryOption sectionContainer">
        <div className="DeliveryOption_inner">
          <DashboardInnerTitle name="Select Delivery Services" />

          <div className="inputField">
            <SelectInput labelName="Select Delivery Services" options={["Choose"]} />
            <TextInput labelName="Track ID" value="Completed" />
            <TextInput labelName="Pickup Date" value="06/05/2001" />
            <TextInput labelName="Pickup Time" value="8:30 PM to 12:30 AM" />
          </div>
        </div>
        <div className="DeliveryOption_inner">
          <DashboardInnerTitle name="Delivery Options" />
          <div className="options">
            <CheckboxInput labelName="Collect payment on delivery (C. O. D.)" />
            <CheckboxInput labelName="Open Box Delivery" />
            <CheckboxInput labelName="On Delivery Cancellation" />
            <CheckboxInput labelName="Instant Return / Refund" />
          </div>
        </div>
        <div className="centerBtns">
          <ButtonMain btnColor="green" name="Confirm Pickup" />
          <ButtonMain name="Cancel Pickup" />
          <ButtonMain name="Save as Draft" />
          <ButtonMain name="Back" />
        </div>
      </div>
    </>
  );
};

export default DeliveryOption;
