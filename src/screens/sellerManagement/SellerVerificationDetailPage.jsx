import React, { useState } from "react";
import DashboardInnerTitle from "../../components/dashboard/DashboardInnerTitle";
import TextInput from "../../components/ui/TextInput";
import TextInputWithEye from "../../components/ui/TextInputWithEye";
import "../../styles/dashboard/SellerVerificationDetailPage.css";
import ButtonMain from "../../components/ui/ButtonMain";
import ViewImagePopup from "../../components/ui/popups/ViewImagePopup";
import ProfileRejectionPopup from "../../components/ui/popups/ProfileRejectionPopup";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { acceptVendor, rejectVendor } from "../../api/vendor-api";
import { AuthenticatedRoutes } from "../../constants/routes";
import { VendorStatus } from "../../constants/contents/SellerContent";

const SellerVerificationDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const seller = location.state?.seller;

  const [viewImagePopup, setViewImagePopup] = useState({
    show: false,
    image: "",
    heading: ""
  });
  const [rejectPopup, setRejectPopup] = useState(false);

  const handleImagePopup = (image, heading) => {
    setViewImagePopup({
      show: true,
      image: image,
      heading: heading
    });
  }

  const handleAccept = async () => {
    try {
      await acceptVendor(seller?.id);
      navigate(AuthenticatedRoutes.dashboard);
    } catch (error) {
      console.log(error);
    }
  }

  const handleReject = async (reason) => {
    try {
      await rejectVendor(seller?.id, reason);
      navigate(AuthenticatedRoutes.dashboard);
    } catch (error) {
      console.log(error);
    }
  }

  return seller === undefined ? <Navigate to={AuthenticatedRoutes.dashboard} /> : (
    <>
      <div className="SellerVerificationDetailPage sectionGap">
        <div className="general sectionContainer">
          <div className="head">
            <DashboardInnerTitle name="General Detail Vendor" />
          </div>
          <div className="inputField">
            <TextInput
              labelName="Vendor Name"
              required="*"
              value={seller?.vendorName}
            />
            <TextInputWithEye
              labelName="Aadhar Card"
              required="*"
              value={seller?.aadhaarImageUrl.split("/").pop()}
              onShow={() => handleImagePopup(seller?.aadhaarImageUrl, "Aadhar Card")}
            />
            <TextInputWithEye
              labelName="Pancard"
              required="*"
              value={seller?.panCardImageUrl.split("/").pop()}
              onShow={() => handleImagePopup(seller?.panCardImageUrl, "Pancard")}
            />
            <TextInput
              labelName="Primary Contact Number"
              required="*"
              value={seller?.primaryContactNumber}
            />
            <TextInput
              labelName="Secondary Contact Number"
              required="*"
              value={seller?.secondaryContactNumber}
            />
            <TextInputWithEye
              labelName="Address Proof"
              required="*"
              value={seller?.addressProofImageUrl.split("/").pop()}
              onShow={() => handleImagePopup(seller?.addressProofImageUrl, "Address Proof")}
            />
            <TextInput
              labelName="E-mail"
              required="*"
              value={seller?.email}
            />
            <TextInput
              labelName="Designation of Vendor"
              required="*"
              value={seller?.vendorDesignation}
            />
            <TextInput
              labelName="Country"
              required="*"
              value={seller?.country}
            />
            <TextInput
              labelName="City"
              required="*"
              value={seller?.city}
            />
            <TextInput
              labelName="Pincode / Zipcode"
              required="*"
              value={seller?.pinCode}
            />
          </div>
        </div>
        <div className="companyDetails sectionContainer">
          <div className="head">
            <DashboardInnerTitle name="Company / Shop Details" />
          </div>
          <div className="inputField">
            <TextInput
              labelName="Company / Shop Name"
              required="*"
              value={seller?.companyName}
            />
            <TextInput
              labelName="Business Type"
              required="*"
              value={seller?.businessType}
            />
            <TextInputWithEye
              labelName="MCA"
              required=""
              value={seller?.mcaImageUrl.split("/").pop()}
              onShow={() => handleImagePopup(seller?.mcaImageUrl, "MCA")}
            />
            <TextInput
              labelName="MCA Expiry Date"
              required="*"
              value={seller?.mcaExpiryDate}
            />
            <TextInput
              labelName="Primary Contact Number"
              required="*"
              value={seller?.companyPrimaryContactNumber}
            />
            <TextInput
              labelName="Secondary Contact Number"
              required=""
              value={seller?.companySecondaryContactNumber}
            />
            <TextInput
              labelName="Primary Contact Email"
              required="*"
              value={seller?.companyPrimaryEmail}
            />
            <TextInput
              labelName="Secondary Contact Email"
              required="*"
              value={seller?.companySecondaryEmail}
            />
            <TextInput labelName="NDA" required="*" value={seller?.nda} />
            <TextInput labelName="NAD Expiry Date" required="*" value={seller?.ndaExpiry} />
            <TextInput
              labelName="GSTIN"
              required="*"
              value={seller?.gstIn}
            />
            <TextInputWithEye
              labelName="GST Certificate"
              required=""
              value={seller?.gstCertificateImageUrl.split("/").pop()}
              onShow={() => handleImagePopup(seller?.gstCertificateImageUrl, "GST Certificate")}
            />
            <TextInputWithEye
              labelName="Upload Business Aadhar Card"
              required="*"
              value={seller?.businessAadhaarCardImageUrl.split("/").pop()}
              onShow={() => handleImagePopup(seller?.businessAadhaarCardImageUrl, "Business Aadhar Card")}
            />
            <TextInputWithEye
              labelName="Upload Business Pancard"
              required="*"
              value={seller?.businessPanCardImageUrl.split("/").pop()}
              onShow={() => handleImagePopup(seller?.businessPanCardImageUrl, "Business Pancard")}
            />
            <TextInput
              labelName="Pancard Number"
              required="*"
              value={seller?.panCardNumber}
            />
            <TextInput
              labelName="Business Register Address"
              required="*"
              value={seller?.registeredAddress}
            />
            <TextInput labelName="Country" required="*" value={seller?.companyCountry} />
            <TextInput labelName="State" required="*" value={seller?.companyState} />
            <TextInput labelName="City" required="*" value={seller?.companyCity} />
            <TextInput
              labelName="Pincode / Zipcode"
              required="*"
              value={seller?.companyPinCode}
            />
            <TextInputWithEye
              labelName="Upload Address Proof"
              required="*"
              value={seller?.businessAddressProofImageUrl.split("/").pop()}
              onShow={() => handleImagePopup(seller?.businessAddressProofImageUrl, "Business Address Proof")}
            />
          </div>
        </div>
        <div className="companyDetails sectionContainer">
          <div className="head">
            <DashboardInnerTitle name="Bank Details" />
          </div>
          <div className="inputField">
            <TextInput
              labelName="Bank Name"
              required="*"
              value={seller?.bankName}
            />
            <TextInput
              labelName="Bank A/c No"
              required="*"
              value={seller?.accountNumber}
            />
            <TextInput labelName="Bank Branch" required="*" value={seller?.bankBranchName} />
            <TextInput labelName="IFS Code" required="*" value={seller?.bankIfsc} />
            <TextInput
              labelName="Bank A/c Holder Name"
              required="*"
              value={seller?.accountHolderName}
            />
          </div>
        </div>

        {
          seller?.vendorStatus === VendorStatus.REQUESTED && (
            <div className="centerBtns">
              <ButtonMain
                name="Reject Seller"
                onClick={() => setRejectPopup(true)}
              />
              <ButtonMain
                onClick={handleAccept}
                btnColor="green"
                name="Confirm Seller"
              />
            </div>
          )
        }

        {/* popup call */}
        {/* view image */}
        <ViewImagePopup
          show={viewImagePopup.show}
          onHide={() => setViewImagePopup({ show: false, image: "", heading: "" })}
          className="viewImagePopup"
          heading={viewImagePopup.heading}
          image={viewImagePopup.image}
        />
        {/* reject */}
        <ProfileRejectionPopup
          show={rejectPopup}
          onHide={() => setRejectPopup(false)}
          onConfirm={handleReject}
        />
      </div>
    </>
  );
};

export default SellerVerificationDetailPage;
