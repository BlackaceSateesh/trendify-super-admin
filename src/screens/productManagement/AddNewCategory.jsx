import React, { useState } from "react";
import DashboardInnerTitle from "../../components/dashboard/DashboardInnerTitle";
import TextInput from "../../components/ui/TextInput";
import { IoEyeOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import "../../styles/dashboard/AddNewCategory.css";
import ButtonMain from "../../components/ui/ButtonMain";
import { MdDeleteOutline } from "react-icons/md";
import AddProductPopup from "../../components/ui/popups/AddProductPopup";
import AddProductByCategory from "../../components/ui/addProductModals/AddProductByCategory";
import AddProductByType from "../../components/ui/addProductModals/AddProductByType";
import AddProductByBrand from "../../components/ui/addProductModals/AddProductByBrand";
import AddProductByModel from "../../components/ui/addProductModals/AddProductByModel";

const AddNewCategory = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [showAddType, setShowAddType] = useState(false);
  const [showAddBrand, setShowAddBrand] = useState(false);
  const [showAddModelName, setShowAddModelName] = useState(false);

  return (
    <>
      <div className="AddNewCategory sectionGap">



        {/* add product category */}
        <div className="sectionContainer">
          <div className="head">
            <DashboardInnerTitle name="Add Products - Category / Type / Brand / Name" />
          </div>
          <div className="inputField">
            <div className="inputField_container">
              <TextInput labelName="Product Category" value="Electronics" />
              <div className="multiBtns">
                <button className="btn_icon">
                  <IoEyeOutline /> View Image
                </button>
                <button className="btn_icon">
                  <FaPlus /> Add Image
                </button>
              </div>
            </div>
            <div className="inputField_container">
              <TextInput labelName="Product Type" value="Mobile" />
              <div className="multiBtns">
                <button className="btn_icon">
                  <IoEyeOutline /> View Image
                </button>
                <button className="btn_icon">
                  <FaPlus /> Add Image
                </button>
              </div>
            </div>
            <div className="inputField_container">
              <TextInput labelName="Brand" value="Samsung" />
              <div className="multiBtns">
                <button className="btn_icon">
                  <IoEyeOutline /> View Image
                </button>
                <button className="btn_icon">
                  <FaPlus /> Add Image
                </button>
              </div>
            </div>
            <div className="inputField_container">
              <div className="multiInputs">
                <TextInput labelName="Product Name" value="Galaxy S22 Ultra" />
                <TextInput value="Galaxy S23 Ultra" />
                <TextInput value="Galaxy S24 Ultra" />
              </div>
              <div className="multiBtns">
                <button className="btn_icon">
                  <IoEyeOutline /> View Image
                </button>
                <button className="btn_icon">
                  <FaPlus /> Add Image
                </button>
              </div>
            </div>
          </div>
          <div className="centerBtns">
            <ButtonMain name="Cancel Product" />
            <ButtonMain btnColor="green" name="Save Product" />
          </div>
        </div>

        {/* Already Created Category List   */}
        <div className="sectionContainer">
          <DashboardInnerTitle name="Already Created Category List " />

          {/* electronics */}
          <div className="innerBox_shadow">
            <div className="head">
              <h5 className="heading">
                Product Category - <span>Electronics</span>
              </h5>
              <div className="sideBtns">
                <button
                  onClick={() => setShowAddProduct(true)}
                  className="categoryBtns"
                >
                  Add More Type
                </button>
                <button className="categoryBtns">Add More Brand</button>
                <button className="categoryBtns blue">Add More Product</button>
                <button className="categoryBtns delete">
                  <MdDeleteOutline /> Delete
                </button>
              </div>
              {/* preview popup */}
              <AddProductPopup
                show={showAddProduct}
                onHide={() => setShowAddProduct(false)}
              />
            </div>

            <div className="category_table">
              <table>
                <thead>
                  <tr>
                    <th>Product Type</th>
                    <th>Product Brand</th>
                    <th>Product Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mobile</td>
                    <td>iPhone</td>
                    <td>
                      iPhone 13 / iPhone 13 mini / iPhone 13 Pro / iPhone 13 Pro
                      Max / iPhone 13 / iPhone 13 mini / iPhone 13 Pro / iPhone
                      13 Pro Max /iPhone 13 / iPhone 13 mini / iPhone 13 Pro /
                      iPhone 13 Pro Max / iPhone 13 / iPhone 13 mini / iPhone 13
                      Pro / iPhone 13 Pro Max / iPhone 16 / iPhone 16 Plus /
                      iPhone 16 Pro / iPhone 16 Pro Max
                    </td>
                  </tr>
                  <tr>
                    <td className="blank"></td>
                    <td>Android - Samsung</td>
                    <td>
                      Samsung A73 5G / Samsung A73 / Samsung S 21 / Samsung S 21
                      Plus / Samsung S 21 Ultra
                    </td>
                  </tr>
                  <tr>
                    <td className="blank"></td>
                    <td>Android - VIVO</td>
                    <td>
                      Vivo x90 / Vivo x90 Pro / Vivo A99 / Vivo A99 Pro Max
                    </td>
                  </tr>
                  <tr>
                    <td>Laptop</td>
                    <td>Asus</td>
                    <td>
                      Asus Yoga M1 9000 S / Asus Supre GT / Asus 5000 S / Asus
                      45662 Salee S
                    </td>
                  </tr>
                  <tr>
                    <td className="blank"></td>
                    <td>Dell</td>
                    <td>
                      Dell Yoga M1 9000 S / Dell Supre GT / Dell 5000 S / Dell V
                      45662 Salee S
                    </td>
                  </tr>
                  <tr>
                    <td className="blank"></td>
                    <td>HP</td>
                    <td>HP x90 / HP x90 Pro / HP A99 / HP A99 Pro Max</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Fashion */}
          <div className="innerBox_shadow">
            <div className="head">
              <h5 className="heading">
                Product Category - <span>Fashion</span>
              </h5>
              <div className="sideBtns">
                <button className="categoryBtns">Add More Type</button>
                <button className="categoryBtns">Add More Brand</button>
                <button className="categoryBtns blue">Add More Product</button>
                <button className="categoryBtns delete">
                  <MdDeleteOutline /> Delete
                </button>
              </div>
            </div>

            <div className="category_table">
              <table>
                <thead>
                  <tr>
                    <th>Product Type</th>
                    <th>Product Brand</th>
                    <th>Product Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mobile</td>
                    <td>iPhone</td>
                    <td>
                      iPhone 13 / iPhone 13 mini / iPhone 13 Pro / iPhone 13 Pro
                      Max / iPhone 13 / iPhone 13 mini / iPhone 13 Pro / iPhone
                      13 Pro Max /iPhone 13 / iPhone 13 mini / iPhone 13 Pro /
                      iPhone 13 Pro Max / iPhone 13 / iPhone 13 mini / iPhone 13
                      Pro / iPhone 13 Pro Max / iPhone 16 / iPhone 16 Plus /
                      iPhone 16 Pro / iPhone 16 Pro Max
                    </td>
                  </tr>
                  <tr>
                    <td className="blank"></td>
                    <td>Android - Samsung</td>
                    <td>
                      Samsung A73 5G / Samsung A73 / Samsung S 21 / Samsung S 21
                      Plus / Samsung S 21 Ultra
                    </td>
                  </tr>
                  <tr>
                    <td className="blank"></td>
                    <td>Android - VIVO</td>
                    <td>
                      Vivo x90 / Vivo x90 Pro / Vivo A99 / Vivo A99 Pro Max
                    </td>
                  </tr>
                  <tr>
                    <td>Laptop</td>
                    <td>Asus</td>
                    <td>
                      Asus Yoga M1 9000 S / Asus Supre GT / Asus 5000 S / Asus
                      45662 Salee S
                    </td>
                  </tr>
                  <tr>
                    <td className="blank"></td>
                    <td>Dell</td>
                    <td>
                      Dell Yoga M1 9000 S / Dell Supre GT / Dell 5000 S / Dell V
                      45662 Salee S
                    </td>
                  </tr>
                  <tr>
                    <td className="blank"></td>
                    <td>HP</td>
                    <td>HP x90 / HP x90 Pro / HP A99 / HP A99 Pro Max</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

        {/* add category modal test start */}
         {/* preview popup */}
         {/* <button onClick={()=> setShowAddCategory(true)} >Category</button>
         <button onClick={()=> setShowAddType(true)} >Type</button>
         <button onClick={()=> setShowAddBrand(true)} >Brand</button>
         <button onClick={()=> setShowAddModelName(true)} >ModelName</button> */}
         <AddProductByCategory
                    show={showAddCategory}
                    onHide={() => setShowAddCategory(false)}
                  />
         <AddProductByType
                    show={showAddType}
                    onHide={() => setShowAddType(false)}
                  />
         <AddProductByBrand
                    show={showAddBrand}
                    onHide={() => setShowAddBrand(false)}
                  />
         <AddProductByModel
                    show={showAddModelName}
                    onHide={() => setShowAddModelName(false)}
                  />

        {/* add category modal test end */}

    </>
  );
};

export default AddNewCategory;
