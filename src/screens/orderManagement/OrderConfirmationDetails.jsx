import React, { useState } from "react";
import DashboardInnerTitle from "../../components/dashboard/DashboardInnerTitle";
import TextInput from "../../components/ui/TextInput";
import SelectInput from "../../components/ui/SelectInput";
import TextareaInput from "../../components/ui/TextareaInput";
import ButtonMain from "../../components/ui/ButtonMain";
import PreviewInvoicePopup from "../../components/ui/popups/PreviewInvoicePopup";
import "../../styles/dashboard/OrderConfirmationDetails.css";
import CustomerProductImg from "../../assests/dashboard/productImg.png";

const OrderConfirmationDetails = () => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <div className="OrderConfirmationDetails sectionGap">
        {/* Order Details */}
        <div className="sectionContainer">
          <div className="head">
            <DashboardInnerTitle name="Order Details" />
            <p className="trackId">
              Track ID - #9345036781 <span>Awaiting Conformation</span>
            </p>
          </div>
          <div className="delivery_table">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Delivery Type</th>
                  <th>Delivery Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="thBox">
                      <div className="col1">
                        <p className="key">Order date: </p>
                        <p className="value">1/3/2024 </p>
                      </div>
                      <div className="col1">
                        <p className="key">Paid date: </p>
                        <p className="value">1/3/2024 </p>
                      </div>
                      <div className="col1">
                        <p className="key">Ship by: </p>
                        <p className="value">1/15/2024 </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="thBox">
                      <div className="col1">
                        <p className="key">Total: </p>
                        <p className="value">₹2496 </p>
                      </div>
                      <div className="col1">
                        <p className="key">GST: </p>
                        <p className="value">₹249 </p>
                      </div>
                      <div className="col1">
                        <p className="key">Total Paid: </p>
                        <p className="value">₹2600</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="thBox">
                      <div className="col1">
                        <p className="key">Services: </p>
                        <p className="value">Express Delivery </p>
                      </div>
                      <div className="col1">
                        <p className="key">Delivery Time : </p>
                        <p className="value">1 Day Delivery </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="thBox">
                      <div className="address">
                        <h6>Rajat P.</h6>
                        <p className="key">
                          08 Gujar Pura , Huzur , Peer Gate , Bhopal 462001
                          Mobile No 7024393158
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* item table */}

          <div className="item_detail">
            <div className="heading">
              <h6>Items</h6>
              <p>9 items in total</p>
            </div>
            <div className="item_table">
              <table>
                <thead>
                  <tr>
                    <th>Items</th>
                    <th>Qty</th>
                    <th>Weight</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                        <div className="item">
                            <div className="itemImg"><img src={CustomerProductImg} alt="" /></div>
                            <div className="txt">
                                <h6>Blue Snowball iCE USB blue iCE USB</h6>
                                <p>Product ID: 11223557789</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="quantity">2</div>
                    </td>
                    <td>1Kg</td>
                    <td>₹499</td>
                  </tr>
                  <tr>
                    <td>
                        <div className="item">
                            <div className="itemImg"><img src={CustomerProductImg} alt="" /></div>
                            <div className="txt">
                                <h6>Blue Snowball iCE USB blue iCE USB</h6>
                                <p>Product ID: 11223557789</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="quantity">2</div>
                    </td>
                    <td>1Kg</td>
                    <td>₹499</td>
                  </tr>
                  <tr>
                    <td>
                        <div className="item">
                            <div className="itemImg"><img src={CustomerProductImg} alt="" /></div>
                            <div className="txt">
                                <h6>Blue Snowball iCE USB blue iCE USB</h6>
                                <p>Product ID: 11223557789</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="quantity">2</div>
                    </td>
                    <td>1Kg</td>
                    <td>₹499</td>
                  </tr>
                  <tr>
                    <td>
                        <div className="item">
                            <div className="itemImg"><img src={CustomerProductImg} alt="" /></div>
                            <div className="txt">
                                <h6>Blue Snowball iCE USB blue iCE USB</h6>
                                <p>Product ID: 11223557789</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="quantity">2</div>
                    </td>
                    <td>1Kg</td>
                    <td>₹499</td>
                  </tr>
                </tbody>
              </table>
              <table>
                <thead>
                  <tr>
                    <th>Items</th>
                    <th>Qty</th>
                    <th>Weight</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                        <div className="item">
                            <div className="itemImg"><img src={CustomerProductImg} alt="" /></div>
                            <div className="txt">
                                <h6>Blue Snowball iCE USB blue iCE USB</h6>
                                <p>Product ID: 11223557789</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="quantity">2</div>
                    </td>
                    <td>1Kg</td>
                    <td>₹499</td>
                  </tr>
                  <tr>
                    <td>
                        <div className="item">
                            <div className="itemImg"><img src={CustomerProductImg} alt="" /></div>
                            <div className="txt">
                                <h6>Blue Snowball iCE USB blue iCE USB</h6>
                                <p>Product ID: 11223557789</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="quantity">2</div>
                    </td>
                    <td>1Kg</td>
                    <td>₹499</td>
                  </tr>
                  <tr>
                    <td>
                        <div className="item">
                            <div className="itemImg"><img src={CustomerProductImg} alt="" /></div>
                            <div className="txt">
                                <h6>Blue Snowball iCE USB blue iCE USB</h6>
                                <p>Product ID: 11223557789</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="quantity">2</div>
                    </td>
                    <td>1Kg</td>
                    <td>₹499</td>
                  </tr>
                  <tr>
                    <td>
                        <div className="item">
                            <div className="itemImg"><img src={CustomerProductImg} alt="" /></div>
                            <div className="txt">
                                <h6>Blue Snowball iCE USB blue iCE USB</h6>
                                <p>Product ID: 11223557789</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="quantity">2</div>
                    </td>
                    <td>1Kg</td>
                    <td>₹499</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Dimensions List */}
        <div className="sectionContainer">
          <DashboardInnerTitle name="Dimensions List" />
          <div className="dimensions_table">
            <table>
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Length</th>
                  <th>Width</th>
                  <th>Height</th>
                  <th>Weight</th>
                  <th>Insurance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>23cm</td>
                  <td>23cm</td>
                  <td>23cm</td>
                  <td>55kg</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>23cm</td>
                  <td>23cm</td>
                  <td>23cm</td>
                  <td>55kg</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>23cm</td>
                  <td>23cm</td>
                  <td>23cm</td>
                  <td>55kg</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>04</td>
                  <td>23cm</td>
                  <td>23cm</td>
                  <td>23cm</td>
                  <td>55kg</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>05</td>
                  <td>23cm</td>
                  <td>23cm</td>
                  <td>23cm</td>
                  <td>55kg</td>
                  <td>Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Shipping details */}
        <div className="sectionContainer">
          <DashboardInnerTitle name="Shipping Detail" />
          <div className="inputField">
            <TextInput labelName="Full Name" value="Raju Tea stall" />
            <TextInput labelName="Phone Number" value="Phone Number" />
            <SelectInput labelName="GSTIN" option="Enter GSTIN" />
            <SelectInput labelName="City" options={["Choose"]} />
            <SelectInput labelName="State" options={["Choose"]} />
            <SelectInput labelName="Country" option="Bharat" />
            <TextInput labelName="Pincode / Zipcode" value="462001" />
            <TextInput labelName="Expected Delivery Date" value="06/05/2001" />
            <TextareaInput
              labelName="House No., Building Name"
              optional="(Words Limit 500)"
              value="Organize your data in familiar spreadsheets and workbooks, with all changes saved automatically. Create modern visuals that turn numbers into valuable insights. Work together in real time knowing that everyone is on the same page."
            />
            <TextareaInput
              labelName="Road name, Area, Colony"
              optional="(Words Limit 500)"
              value="Organize your data in familiar spreadsheets and workbooks, with all changes saved automatically. Create modern visuals that turn numbers into valuable insights. Work together in real time knowing that everyone is on the same page."
            />
          </div>
        </div>
        {/* Seller Details */}
        <div className="sectionContainer">
          <DashboardInnerTitle name="Seller Details" />
          <div className="inputField">
            <TextInput
              labelName="Company / Shop Name"
              required="*"
              value="Har Har Mahadev Electronics"
            />
            <TextInput labelName="Seller ID" value="4655454565165165" />
            <TextInput
              labelName="Contact Mobile Number"
              value="+91 7024393158"
            />
            <TextInput
              labelName="Contact E-mail Address"
              value="HarHarMahadevElectronics@gmail.com"
            />
          </div>
        </div>
        {/* Update & View Delivery Status */}
        <div className="sectionContainer">
          <DashboardInnerTitle name="Update & View Delivery Status" />
          <div className="orderTrack_inner">
            <ul id="orderTrackBar">
              <li className="active">
                Order Confirmed
                <p>Wed, 11th Jan</p>
              </li>
              <li className="active">
                Shipped
                <p>Sat, 13th Jan</p>
              </li>
              <li className="">
                Out For Delivery
                <p>Thu, 11th Jan</p>
              </li>
              <li>
                Delivered
                <p>Mon 16th Jan</p>
              </li>
            </ul>
          </div>
        </div>
        {/* Payment & Date Status */}
        <div className="sectionContainer">
          <DashboardInnerTitle name="Payment & Date Status" />
          <div className="inputField">
            <TextInput labelName="Payment Type" value="UPI" />
            <TextInput labelName="Order Date" value="06/05/2001" />
            <TextInput
              labelName="Payment Status vai Customer"
              value="Completed"
            />
            <TextInput labelName="Payment Status via Seller" value="Received" />
          </div>
        </div>

        {/* btns */}
        <div className="centerBtns">
          <ButtonMain btnColor="green" name="Contact to Seller" />
          <ButtonMain
            onClick={() => setShowPreview(true)}
            name="Preview Invoice"
          />
        </div>
        {/* popup preview */}
        <PreviewInvoicePopup
          show={showPreview}
          onHide={() => setShowPreview(false)}
        />
      </div>
    </>
  );
};

export default OrderConfirmationDetails;
