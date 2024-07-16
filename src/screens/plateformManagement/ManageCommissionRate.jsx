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
            <SelectInput labelName="Commission Rates of Electrics Product" value="Choose " />
            <SelectInput labelName="Commission Rates of Men's Product" value="Choose " />
            <SelectInput labelName="Commission Rates of Women's Product" value="Choose " />
            <SelectInput labelName="Commission Rates of Beauty Product" value="Choose " />
            <SelectInput labelName="Commission Rates of Electrics Product" value="Choose " />
            <SelectInput labelName="Commission Rates of Men's Product" value="Choose " />
            <SelectInput labelName="Commission Rates of Women's Product" value="Choose " />
            <SelectInput labelName="Commission Rates of Beauty Product" value="Choose " />
            <SelectInput labelName="Commission Rates of Electrics Product" value="Choose " />
            <SelectInput labelName="Commission Rates of Men's Product" value="Choose " />
            <SelectInput labelName="Commission Rates of Women's Product" value="Choose " />
            <SelectInput labelName="Commission Rates of Beauty Product" value="Choose " />
          </div>
          <div className="centerBtns">
          <ButtonMain name='Reset Commission' />
          <ButtonMain btnColor='green' name='Update Commission Rates' />
        </div>
        </div>
        <div className="sectionContainer">
            <DashboardInnerTitle name=' Platform Charges' />
            <div className="inputField">
            <SelectInput labelName="Seller Charge Monthly Charge" value="Choose " />
            <SelectInput labelName="Seller Charge Yearly Charge" value="Choose " />
            <SelectInput labelName="Seller Add Product Charge" value="Choose " />
            <SelectInput labelName="Seller Performance metrics Charge" value="Choose " />
            <SelectInput labelName="Seller Sales Statistics Charge" value="Choose " />
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
