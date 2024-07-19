import React, { useState } from "react";
import DashboardInnerTitle from "../../components/dashboard/DashboardInnerTitle";
import SelectInput from "../../components/ui/SelectInput";
import TextInput from "../../components/ui/TextInput";
import TextareaInput from "../../components/ui/TextareaInput";
import ButtonMain from "../../components/ui/ButtonMain";
import '../../styles/dashboard/OrderDetails.css'
import PreviewInvoicePopup from "../../components/ui/popups/PreviewInvoicePopup";
import { useLocation, Navigate } from "react-router-dom";
import { OrderDeliveryStatus } from "../../constants/dummy/allOrderProductList";
import { formatDate } from "../../utils/dateFunctions";
import { AuthenticatedRoutes } from "../../constants/Routes";

const OrderDetails = () => {
  const location = useLocation();
  const order = location.state?.order;
  const [showPreview, setShowPreview] = useState(false);
  
  return !order ? <Navigate to={AuthenticatedRoutes.allOrderProductList} /> : (
    <>
      <div className="OrderDetails sectionGap">
        {/* product details */}
        <div className="sectionContainer">
          <DashboardInnerTitle name="Product Detail" />
          <div className="inputField">
            <TextInput labelName="Product Code" value={order?.orderCode} disabled={true} />
            <TextInput labelName="Product Type" value={order?.productRes?.productTypeName} disabled={true} />
            <TextInput labelName="Category" value={order?.productRes?.productCategoryName} disabled={true} />
            <TextInput
              labelName="Product Name"
              value={order?.productRes?.title}
              disabled={true}
            />
            <TextInput labelName="Brand" value={order?.productRes?.brandName} disabled={true} />
            <TextInput labelName="Product Price" value={order?.productRes?.sellingPrice} disabled={true} />
            <TextInput labelName="Unit Price" value={order?.price} disabled={true} />
            <TextInput labelName="Discount" value={order?.productRes?.discount} disabled={true} />
            <TextInput labelName="Stock" value={order?.productRes?.stock} disabled={true} />
            <TextInput labelName="Quantity" value={order?.quantity} disabled={true} />
            <TextInput labelName="Total Price" value={order?.price * order?.quantity} disabled={true} />
          </div>
        </div>
        {/* Shipping details */}
        <div className="sectionContainer">
          <DashboardInnerTitle name="Shipping Detail" />
          <div className="inputField">
            <TextInput labelName="Full Name" value={order?.addressResponse?.name} disabled={true} />
            <TextInput labelName="Phone Number" value={order?.addressResponse?.mobileNo} disabled={true} />
            <TextInput labelName="City" value={order?.addressResponse?.city} disabled={true} />
            <TextInput labelName="State" value={order?.addressResponse?.state} disabled={true} />
            <TextInput labelName="Country" value={order?.addressResponse?.country} disabled={true} />
            <TextInput labelName="Pincode / Zipcode" value={order?.addressResponse?.pinCode} disabled={true} />
            <TextareaInput
              labelName="House No., Building Name"
              value={order?.addressResponse?.address}
              disabled={true}
            />
            <TextareaInput
              labelName="Landmark"
              value={order?.addressResponse?.landmark}
              disabled={true}
            />
          </div>
        </div>
        {/* Payment & Date Status */}
        <div className="sectionContainer">
          <DashboardInnerTitle name="Payment & Date Status" />
          <div className="inputField">
            <TextInput labelName="Order Date" value={order?.orderDate} disabled={true} />
            <TextInput labelName="Payment Type" value={order?.paymentType} disabled={true} />
          </div>
        </div>
        {/* Update & View Delivery Status */}
        <div className="sectionContainer">
          <DashboardInnerTitle name="Update & View Delivery Status" />
          <div className="orderTrack_inner">
            <ul id="orderTrackBar">
              {
                OrderDeliveryStatus.map((status, index) => {
                  return (
                    <li key={index} className={order?.orderStatusRespList.some((orderStatus) => orderStatus.orderStatus === status.key) ? "active" : ""}>
                      {status.value}
                      <p>{order?.orderStatusRespList.find((orderStatus) => orderStatus.orderStatus === status.key)?.timestamp ? formatDate(order?.orderStatusRespList.find((orderStatus) => orderStatus.orderStatus === status.key)?.timestamp) : ""}</p>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div>
        {/* btns */}
        <div className="centerBtns">
          <ButtonMain onClick={() => setShowPreview(true)} name="Preview Invoice" />
        </div>
        {/* popup preview */}
        <PreviewInvoicePopup
          show={showPreview}
          onHide={() => setShowPreview(false)}
          order={order}
        />
      </div>
    </>
  );
};

export default OrderDetails;
