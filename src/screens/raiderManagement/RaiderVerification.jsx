import React, { useState } from "react";
import TextInput from "../../components/ui/TextInput";
import TextInputWithEye from "../../components/ui/TextInputWithEye";
import ViewImagePopup from "../../components/ui/popups/ViewImagePopup";
import ButtonMain from "../../components/ui/ButtonMain";
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { AuthenticatedRoutes } from "../../constants/Routes";
import { acceptRider, rejectRider } from "../../api/rider-api";
import { RiderStatus } from "../../constants/dummy/riderList";
import SpinnerLoader from "../../components/ui/SpinnerLoader";

/*
{
      "name": "string",
      "phoneNumber": "string",
      "verificationId": "string",
      "verificationPhotoUrl": "string",
      "userPhotoUrl": "string",
      "city": "string",
      "createdDate": "2024-07-19T09:33:59.500Z",
      "state": "string",
      "password": "string",
      "riderStatus": "Approved"
    }
*/
const RaiderVerification = () => {
  const location = useLocation();
  const rider = location?.state?.rider;
  const navigate = useNavigate();

  const [viewImagePopup, setViewImagePopup] = useState({
    show: false,
    image: "",
    heading: ""
  });
  const [loadingAccept, setLoadingAccept] = useState(false);
  const [loadingReject, setLoadingReject] = useState(false);

  const handleAccept = async () => {
    if (loadingAccept) return;
    setLoadingAccept(true);
    try {
      await acceptRider(rider?.id);
      navigate(AuthenticatedRoutes.raiderLists);
    } catch (error) {
      console.log(error?.response?.data?.message);
    } finally {
      setLoadingAccept(false);
    }
  }

  const handleReject = async () => {
    if (loadingReject) return;
    setLoadingReject(true);
    try {
      await rejectRider(rider?.id);
      navigate(AuthenticatedRoutes.raiderLists);
    } catch (error) {
      console.log(error?.response?.data?.message);
    } finally {
      setLoadingReject(false);
    }
  }

  const handleImagePopup = (image, heading) => {
    setViewImagePopup({
      show: true,
      image: image || "https://via.placeholder.com/150",
      heading: heading
    });
  }

  return !rider ? <Navigate to={AuthenticatedRoutes.raiderLists} /> : (
    <>
      <div className="RaiderVerification sectionContainer">
        <div className="inputField">
          <TextInput labelName="Full Name" value={rider?.name} disabled={true} />
          <TextInput labelName="Mobile Number" value={rider?.phoneNumber} disabled={true} />
          <TextInput labelName="City" value={rider?.city} disabled={true} />
          <TextInput labelName="State" value={rider?.state} disabled={true} />
          <TextInputWithEye
            labelName="Raider Selfie"
            value={rider?.userPhotoUrl?.split('/').pop()}
            onShow={() => handleImagePopup(rider?.userPhotoUrl, "Raider Selfie")}
          />
          <TextInput labelName="Verification ID" value={rider?.verificationId} disabled={true} />
          <TextInputWithEye
            labelName="Verification ID Picture"
            value={rider?.verificationPhotoUrl?.split('/').pop()}
            onShow={() => handleImagePopup(rider?.verificationPhotoUrl, "Verification ID")}
          />
          <TextInput labelName="Created Date" value={rider?.createdDate} disabled={true} />
        </div>
        {
          location.state.tab === RiderStatus.REQUESTED && (
            <div className="centerBtns">
              <ButtonMain
                btnColor='red'
                name={loadingReject ? <SpinnerLoader /> : 'Reject'}
                onClick={handleReject}
              />
              <ButtonMain
                btnColor='green'
                name={loadingAccept ? <SpinnerLoader /> : 'Accept'}
                onClick={handleAccept}
              />
            </div>
          )
        }
      </div>

      <ViewImagePopup
        show={viewImagePopup.show}
        onHide={() => setViewImagePopup({ show: false, image: "", heading: "" })}
        className="viewImagePopup"
        heading={viewImagePopup.heading}
        image={viewImagePopup.image}
      />
    </>
  );
};

export default RaiderVerification;
