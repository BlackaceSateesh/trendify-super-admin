import React from 'react'
import DashboardInnerTitle from '../../components/dashboard/DashboardInnerTitle';
import AllFaqCard from '../../components/dashboard/AllFaqCard';
import '../../styles/dashboard/AllFaqs.css'

const AllFaqs = () => {

    // dummy faqs data 

    const faqsData =[
        {
            title:'Find a missing package that shows as "Delivered"',
            para:'Most packages arrive on time, but, sometimes, the tracking may show as "delivered" and you don"t have your package.'
        },
        {
            title:'Track your package',
            para:'You can find tracking information in your order details. If an order includes multiple items, each may have separate delivery dates and tracking'
        },
        {
            title:'Check status of a refund',
            para:'Most packages arrive on time, but, sometimes, the tracking may show as "delivered" and you don"t have your package.'
        },
        {
            title:'Find a missing package that shows as "Delivered"',
            para:'Most packages arrive on time, but, sometimes, the tracking may show as "delivered" and you don"t have your package.'
        },
        {
            title:'Track your package',
            para:'You can find tracking information in your order details. If an order includes multiple items, each may have separate delivery dates and tracking'
        },
        {
            title:'Check status of a refund',
            para:'Most packages arrive on time, but, sometimes, the tracking may show as "delivered" and you don"t have your package.'
        },
        {
            title:'Find a missing package that shows as "Delivered"',
            para:'Most packages arrive on time, but, sometimes, the tracking may show as "delivered" and you don"t have your package.'
        },
        {
            title:'Track your package',
            para:'You can find tracking information in your order details. If an order includes multiple items, each may have separate delivery dates and tracking'
        },
        {
            title:'Check status of a refund',
            para:'Most packages arrive on time, but, sometimes, the tracking may show as "delivered" and you don"t have your package.'
        },
        {
            title:'Find a missing package that shows as "Delivered"',
            para:'Most packages arrive on time, but, sometimes, the tracking may show as "delivered" and you don"t have your package.'
        },
        {
            title:'Track your package',
            para:'You can find tracking information in your order details. If an order includes multiple items, each may have separate delivery dates and tracking'
        },
        {
            title:'Check status of a refund',
            para:'Most packages arrive on time, but, sometimes, the tracking may show as "delivered" and you don"t have your package.'
        },
        {
            title:'Find a missing package that shows as "Delivered"',
            para:'Most packages arrive on time, but, sometimes, the tracking may show as "delivered" and you don"t have your package.'
        },
        {
            title:'Track your package',
            para:'You can find tracking information in your order details. If an order includes multiple items, each may have separate delivery dates and tracking'
        },
        {
            title:'Check status of a refund',
            para:'Most packages arrive on time, but, sometimes, the tracking may show as "delivered" and you don"t have your package.'
        },
        {
            title:'Find a missing package that shows as "Delivered"',
            para:'Most packages arrive on time, but, sometimes, the tracking may show as "delivered" and you don"t have your package.'
        },
        {
            title:'Track your package',
            para:'You can find tracking information in your order details. If an order includes multiple items, each may have separate delivery dates and tracking'
        },
        {
            title:'Check status of a refund',
            para:'Most packages arrive on time, but, sometimes, the tracking may show as "delivered" and you don"t have your package.'
        },
        {
            title:'Find a missing package that shows as "Delivered"',
            para:'Most packages arrive on time, but, sometimes, the tracking may show as "delivered" and you don"t have your package.'
        },
        {
            title:'Track your package',
            para:'You can find tracking information in your order details. If an order includes multiple items, each may have separate delivery dates and tracking'
        },
        {
            title:'Check status of a refund',
            para:'Most packages arrive on time, but, sometimes, the tracking may show as "delivered" and you don"t have your package.'
        },
        {
            title:'Find a missing package that shows as "Delivered"',
            para:'Most packages arrive on time, but, sometimes, the tracking may show as "delivered" and you don"t have your package.'
        },
        {
            title:'Track your package',
            para:'You can find tracking information in your order details. If an order includes multiple items, each may have separate delivery dates and tracking'
        },
        {
            title:'Check status of a refund',
            para:'Most packages arrive on time, but, sometimes, the tracking may show as "delivered" and you don"t have your package.'
        },
    ]
  return (
    <>
      <div className="AllFaqs sectionContainer">
      <div className="head">
            <DashboardInnerTitle name='ALL FAQ'/>
            <select name="" id="" className="homeSelect">
              <option value="today">All</option>
            </select>
          </div>
          <div className="allFaqs_cards">
            {faqsData.map((e, i)=>{
                return(<AllFaqCard para={e.para} title={e.title} key={i} />)
            })}
            
          </div>
      </div>
    </>
  )
}

export default AllFaqs;
