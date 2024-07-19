import React, { useState } from "react";
import DashboardInnerTitle from "../../components/dashboard/DashboardInnerTitle";
import TextInput from "../../components/ui/TextInput";
import TextareaInput from "../../components/ui/TextareaInput";
import "../../styles/dashboard/PendingApprovalProduct.css";
import ButtonMain from "../../components/ui/ButtonMain";
import WarningPopup from "../../components/ui/popups/WarningPopup";
import ApprovePopup from "../../components/ui/popups/ApprovePopup";
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { SpecificationsArray } from "../../constants/contents/Product";
import { AuthenticatedRoutes } from "../../constants/Routes";
import { approveProduct, rejectProduct } from "../../api/product-api";
import { ProductStatus } from "../../constants/dummy/productList";

const PendingApprovalProduct = () => {
  const location = useLocation();
  const product = location.state?.product;
  const navigate = useNavigate();

  const [showWarning, setShowWarning] = useState(false);
  const [showApprove, setShowApprove] = useState(false);

  const handleApprove = async () => {
    try {
      await approveProduct(product.id);
      navigate(AuthenticatedRoutes.productDetails);
    } catch (error) {
      console.log(error);
    }
  };

  const handleReject = async (reason) => {
    try {
      await rejectProduct(product.id, reason);
      navigate(AuthenticatedRoutes.productDetails);
    } catch (error) {
      console.log(error);
    }
  };

  return !product ? <Navigate to={AuthenticatedRoutes.productDetails} /> : (
    <>
      <div className="PendingApprovalProduct sectionGap">
        {/* select product */}
        <div className="sectionContainer">
          <div className="head">
            <DashboardInnerTitle name="Product Details" />
          </div>
          <div className="inputField">
            <TextInput
              labelName="Product Category"
              value={product?.productCategoryName}
              disabled={true}
            />
            <TextInput labelName="Product Type" value={product?.productTypeName} disabled={true} />
            <TextInput labelName="Brand" value={product?.brandName} disabled={true} />
            <TextInput
              labelName="Product Name"
              value={product?.title}
              disabled={true}
            />
            <TextInput
              labelName="Model Name"
              value={product?.modelName}
              disabled={true}
            />
            <TextInput
              labelName="Product Code"
              value={product?.itemCode}
              disabled={true}
            />
            <TextInput
              labelName="Condition"
              value={product?.condition}
              disabled={true}
            />
            <TextInput
              labelName="Over All Rating"
              value={product?.overAllRating}
              disabled={true}
            />
            <TextInput
              labelName="Created Date"
              value={product?.createdDate}
              disabled={true}
            />
            <TextInput
              labelName="Vendor Name"
              value={product?.vendorName}
              disabled={true}
            />
            <TextInput
              labelName="Product Status"
              value={product?.productStatus}
              disabled={true}
            />
            <TextInput
              labelName="Inventory Status"
              value={product?.inventoryStatus}
              disabled={true}
            />
            <TextareaInput
              labelName="Key Features"
              value={product?.keyFeatures}
              disabled={true}
            />
            <TextareaInput
              labelName="Highlights"
              value={product?.highlights}
              disabled={true}
            />
          </div>
        </div>
        {/* Product Specifications */}
        <div className="sectionContainer">
          <div className="head">
            <DashboardInnerTitle name="Product Specifications" />
          </div>
          <div className="inputField">
            {SpecificationsArray.map(
              (spec) => {
                return product?.specificationRes[spec.key] && (
                  <TextInput
                    labelName={spec.label}
                    value={product?.specificationRes[spec.key]}
                    disabled={true}
                  />
                );
              }
            )}
          </div>
        </div>

        {/* Pricing / Discount & Stock */}
        <div className="sectionContainer">
          <div className="head">
            <DashboardInnerTitle name="Pricing / Discount & Stock" />
          </div>
          <div className="inputField">
            <TextInput
              labelName="Original Price"
              value={product?.originalPrice}
              disabled={true}
            />
            <TextInput
              labelName="Selling Price"
              value={product?.sellingPrice}
              disabled={true}
            />
            <TextInput
              labelName="Discount %"
              value={product?.discount}
              disabled={true}
            />
            <TextInput
              labelName="Tax %"
              value={product?.tax}
              disabled={true}
            />
            <TextInput
              labelName="Stock"
              value={product?.stock}
              disabled={true}
            />
          </div>
        </div>

        {/* Manufacturer Details */}
        <div className="sectionContainer">
          <div className="head">
            <DashboardInnerTitle name="Manufacturer Details" />
          </div>
          <div className="inputField">
            <TextInput
              labelName="Manufacturing By"
              value={product?.manufacturingBy}
              disabled={true}
            />
            <TextInput
              labelName="Warranty Period"
              value={product?.warrantyPeriod}
              disabled={true}
            />
            <TextInput
              labelName="Origin"
              value={product?.origin}
              disabled={true}
            />
          </div>
        </div>

        {/* Detailed Description */}
        <div className="sectionContainer">
          <div className="head">
            <DashboardInnerTitle name="Detailed Description" />
          </div>
          <div className="inputField">
            <TextareaInput
              value={product?.description}
              disabled={true}
            />
          </div>
        </div>

        {/* Product Key Feature  (Words Limit 500) */}
        <div className="sectionContainer">
          <div className="head">
            <DashboardInnerTitle
              name="Product Key Feature "
            />
          </div>
          <div className="inputField">
            <TextareaInput
              value={product?.keyFeatures}
              disabled={true}
            />
          </div>
        </div>
        {/* Product Image */}
        <div className="sectionContainer">
          <div className="head">
            <DashboardInnerTitle name="Product Image " />
          </div>
          <div className="productImgs">
            {product?.imageUrlList.map((e, i) => {
              return (
                <>
                  {" "}
                  <div key={i} className="productImgBox">
                    <div className="image">
                      <img src={e} alt="" />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        {
          location.state?.status !== ProductStatus.APPROVED && (
            <div className="centerBtns">
              <ButtonMain onClick={() => setShowWarning(true)} name='Reject Product' />
              <ButtonMain onClick={() => setShowApprove(true)} btnColor='green' name='Approve Product' />
            </div>
          )
        }

        <WarningPopup
          show={showWarning}
          onHide={() => setShowWarning(false)}
          onReject={handleReject}
          hasPrompt={true}
        />
        <ApprovePopup
          show={showApprove}
          onHide={() => setShowApprove(false)}
          onApprove={handleApprove}
        />
      </div>
    </>
  );
};

export default PendingApprovalProduct;
