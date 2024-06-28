import React from 'react'
import TextInput from '../../components/ui/TextInput'

const ProductDetails = () => {
  return (
    <>
      <div className="ProductDetails sectionGap">
            <h6 className="productName">Product ID - ATP15PM <span>( Samsung Galaxy S22 Ultra )</span></h6>
            <div className="inputField">
            <TextInput
              labelName="Product Category"
              value="Electronics"
            />
            <TextInput
              labelName="Product Type"
              value="Mobile "
            />
            <TextInput labelName="Brand" value="Apple (iPhone)" />
            <TextInput labelName="Product Name or Model" value="Apple iPhone 15 Pro Max" />
            <TextInput labelName="Product ID" value="A15PM" />
            <TextInput labelName="Product Price" value="1,10,000.00/-" />
            <TextInput labelName="Product Color" value="Bhagwa" />
            <TextInput labelName="Product Material" value="Metal" />
            <TextInput labelName="Product Variant" value="6 GB RAM / 512 GB ROM=" />
            <TextInput labelName="Brand" value="7024393158" />
            <TextInput labelName="Brand" value="7024393158" />
            <TextInput labelName="Brand" value="7024393158" />
            <TextInput labelName="Brand" value="7024393158" />
          </div>
      </div>
    </>
  )
}

export default ProductDetails
