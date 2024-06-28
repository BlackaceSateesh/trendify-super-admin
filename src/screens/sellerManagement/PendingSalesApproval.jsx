import React from 'react'
import FilterDataSection from '../../components/dashboard/FilterDataSection'
import DashboardInnerTitle from '../../components/dashboard/DashboardInnerTitle'
import SearchBoxTable from '../../components/ui/SearchBoxTable'
import ListTable from '../../components/ui/ListTable'
import '../../styles/dashboard/PendingSalesApproval.css'
const PendingSalesApproval = () => {

      //dummy data
      const dataColumn =[
        {name:'SL'},
        {name:'Seller'},
        {name:'Seller Name'},
        {name:'Seller ID'},
        {name:'Category'},
        {name:'Verification Status'},
        {name:'Action'}

    ]
    const dataRow =[
        {
            img:require('../../assests/dashboard/sellerImg.png'),
            name:'Vimal Pandey',
            sellerId: '5484651654IUBGY',
            category: 'Electronics , Fashion',
            status:'pending',
        },
        {
            img:require('../../assests/dashboard/sellerImg.png'),
            name:'Vimal Pandey',
            sellerId: '5484651654IUBGY',
            category: 'Electronics , Fashion',
            status:'pending',
        },
        {
            img:require('../../assests/dashboard/sellerImg.png'),
            name:'Vimal Pandey',
            sellerId: '5484651654IUBGY',
            category: 'Electronics , Fashion',
            status:'pending',
        },
        {
            img:require('../../assests/dashboard/sellerImg.png'),
            name:'Vimal Pandey',
            sellerId: '5484651654IUBGY',
            category: 'Electronics , Fashion',
            status:'pending',
        },
        {
            img:require('../../assests/dashboard/sellerImg.png'),
            name:'Vimal Pandey',
            sellerId: '5484651654IUBGY',
            category: 'Electronics , Fashion',
            status:'pending',
        },
        {
            img:require('../../assests/dashboard/sellerImg.png'),
            name:'Vimal Pandey',
            sellerId: '5484651654IUBGY',
            category: 'Electronics , Fashion',
            status:'pending',
        }

    ]

  return (
    <>
      <div className="PendingSalesApproval sectionGap">
        <FilterDataSection />

        <div className="PendingSalesApproval_inner sectionContainer">

        <div className="head">
            <DashboardInnerTitle name="Reviews List" />
          </div>
          <div className="inner_table">
            <SearchBoxTable placeholderValue='Search List' />
            <div className="tableBox">
              <ListTable dataColumn={dataColumn} dataRow={dataRow} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PendingSalesApproval
