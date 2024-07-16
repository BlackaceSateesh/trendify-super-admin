import React from "react";
import TextInput from "../../components/ui/TextInput";
import TextInputWithEye from "../../components/ui/TextInputWithEye";
import ButtonMain from "../../components/ui/ButtonMain";

const RaiderVerification = () => {
  return (
    <>
      <div className="RaiderVerification sectionContainer">
        <div className="inputField">
          <TextInput labelName="Full Name" value="Rajat Pradhan" />
          <TextInput labelName="Mobile Number" value="+91 7024393158" />
          <TextInput labelName="Verification ID" value="9253 9217 3150" />
          <TextInput labelName="City" value="Bhopal" />
          <TextInput labelName="State" value="Madhya Pradesh" />
          <TextInputWithEye labelName="Raider Selfie" value="Image.png" />
        </div>
        {/* btns */}
        <div className="centerBtns">
          <ButtonMain btnColor='red' name='Reject' />
          <ButtonMain btnColor='green' name='Approve' />
        </div>
      </div>
    </>
  );
};

export default RaiderVerification;
