import React from 'react'
import DashboardInnerTitle from '../../components/dashboard/DashboardInnerTitle'
import SelectInput from '../../components/ui/SelectInput'
import ButtonMain from '../../components/ui/ButtonMain'
import '../../styles/dashboard/ManageCommissionRate.css';

const ManageCommissionRate = () => {
  return (
    <>
      <div className="ManageCommissionRate sectionGap">
        <div className="sectionContainer">
            <DashboardInnerTitle name='Commission rates' />
            <div className="inputField">
            <SelectInput labelName="Commission Rates of Electrics Product" options={["Choose"]} />
            <SelectInput labelName="Commission Rates of Men's Product" options={["Choose"]} />
            <SelectInput labelName="Commission Rates of Women's Product" options={["Choose"]} />
            <SelectInput labelName="Commission Rates of Beauty Product" options={["Choose"]} />
            <SelectInput labelName="Commission Rates of Electrics Product" options={["Choose"]} />
            <SelectInput labelName="Commission Rates of Men's Product" options={["Choose"]} />
            <SelectInput labelName="Commission Rates of Women's Product" options={["Choose"]} />
            <SelectInput labelName="Commission Rates of Beauty Product" options={["Choose"]} />
            <SelectInput labelName="Commission Rates of Electrics Product" options={["Choose"]} />
            <SelectInput labelName="Commission Rates of Men's Product" options={["Choose"]} />
            <SelectInput labelName="Commission Rates of Women's Product" options={["Choose"]} />
            <SelectInput labelName="Commission Rates of Beauty Product" options={["Choose"]} />
          </div>
          <div className="centerBtns">
          <ButtonMain name='Reset Commission' />
          <ButtonMain btnColor='green' name='Update Commission Rates' />
        </div>
        </div>
        <div className="sectionContainer">
            <DashboardInnerTitle name=' Platform Charges' />
            <div className="inputField">
            <SelectInput labelName="Seller Charge Monthly Charge" options={["Choose"]} />
            <SelectInput labelName="Seller Charge Yearly Charge" options={["Choose"]} />
            <SelectInput labelName="Seller Add Product Charge" options={["Choose"]} />
            <SelectInput labelName="Seller Performance metrics Charge" options={["Choose"]} />
            <SelectInput labelName="Seller Sales Statistics Charge" options={["Choose"]} />
          </div>
          <div className="centerBtns">
          <ButtonMain name='Reset Commission' />
          <ButtonMain btnColor='green' name='Update Charges Rates' />
        </div>
        </div>
        {/*  */}
        <div className="sectionContainer">
            <DashboardInnerTitle name='All Preview Commission Rates & Platform Charges' />
           
           <div className="inner_rateBox">
            <div className="commission">
            <p className='inputLabel'>12-04-2022 Commission Rates</p>
            <div className="box">
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
            </div>
            </div>

            <div className="commission ">
            <p className='inputLabel'>12-04-2023 Platform Charges</p>
            <div className="box">
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
            </div>
            </div>
           </div>
           <div className="inner_rateBox">
            <div className="commission">
            <p className='inputLabel'>12-04-2022 Commission Rates</p>
            <div className="box">
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
            </div>
            </div>

            <div className="commission ">
            <p className='inputLabel'>12-04-2023 Platform Charges</p>
            <div className="box">
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
                <div className="list"><p>Commission Rates of Electrics Product</p> <p className='num'>-  120</p></div>
            </div>
            </div>
           </div>
         
        </div>
      </div>
    </>
  )
}

export default ManageCommissionRate
