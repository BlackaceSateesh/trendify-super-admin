import React from 'react'
import DashboardInnerTitle from '../../components/dashboard/DashboardInnerTitle';
import { MdDeleteOutline } from 'react-icons/md';
import "../../styles/dashboard/AddNewCategory.css";


const EditAndAddProduct = () => {
  return (
    <>
      <div className="">

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
    </>
  )
}

export default EditAndAddProduct;
